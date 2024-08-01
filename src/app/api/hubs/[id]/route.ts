
import { connect } from '@/lib/db';
import Hub from '@/lib/models/hub.model';
import User from '@/lib/models/user.model';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextRequest, NextResponse } from 'next/server';

// Connect to the database
export async function DELETE(req: Request) {
    await connect();
  
    const url = new URL(req.url);
    const id = url.pathname.split('/').pop();
  
    if (!id) {
      return NextResponse.json({ error: 'Hub ID is required' }, { status: 400 });
    }
  
    try {
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

  