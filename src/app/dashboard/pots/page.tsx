import { Button } from "@/components/ui/button";
import Pot from "@/components/ui/dashboard/pot";
import Title from "@/components/ui/dashboard/title";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus } from "lucide-react";
import { promises as fs } from "fs";
import { PotType } from "@/lib/types";

export default async function Page() {
  const file = await fs.readFile(process.cwd() + '/src/app/data.json', 'utf8');
  const data = JSON.parse(file);

  return (
    <div className="flex flex-col gap-y-8 py-8">
      <div className="flex items-center justify-between">
        <Title title="Pots" />
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="w-4 h-4" />
              Add New Pot
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add New Pot</DialogTitle>
              <DialogDescription>
                Create a pot to set savings targets. These can help keep you on track as you save for special purchases.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="">
                <Label htmlFor="pot-name" className="text-preset-5-bold text-gray-500 text-right">
                  Pot Name
                </Label>
                <Input id="pot-name" placeholder="e.g. Rainy Days" className="col-span-3" />
              </div>
              <div className="">
                <Label htmlFor="target" className="text-preset-5-bold text-gray-500 text-right">
                  Target
                </Label>
                <Input id="target" placeholder="e.g. 2000" className="col-span-3" />
              </div>
              <div className="">
                <Label htmlFor="target" className="text-preset-5-bold text-gray-500 text-right">
                  Theme
                </Label>
                <Select defaultValue="green">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="green">Green</SelectItem>
                    <SelectItem value="red">Red</SelectItem>
                    <SelectItem value="yellow">Yellow</SelectItem>
                    <SelectItem value="blue">Blue</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" className="w-full">Add Pot</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <div className="grid lg:grid-cols-2 gap-6">
        {data.pots.map((pot: PotType) => {
          return (
            <Pot 
              key={pot.name}
              name={pot.name}
              target={pot.target}
              total={pot.total}
              theme={pot.theme}
            />
          )
        })}
      </div>
    </div>
  );
}