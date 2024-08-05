import * as React from "react"

import { Button } from "@/components/ui/button"
// import { Risk } from "@/components/Risk"
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

export function HubView() {
  return (
    <Card className="w-[92.5%] ml-14 mt-10 px-4 relative">
      <CardHeader className="inline-block">
        <div className="inline-block">
        <CardTitle ><span className="text-4xl bg-blue-400 rounded-xl">Hub Name</span></CardTitle>
        <p>Hub leader : dgarsga</p>
        <CardDescription className="text-xl  mt-2 text-neutral-800">Description</CardDescription>
        </div>
        <div className="inline-block right-9 top-0 absolute">
          {/* <Risk percent={45.7} ></Risk> */}
        </div>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Name of your project" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Framework</Label>
              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="next">Next.js</SelectItem>
                  <SelectItem value="sveltekit">SvelteKit</SelectItem>
                  <SelectItem value="astro">Astro</SelectItem>
                  <SelectItem value="nuxt">Nuxt.js</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  )
}
