import { NextRequest, NextResponse } from 'next/server';
import { connect } from '@/lib/db';
import Hub from '@/lib/models/hub.model';
import User from '@/lib/models/user.model';
// import { sendHubCreationEmail } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    await connect(); // Ensure the database connection is established

    const hubData = await request.json();
    console.log('Received data:', hubData); // Log received data for debugging

    if (!hubData || !hubData.HubOwner) {
      console.error('Invalid data provided:', hubData);
      return NextResponse.json({ success: false, message: 'Invalid data provided' }, { status: 400 });
    }

    // Find the user by username
    const user = await User.findOne({ username: hubData.HubOwner });
    if (!user) {
      console.error('User not found:', hubData.HubOwner);
      return NextResponse.json({ success: false, message: 'User not found' }, { status: 404 });
    }

    // Create the new hub with the user's ObjectId
    const newHub = new Hub({
      ...hubData,
      HubOwner: user._id,
      HubMembers: [user._id],
      currpeople: 1,
    });

    const savedHub = await newHub.save();
    console.log('Hub saved:', savedHub);

    const fullName = `${user.firstName} ${user.lastName}`;
    // // Send email to the user upon hub creation
    // await sendHubCreationEmail(user.email, fullName, newHub.hubName);

    // Update the user's ownedHubs and joinedHubs fields
    user.ownedHubs.push(newHub._id);
    user.joinedHubs.push(newHub._id);
    await user.save();

    return NextResponse.json({ success: true, data: savedHub }, { status: 201 });
  } catch (error) {
    console.error('Error saving hub:', error);
    return NextResponse.json({ success: false, message: 'Error saving hub' }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  try {
    await connect(); // Ensure the database connection is established

    const hubs = await Hub.find().populate('HubOwner', 'firstName lastName photo');
    return NextResponse.json({ hubs });
  } catch (error) {
    console.error('Error fetching hubs:', error);
    return NextResponse.json({ error: 'Failed to fetch hubs' }, { status: 500 });
  }
}
