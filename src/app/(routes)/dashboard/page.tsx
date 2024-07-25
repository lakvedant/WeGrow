/* eslint-disable react/no-unescaped-entities */
'use client'
import React from 'react'
import { useUser} from '@clerk/nextjs'

function Dashboard() {
    const { user } = useUser();
  return (
    <div className='p-10'>
        <h2 className="font-bold text-4xl">Hi, {user?.fullName} 👋</h2>
        <p className="text-gray-500 pt-2">Here's what happenning with your money, Lets Manage your investment!</p>
    </div>
  )
}


export default Dashboard
