import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Link from "next/link"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import Image from "next/image"

export function HubViewBox() {
  return (
    <Card className="w-[375px] h-[300px] bg-gray-100 mr-8">
      <CardHeader className="inline-block">
        <div className="inline-block mr-20">
            <CardTitle>Hub Name</CardTitle>
            <CardDescription>Hub Description</CardDescription>
        </div>
        <div className="inline-block">
            <Image src='/group.png' alt='group' width={60} height={60} />
        </div>
      </CardHeader>
      <CardFooter className="flex justify-center items-center pb-0.5 top-10">
        <div className="">
            <Button asChild>
            <Link href="/hub/hub_name" className="bg-blue-50 text-blue-100 mr-6">Know More</Link>
            </Button>
            <Dialog>
                <DialogTrigger asChild>
                    <Button className="bg-blue-50 text-blue-100">Request to Join</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Edit profile</DialogTitle>
                        <DialogDescription>
                            Make changes to your profile here. Click save when  done.
                        </DialogDescription>
                        </DialogHeader>
                    <DialogFooter>
                        <Button type="submit">Save changes</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
      </CardFooter>
    </Card>
  )
}
