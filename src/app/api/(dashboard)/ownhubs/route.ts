import { NextRequest, NextResponse } from 'next/server';
import { getAuth } from '@clerk/nextjs/server';
import User from '@/lib/models/user.model'; // Assuming you have a User model defined
import { connect } from '@/lib/db';



export async function GET(request: NextRequest) {
  
  try {
    await connect();
    const { userId } = getAuth(request);
    const userid = await User.findOne({ clerkId: userId });


    // Find user by ID and populate the ownedHubs field
    const user = await User.findById(userid).populate('ownedHubs');
    console.log('user:', user); // Log user for debugging

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Extract hub IDs from the user's document
    const hubs = user.ownedHubs;

    return NextResponse.json({ hubs });
  } catch (error: any) {
    // Log the detailed error for debugging
    console.error("Error fetching hubs: ", error.message, error.stack);

    return NextResponse.json({ error: 'Failed to fetch hubs' }, { status: 500 });
  }
}
