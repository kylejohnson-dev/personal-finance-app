import Title from "@/components/ui/dashboard/title";
import { DataTableDemo } from "@/components/ui/transactions/table";

export default function Page() {
  return (
    <div className="flex flex-col gap-y-8 py-8">
      <div className="flex items-center justify-between">
        <Title title="Transactions" />
      </div>
      <div>
        <DataTableDemo />
      </div>
    </div>
  );
}