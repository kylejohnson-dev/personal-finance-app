import { Button } from "@/components/ui/button";
import Pot from "@/components/ui/dashboard/pot";
import Title from "@/components/ui/dashboard/title";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Plus, Receipt } from "lucide-react";

export default function Page() {
  return (
    <div className="flex flex-col gap-y-8 py-8">
      <div className="flex items-center justify-between">
        <Title title="Recurring Bills" />
      </div>
      <div className="grid lg:grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-5 grid grid-cols-2 lg:grid-cols-1 gap-x-6 lg:space-y-6">
          <div className="flex flex-col gap-y-8 bg-gray-900 rounded-xl p-6">
            <Receipt className="w-10 h-10 text-white" />
            <div>
              <p className="text-white text-preset-4">Total Bills</p>
              <p className="text-white text-preset-1">$384.98</p>
            </div>
          </div>
          <div className="flex flex-col gap-y-5 bg-white rounded-xl p-6">
            <p>Summary</p>
            <div className="flex flex-col gap-y-4">
              <span className="flex items-center justify-between">
                <span className="text-gray-500 text-preset-5">Paid Bills</span>
                <span className="text-gray-900 text-preset-5-bold">4 ($190.00)</span>
              </span>
              <Separator />
              <span className="flex items-center justify-between">
                <span className="text-gray-500 text-preset-5">Total Upcoming</span>
                <span className="text-gray-900 text-preset-5-bold">4 ($194.98)</span>
              </span>
              <Separator />
              <span className="flex items-center justify-between">
                <span className="text-project-red text-preset-5">Paid Bills</span>
                <span className="text-project-red text-preset-5-bold">2 ($59.98)</span>
              </span>
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-7 bg-white rounded-xl p-6">

        </div>
      </div>
    </div>
  );
}