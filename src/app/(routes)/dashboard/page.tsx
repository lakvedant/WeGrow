/* eslint-disable react/no-unescaped-entities */
'use client'
import React from 'react'
import { useUser} from '@clerk/nextjs'
import CardInfo from './_components/CardInfo';

function Dashboard() {
    const { user } = useUser();
    interface Hub {
        amount: number;
        risk: number;
        avgReturn: number;
      }
    const List: Hub[] = [
        { amount: 5000, risk: 3, avgReturn: 7.5 },
        { amount: 10000, risk: 2, avgReturn: 6.2 },
        { amount: 7500, risk: 4, avgReturn: 8.1 },
        { amount: 15000, risk: 1, avgReturn: 5.0 },
        { amount: 2000, risk: 5, avgReturn: 9.0 },
        { amount: 8000, risk: 3, avgReturn: 7.8 },
        { amount: 6000, risk: 4, avgReturn: 8.5 },
        { amount: 12000, risk: 2, avgReturn: 6.7 },
      ];
  return (
    <div className='p-10'>
        <h2 className="font-bold text-4xl">Hi, {user?.fullName} 👋</h2>
        <p className="text-gray-500 pt-2">Here's what happenning with your money, Lets Manage your investment!</p>
        <CardInfo HubsList={List} />
    </div>
  )
}


export default Dashboard
