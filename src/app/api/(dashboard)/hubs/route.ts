import { NextRequest, NextResponse } from 'next/server';
import { connect } from '@/lib/db'; // Adjust path if necessary
import Hub from "@/lib/models/hub.model";
import User from '@/lib/models/user.model';

// Connect to the database
connect();

export async function POST(request: NextRequest) {
  try {
    const hubData = await request.json();
    console.log('Received data:', hubData); // Log received data for debugging

    if (!hubData) {
      return NextResponse.json({ success: false, message: 'No data provided' }, { status: 400 });
    }

    // Find the user by username
    const user = await User.findOne({ username: hubData.HubOwner });
    if (!user) {
      return NextResponse.json({ success: false, message: 'User not found' }, { status: 404 });
    }

    // Create the new hub with the user's ObjectId
    const newHub = new Hub({
      ...hubData,
      HubOwner: user._id,
    });

    const savedHub = await newHub.save();

    // Update the user's ownedHubs field
    user.ownedHubs.push(newHub._id);
    await user.save();

    return NextResponse.json({ success: true, data: savedHub }, { status: 201 });
  } catch (error) {
    console.error('Error saving hub:', error);
    return NextResponse.json({ success: false, message: 'Error saving hub' }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  try {
    const hubs = await Hub.find();
    return NextResponse.json({ hubs });
  } catch (error) {
    console.error("Error fetching hubs: ", error);
    return NextResponse.json({ error: 'Failed to fetch hubs' }, { status: 500 });
  }
}
