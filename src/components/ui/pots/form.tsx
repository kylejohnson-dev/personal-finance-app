// Wrapping the submit button in Dialog Close is a temporary fix to closing the 
// dialog on form submission. Dialog should not close unless form is successfully
// submitted.
"use client"

import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { createPot } from "@/lib/actions";
import { Button } from "../button";
import { Label } from "../label";
import { DialogClose } from "../dialog";

const COLORS = [
  {
    text: 'Green',
    value: 'green',
    hexidecimal: '#277C78',
  },
  {
    text: 'Yellow',
    value: 'yellow',
    hexidecimal: '#F2CDAC',
  },
  {
    text: 'Cyan',
    value: 'cyan',
    hexidecimal: '#82C9D7',
  },
  {
    text: 'Navy',
    value: 'navy',
    hexidecimal: '#626070',
  },
  {
    text: 'Red',
    value: 'red',
    hexidecimal: '#C94736',
  },
  {
    text: 'Purple',
    value: 'purple',
    hexidecimal: '#826CB0',
  },
  {
    text: 'Turquoise',
    value: 'turquoise',
    hexidecimal: '#597C7C',
  },
  {
    text: 'Brown',
    value: 'brown',
    hexidecimal: '#93674F',
  },
  {
    text: 'Magenta',
    value: 'magenta',
    hexidecimal: '#934F6F',
  },
  {
    text: 'Blue',
    value: 'blue',
    hexidecimal: '#3F82B2',
  },
  {
    text: 'Navy Grey',
    value: 'navy-grey',
    hexidecimal: '#97A0AC',
  },
  {
    text: 'Army Green',
    value: 'army-green',
    hexidecimal: '#7F9161',
  },
  {
    text: 'Pink',
    value: 'pink',
    hexidecimal: '#AF81BA',
  },
  {
    text: 'Gold',
    value: 'gold',
    hexidecimal: '#CAB361',
  },
  {
    text: 'Orange',
    value: 'orange',
    hexidecimal: '#BE6C49',
  },
];

export default function PotsForm() {
  return (
      <form action={createPot}>
        <div className="grid gap-4 py-4">
          <div>
            <Label htmlFor="name" className="text-preset-5-bold text-gray-500 text-right">
              Pot Name
            </Label>
            <Input 
              id="name"
              name="name"
              placeholder="e.g. Rainy Days" 
              className="col-span-3" 
              required
            />
          </div>
          <div>
            <Label htmlFor="target" className="text-preset-5-bold text-gray-500 text-right">Target</Label>
            <Input 
              id="target"
              name="target"
              placeholder="e.g. 2000" 
              className="col-span-3" 
              required
            />
          </div>
          <div>
            <Label htmlFor="theme" className="text-preset-5-bold text-gray-500 text-right">Theme</Label>
            <Select 
              name="theme" 
              defaultValue="green"
              required
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {COLORS.map((color) => (
                  <SelectItem value={color.value} key={color.value}>
                    <span className="flex flex-row items-center gap-x-3">
                      <span className="block w-4 h-4 rounded-full bg-green-500" style={{ backgroundColor: color.hexidecimal }}></span>
                      <span className="block">{color.text}</span>
                    </span>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            </div>
            <DialogClose asChild> 
              <Button type="submit" className="w-full">Add Pot</Button>
            </DialogClose>
        </div>
      </form>
  );
}