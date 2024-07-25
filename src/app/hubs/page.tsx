'use client';
import { HubViewBox } from '@/components/HubViewBox';
import React, { useEffect, useState } from 'react';

interface Hub {
  _id: string;
  hubName: string;
  hubDescription: string;
  people: number;
  m_invest: number;
  invest_period: number;
  Type: string;
  HubOwner: string;
  AvgReturn?: number;
  Risk?: number;
  imgurl?: string;
}

const HubsPage = () => {
  const [hubs, setHubs] = useState<Hub[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchHubs = async () => {
      try {
        const response = await fetch('/api/hubs');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setHubs(data.hubs);
        console.log(data.hubs);
      } catch (error) {
        console.error("Error fetching hubs: ", error);
      }
    };

    fetchHubs();
  }, []);

  const filteredHubs = hubs.filter(hub =>
    hub.hubName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="items-center justify-center">
      <div className="mx-auto max-w-xl mt-7 mb-20 px-5">
        <input
          type="text"
          placeholder="Search hubs..."
          className="w-full p-3 border border-gray-300 rounded-lg"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
        <div className="flex flex-col md:flex-row gap-14 justify-center">
            {filteredHubs.map((hub) => (
              <HubViewBox key={hub._id} hub={hub} />
            ))}
        </div>
    </div>
  );
};

export default HubsPage;
