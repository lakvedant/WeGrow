import { NextRequest, NextResponse } from 'next/server';
import { getAuth } from '@clerk/nextjs/server';
import User from '@/lib/models/user.model'; // Assuming you have a User model defined
import Hub from '@/lib/models/hub.model'; // Assuming you have a Hub model defined
import { connect } from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    await connect();
    const { userId } = getAuth(request);

    // Find the user by Clerk ID
    const user = await User.findOne({ clerkId: userId }).populate('joinedHubs');

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Extract hub IDs from the user's document
    const hubIds = user.joinedHubs;

    // Fetch details for each hub ID
    const hubs = await Hub.find({ _id: { $in: hubIds } });
    
    return NextResponse.json({ hubs });
  } catch (error: any) {
    // Log the detailed error for debugging
    console.error("Error fetching hubs: ", error.message, error.stack);

    return NextResponse.json({ error: 'Failed to fetch hubs' }, { status: 500 });
  }
}
