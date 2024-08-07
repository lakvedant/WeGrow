// app/api/hub/[id]/route.ts
import { connect } from '@/lib/db';
import Hub from '@/lib/models/hub.model';
import User from '@/lib/models/user.model';
import { investType } from '@/constants'; // Adjust the path accordingly
import { NextResponse } from 'next/server';

export async function DELETE(req: Request) {
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

export async function GET(req: Request) {
  await connect();

  const url = new URL(req.url);
  const id = url.pathname.split('/').pop();

  if (!id) {
    return NextResponse.json({ error: 'Hub ID is required' }, { status: 400 });
  }

  try {
    const hub = await Hub.findById(id)
      .populate('HubMembers', 'firstName lastName photo status') // Populate HubMembers with fields from User model
      .exec();

    if (!hub) {
      return NextResponse.json({ error: 'Hub not found' }, { status: 404 });
    }

    const hubMembers = hub.HubMembers.map((member: any) => ({
      _id: member._id.toString(),
      name: `${member.firstName} ${member.lastName}`, // Full name
      image: member.photo, // User photo
      status: member.status, // Member status
    }));

    // Determine the owner and regular members
    const [owner, ...members] = hubMembers;

    const hubData = {
      hubName: hub.hubName,
      hubDescription: hub.hubDescription,
      hubMembers: [{ ...owner, status: 'Owner' }, ...members.map((member: any) => ({ ...member, status: 'Member' }))],
      m_invest: hub.m_invest,
      avgReturn: hub.AvgReturn, 
      risk: hub.Risk, 
    };

    console.log(hubData);
    return NextResponse.json(hubData, { status: 200 });
  } catch (error) {
    console.error('Error fetching hub:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  await connect();

  const url = new URL(req.url);
  const id = url.pathname.split('/').pop();

  if (!id) {
    return NextResponse.json({ error: 'Hub ID is required' }, { status: 400 });
  }

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
    console.error('Error updating hub:', error);
    return NextResponse.json({ success: false, message: error.message }, { status: 400 });
  }
}
