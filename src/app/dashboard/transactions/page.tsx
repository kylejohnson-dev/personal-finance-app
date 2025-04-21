import Title from "@/components/ui/dashboard/title";
import { columns } from "@/components/ui/transactions/columns";
import { DataTable } from "@/components/ui/transactions/data-table";
import { fetchTransactions } from "@/lib/data";

export default async function Page() {
  const transactions = await fetchTransactions();

  return (
    <div className="flex flex-col gap-y-8 py-8">
      <div className="flex items-center justify-between">
        <Title title="Transactions" />
      </div>
      <div>
        <DataTable 
          columns={columns}
          data={transactions}
        />
      </div>
    </div>
  );
}