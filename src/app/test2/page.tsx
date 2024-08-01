import { MemberCount } from '@/components/MemberCount'
import React from 'react'

const page = () => {
  return (
    <div>
      <MemberCount totalMembers={20} currentMembers={20}></MemberCount>
    </div>
  )
}

export default page
