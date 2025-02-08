import { Button } from "@/components/ui/button";
import Pot from "@/components/ui/dashboard/pot";
import Title from "@/components/ui/dashboard/title";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus } from "lucide-react";
import { PotType } from "@/lib/types";
import { fetchPots } from "@/lib/data";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="flex flex-col gap-y-8 py-8">
      <div className="flex items-center justify-between">
        <Title title="Pots" />
        <Skeleton className="h-9 w-[134px]" />
      </div>
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="h-[276.398px] flex flex-col gap-y-8 bg-white rounded-xl p-6 animate-pulse">
          <div className="flex items-center">
            <div className="w-full flex items-center justify-between">
              <Skeleton className="h-6 w-[150px]" />
              <Skeleton className="w-9 h-9" />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between mb-4">
              <Skeleton className="h-[21px] w-20" />
              <Skeleton className="h-[38px] w-32" />
            </div>
            <Skeleton className="h-2 w-full" />
            <div className="flex items-center justify-between mt-3">
              <Skeleton className="h-4 w-[36px]" />
              <Skeleton className="h-4 w-[113px]" />
            </div>
          </div>
          <div className="flex items-center gap-x-4">
            <Skeleton className="h-9 w-full" />
            <Skeleton className="h-9 w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}