import { connect } from '@/lib/db';
import Hub from '@/lib/models/hub.model';
import User from '@/lib/models/user.model';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  await connect();

  const url = new URL(req.url);
  const parts = url.pathname.split('/');
  const id = parts[parts.length - 2];  // Extract the hub ID from the URL
  const { userId } = await req.json();
  console.log('Hub ID:', id);
  console.log('User ID:', userId);

  try {
    // Fetch the hub by ID
    const hub = await Hub.findById(id);
    if (!hub) {
      console.error('Hub not found', { id });
      return NextResponse.json({ error: 'Hub not found' }, { status: 404 });
    }

    // Check if the hub is full
    if (hub.currpeople >= hub.people) {
      return NextResponse.json({ error: 'Hub is already full' }, { status: 400 });
    }

    // Fetch the user by clerkId
    const user = await User.findOne({ clerkId: userId }); // Assuming clerkId is the correct field
    if (!user) {
      console.error('User not found', { userId });
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Check if the user has already joined this hub
    if (user.joinedHubs.includes(hub._id)) {
      return NextResponse.json({ error: 'User already joined this hub' }, { status: 400 });
    }

    // Add user to HubMembers and increment current people
    hub.currpeople += 1;
    user.joinedHubs.push(hub._id);
    hub.HubMembers.push(user._id); // Add user._id to HubMembers array

    // Log the changes for debugging
    console.log('Updating Hub:', hub);
    console.log('Updating User:', user);

    await hub.save();
    await user.save();

    return NextResponse.json({ message: 'User joined the hub successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error joining hub:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
