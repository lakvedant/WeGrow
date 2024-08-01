import { connect } from '@/lib/db';
import Hub from '@/lib/models/hub.model';
import User from '@/lib/models/user.model';
import { NextRequest, NextResponse } from 'next/server';

export async function PATCH(req: NextRequest) {
  await connect();

  const url = new URL(req.url);
const id = url.pathname.split('/').pop();
  const { userId } = await req.json();

  if (!id || !userId) {
    return NextResponse.json({ error: 'Invalid request data' }, { status: 400 });
  }

  try {
    const hub = await Hub.findById(id);
    if (!hub) {
      return NextResponse.json({ error: 'Hub not found' }, { status: 404 });
    }

    if (hub.currpeople >= hub.people) {
      return NextResponse.json({ error: 'Hub is already full' }, { status: 400 });
    }

    const user = await User.findById(userId);
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    if (user.joinedHubs.includes(hub._id)) {
      return NextResponse.json({ error: 'User already joined this hub' }, { status: 400 });
    }

    // Add user to HubMembers and increment current people
    hub.currpeople += 1;
    user.joinedHubs.push(hub._id);

    await hub.save();
    await user.save();

    return NextResponse.json({ message: 'User joined the hub successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error joining hub:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
