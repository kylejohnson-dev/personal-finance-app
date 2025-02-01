import { Button } from "@/components/ui/button";
import Pot from "@/components/ui/dashboard/pot";
import Title from "@/components/ui/dashboard/title";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus } from "lucide-react";

export default function Page() {
  return (
    <div className="flex flex-col gap-y-8 py-8">
      <div className="flex items-center justify-between">
        <Title title="Recurring Bills" />
      </div>
      <div className="grid lg:grid-cols-12 gap-6">
        <div className="col-span-4 space-y-6">
          <div className="h-[190px] bg-gray-900 rounded-xl p-6"></div>
          <div className="h-[204px] bg-white rounded-xl p-6"></div>
        </div>
        <div className="col-span-8 bg-white rounded-xl p-6">

        </div>
      </div>
    </div>
  );
}