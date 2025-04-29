import { Button } from "@/components/ui/button";
import Pot from "@/components/ui/dashboard/pot";
import Title from "@/components/ui/dashboard/title";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import { PotType } from "@/lib/types";
import { fetchPots } from "@/lib/data";
import PotsForm from "@/components/ui/pots/form";

export default async function Page() {
  const pots = await fetchPots();

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
            <PotsForm />
          </DialogContent>
        </Dialog>
      </div>
      <div className="grid lg:grid-cols-2 gap-6">
        {pots.map((pot: PotType) => {
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