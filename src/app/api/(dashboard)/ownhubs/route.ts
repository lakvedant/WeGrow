// pages/api/hubs.ts
import { NextRequest, NextResponse } from 'next/server';
import { getAuth } from '@clerk/nextjs/server';
import Hub from '@/lib/models/hub.model'; // Assuming you have a Hub model defined

export async function GET(request: NextRequest) {
  try {
    const { userId } = getAuth(request);

    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const hubs = await Hub.find({ HubOwner: userId });
    return NextResponse.json({ hubs });
  } catch (error) {
    console.error("Error fetching hubs: ", error);
    return NextResponse.json({ error: 'Failed to fetch hubs' }, { status: 500 });
  }
}
