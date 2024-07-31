'use client';

import React, { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { DHubViewBox } from './_components/DHubViewBox';

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
        const response = await fetch('/api/ownhubs');
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

  const handleDeleteHub = (id: string) => {
    setHubs(hubs.filter(hub => hub._id !== id));
  };

  const filteredHubs = hubs.filter(hub =>
    hub.hubName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="items-center justify-center">
      <div className="mx-auto max-w-xl pt-12 mb-12 px-5 relative">
        <input
          type="text"
          placeholder="Search hubs..."
          className="w-full p-3 pl-11 border border-gray-400 rounded-lg focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <FaSearch className="absolute top-[60px] left-8 text-gray-400 w-6 h-6" />
      </div>
      <div className='flex justify-center pb-10 px-10'>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 ">
          {filteredHubs.map((hub) => (
            <DHubViewBox key={hub._id} hub={hub} onDelete={handleDeleteHub} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HubsPage;
