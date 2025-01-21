import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";


import { Badge } from "@/components/ui/badge"


interface Member {
  _id: string;
  name: string;
  image: string;
  status: string;
}

interface MemberTableProps {
  members: Member[];
  monthlyInvestment: number;
}




export const MemberTable: React.FC<MemberTableProps> = ({ members, monthlyInvestment }) => {
  
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Sr. No.</TableHead>
          <TableHead></TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {members.map((member, index) => (
          <TableRow key={member._id}>
            <TableCell className="font-semibold text-xs">{index + 1}</TableCell>
            <TableCell className='max-w-10'>
              <img src={member.image} alt={member.name} className="h-8 w-8 rounded-full max" />
            </TableCell>
            <TableCell>{member.name}</TableCell>
            <TableCell className='font-bold'>{member.status}</TableCell>
            <TableCell className="text-right">₹ {monthlyInvestment}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell  colSpan={4}>Total Amount:</TableCell>
          <TableCell className='text-right font-bold'>₹ {members.length * monthlyInvestment}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}

export default MemberTable;
