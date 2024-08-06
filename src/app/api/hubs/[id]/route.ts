import { connect } from '@/lib/db';
import Hub from '@/lib/models/hub.model';
import User from '@/lib/models/user.model';
import { NextRequest, NextResponse } from 'next/server';
import { investType } from '@/constants'; // Adjust the path accordingly
import { NextApiRequest, NextApiResponse } from 'next';

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

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  await connect();

  const { id } = params;
  const data = await req.json(); // Get the request body

  try {
    // Find the hub to update
    const hub = await Hub.findById(id);
    if (!hub) {
      return NextResponse.json({ success: false, message: 'Hub not found' }, { status: 404 });
    }

    // Check if the type has changed
    if (data.Type && data.Type !== hub.Type) {
      const selectedType = investType.find(type => type.Type === data.Type);
      if (selectedType) {
        // Update the hub's fields based on the new type
        data.AvgReturn = selectedType.AvgReturn;
        data.Risk = selectedType.Risk;
        data.imgurl = selectedType.imgurl;
      }
    }

    // Update the hub with new data
    const updatedHub = await Hub.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    });

    if (!updatedHub) {
      return NextResponse.json({ success: false, message: 'Hub not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: updatedHub });
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 400 });
  }
}


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  await connect();

  try {
    const hub = await Hub.findById(id).populate('HubOwner').populate('HubMembers');
    if (!hub) {
      return res.status(404).json({ message: 'Hub not found' });
    }

    const members = hub.HubMembers.map((member: any, index: number) => ({
      _id: member._id,
      name: member.name,
      image: member.image,
      status: index === 0 ? 'Owner' : 'Member',
    }));

    res.status(200).json({
      hubName: hub.hubName,
      hubDescription: hub.hubDescription,
      hubMembers: members,
      m_invest: hub.m_invest,
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
}

