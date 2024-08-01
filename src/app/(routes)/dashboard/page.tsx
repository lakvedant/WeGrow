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
      }
      interface HubData {
        AvgReturn: number;
        Risk: number;
        m_invest: number;
      }

      useEffect(() => {
        const fetchHubs = async () => {
          try {
            const response = await fetch('/api/gethubdata');
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setHubs(data.hubs);
            console.log(hubs)
            // const transformedData = data.hubs.map((hubs: any) => ({
            //   amount: hubs.m_invest,
            //   risk: hubs.Risk,
            //   avgReturn: hubs.AvgReturn
            // }));
            // setList(transformedData);
            // // console.log(list)

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
