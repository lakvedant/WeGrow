import type { NextApiRequest, NextApiResponse } from 'next';
import { connect } from '@/lib/db';
import Hub from '@/lib/models/hub.model';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connect();

  switch (req.method) {
    case 'GET':
      try {
        const hubs = await Hub.find().populate('HubOwner').populate('HubMembers');
        res.status(200).json(hubs);
      } catch (error) {
        res.status(500).json({ success: false, error: 'Server Error' });
      }
      break;
    default:
      res.status(405).json({ success: false, error: 'Method Not Allowed' });
      break;
  }
}
