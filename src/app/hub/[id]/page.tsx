// app/hub/[id]/page.tsx
'use client'
import React, { useEffect, useState } from 'react';
import HubView from '@/components/HubView'; // Adjust the path accordingly
import Preloader from '@/components/PreLoader';

const HubPage: React.FC<{ params: { id: string } }> = ({ params }) => {
  const [hubData, setHubData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchHubData = async () => {
      try {
        const response = await fetch(`/api/hubs/${params.id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch hub data');
        }
        const data = await response.json();
        setHubData(data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchHubData();
  }, [params.id]);

  if (loading) return <div><Preloader /></div>;
  if (error) return <div>Error: {error}</div>;
  if (!hubData) return <div>No hub data found</div>;

  return <HubView hubData={hubData} />;
};

export default HubPage;
