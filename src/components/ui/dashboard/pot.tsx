import { Ellipsis, Plus } from "lucide-react";
import { Button } from "../button";
import { Progress } from "../progress";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../dropdown-menu";

type PotProps = {
  name: string
  target: number
  total: number
  theme?: string
}

export default function Pot({ name, target, total, theme }: PotProps) {
  const percentage = (total / target) * 100;

  return (
    <div className="flex flex-col gap-y-8 bg-white rounded-xl p-6">
      <div className="flex items-center">
        {/* circle component */}
        <div className="flex items-center gap-x-4">
          <div 
            className="w-4 h-4 rounded-full" 
            style={{ backgroundColor: theme}}
          />
          <h2 className="text-preset-2 text-gray-900">{name}</h2>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="ml-auto">
              <Ellipsis className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Edit Pot</DropdownMenuItem>
            <DropdownMenuItem className="text-red-500">Delete Pot</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div>
        <div className="flex items-center justify-between mb-4">
          <p className="text-preset-4">Total Saved</p>
          <p className="text-preset-1">{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(total)}</p>
        </div>
        <Progress value={percentage} />
        <div className="flex items-center justify-between mt-3">
          <p className="text-preset-5-bold">7.95%</p>
          <p className="text-preset-5">Target of {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(target)}</p>
        </div>
      </div>
      <div className="flex items-center gap-x-4">
        <Button className="w-full">
          <Plus className="w-4 h-4" />
          Add Money
        </Button>
        <Button className="w-full">Withdraw</Button>
      </div>
    </div>
  )
}