import React from 'react';
import { HubView } from '@/components/HubView';

interface HubPageProps {
  params: {
    id: string;
  };
}

const fetchHubData = async (id: string) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  if (!baseUrl) {
    throw new Error('NEXT_PUBLIC_BASE_URL is not defined');
  }

  const res = await fetch(`${baseUrl}/api/hub/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch hub data');
  }

  return res.json();
};

const HubPage: React.FC<HubPageProps> = async ({ params }) => {
  const hubData = await fetchHubData(params.id);
  return <HubView hubData={hubData} />;
};

export default HubPage;
