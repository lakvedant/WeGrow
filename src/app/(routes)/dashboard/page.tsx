/* eslint-disable react/no-unescaped-entities */
'use client'
import React, { useEffect, useState } from 'react'
import { useUser} from '@clerk/nextjs'
import CardInfo from './_components/CardInfo';



function Dashboard() {
    const { user } = useUser();
    const [hubs, setHubs] = useState<Hub[]>([]);
    const [list, setList] = useState<Hub[]>([]);
    interface Hub {
        amount: number;
        risk: number;
        avgReturn: number;
        Type: string;
      }
      interface HubData {
        AvgReturn: number;
        Risk: number;
        m_invest: number;
        Type: string;
      }

      useEffect(() => {
        const fetchHubs = async () => {
          try {
            const response = await fetch('/api/gethubdata');
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            console.log('API response:', data); // Log full API response
      
            setHubs(data.hubs);
      
            const transformedData = data.hubs.map((hub: any) => ({
              amount: hub.m_invest,
              risk: hub.Risk,
              avgReturn: hub.AvgReturn,
              Type:hub.Type
            }));
            console.log('Transformed data:', transformedData); // Log transformed data
            setList(transformedData);
      
          } catch (error) {
            console.error("Error fetching hubs: ", error);
          }
        };
      
        fetchHubs();
      }, []);
      
  return (
    <div className='p-10'>
        <h2 className="font-bold text-4xl">Hi, {user?.fullName} 👋</h2>
        <p className="text-gray-500 pt-2">Here's what happenning with your money, Lets Manage your investment!</p>
        <CardInfo HubsList={list} />
    </div>
  )
}


export default Dashboard
