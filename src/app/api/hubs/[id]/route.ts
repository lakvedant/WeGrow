import { connect } from '@/lib/db';
import Hub from '@/lib/models/hub.model';
import User from '@/lib/models/user.model';
import { NextRequest, NextResponse } from 'next/server';

export async function DELETE(req: NextRequest) {
    await connect();
  
    const url = new URL(req.url);
    const id = url.pathname.split('/').pop();
  
    if (!id) {
      return NextResponse.json({ error: 'Hub ID is required' }, { status: 400 });
    }
  
    try {
      // Find the hub to be deleted
      const hub = await Hub.findById(id);
      if (!hub) {
        return NextResponse.json({ error: 'Hub not found' }, { status: 404 });
      }
      
      // Remove the hub from the owner's list of owned hubs
      await User.updateOne(
        { _id: hub.HubOwner },
        { $pull: { ownedHubs: id } }
      );
      
      // Remove the hub from all users' list of joined hubs
      await User.updateMany(
        { _id: { $in: hub.HubMembers } },
        { $pull: { joinedHubs: id } }
      );

      // Delete the hub
      const deletedHub = await Hub.findByIdAndDelete(id);
      if (!deletedHub) {
        return NextResponse.json({ error: 'Hub not found' }, { status: 404 });
      }
      
      return NextResponse.json({ message: 'Hub deleted successfully' }, { status: 200 });
    } catch (error) {
      console.error('Error deleting hub:', error);
      return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
