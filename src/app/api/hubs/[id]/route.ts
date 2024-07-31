
import { connect } from '@/lib/db';
import Hub from '@/lib/models/hub.model';
import User from '@/lib/models/user.model';
import { NextApiRequest, NextApiResponse } from 'next';

// Connect to the database
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await connect();
  
    const { id } = req.query;
  
    if (req.method === 'DELETE') {
        try {
          const deletedHub = await Hub.findByIdAndDelete(id);
          if (!deletedHub) {
            return res.status(404).json({ error: 'Hub not found' });
          }
          return res.status(200).json({ message: 'Hub deleted successfully' });
        } catch (error) {
          console.error('Error deleting hub:', error);
          return res.status(500).json({ error: 'Internal Server Error' });
        }
      } else {
        res.setHeader('Allow', ['DELETE']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
      }
  }