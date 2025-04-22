import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { ChevronRight, Landmark } from "lucide-react";
import { promises as fs } from "fs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BudgetPieChart } from "@/components/pie-chart";
import { PotType, TransactionType } from "@/lib/types";
import Link from "next/link";
import clsx from "clsx";
import { fetchPots } from "@/lib/data";

export default async function Page() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const file = await fs.readFile(process.cwd() + '/src/app/data.json', 'utf8');
  const data = JSON.parse(file);

  const current = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(data.balance.current)
  const income = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(data.balance.income)
  const expenses = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(data.balance.expenses)

  const pots = await fetchPots(4);

  return (
    <>        
      <div className="w-full h-full space-y-8 py-8">
        <h1 className="text-gray-900 text-preset-1">Overview</h1>
        <div className="flex flex-col md:flex-row justify-between gap-x-6 gap-y-3">
          <div className="basis-1/3 h-[120px] space-y-3 bg-gray-900 rounded-xl p-6">
            <p className="text-white text-preset-4">Current Balance</p>
            <p className="text-white text-preset-1">{current}</p>
          </div>
          <div className="basis-1/3 space-y-3 bg-white rounded-xl p-6">
            <p className="text-gray-500 text-preset-4">Income</p>
            <p className="text-gray-900 text-preset-1">{income}</p>
          </div>
          <div className="basis-1/3 space-y-3 bg-white rounded-xl p-6">
            <p className="text-gray-500 text-preset-4">Expenses</p>
            <p className="text-gray-900 text-preset-1">{expenses}</p>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-7 space-y-6">
            <div className="w-full bg-white rounded-xl p-8">
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <h2 className="text-gray-900 text-preset-2">Pots</h2>
                  <Button asChild variant="ghost" size="sm">
                    <Link href="/dashboard/pots">
                      See Details
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </Button>  
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="flex flex-row items-center gap-x-4 bg-neutral-100 rounded-xl p-4">
                    <Landmark className="w-8 h-8" />
                    <div>
                      <p className="text-gray-500 text-preset-4">Total Saved</p>
                      <p className="text-gray-900 text-preset-1">$850</p>
                    </div>
                  </div>
                  <div className="relative grid grid-cols-2 gap-y-4">
                    {pots.map((pot: PotType) => {
                      const color = pot.theme;
                      return (
                        <div 
                          key={pot.id} 
                          className="flex items-center gap-x-4"
                        >
                          <span 
                            className="w-1 h-full rounded-full"
                            style={{ backgroundColor: color }}
                          />
                          <span className="overflow-hidden">
                            <p className="text-gray-500 text-preset-5 text-nowrap">{pot.name}</p>
                            <p className="text-gray-900 text-preset-4-bold">{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(pot.total)}</p>
                          </span>
                        </div>
                      )
                    })}
                    {/* <div className="space-x-1 before:absolute before:-ml-3 before:bg-green-500 before:w-2 before:h-10 before:rounded-full ml-3">
                      <p className="text-gray-500 text-preset-5">Savings</p>
                      <p className="text-gray-900 text-preset-4-bold">$159</p>
                    </div>
                    <div className="space-x-1 before:absolute before:-ml-3 before:bg-green-500 before:w-2 before:h-10 before:rounded-full ml-3">
                      <p className="text-gray-500 text-preset-5">Gift</p>
                      <p className="text-gray-900 text-preset-4-bold">$40</p>
                    </div>
                    <div className="space-x-1 before:absolute before:-ml-3 before:bg-green-500 before:w-2 before:h-10 before:rounded-full ml-3">
                      <p className="text-gray-500 text-preset-5">Concert Ticket</p>
                      <p className="text-gray-900 text-preset-4-bold">$110</p>
                    </div>
                    <div className="space-x-1 before:absolute before:-ml-3 before:bg-green-500 before:w-2 before:h-10 before:rounded-full ml-3">
                      <p className="text-gray-500 text-preset-5">New Laptop</p>
                      <p className="text-gray-900 text-preset-4-bold">$10</p>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-7 bg-white rounded-xl p-8">
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <h2 className="text-gray-900 text-preset-2">Transactions</h2>
                  <Button asChild variant="ghost" size="sm">
                    <Link href="/dashboard/transactions">
                      View All
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
                <Table>
                  {/* <TableHeader>
                    <TableRow>
                      <TableHead>Recipient / Sender</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Transaction Date</TableHead>
                      <TableHead>Amount</TableHead>
                    </TableRow>
                  </TableHeader> */}
                  <TableBody>
                    {/* {data.transactions.map((t) => (
                      <TableRow key={t.name}>
                        <TableCell>{t.name}</TableCell>
                        <TableCell>{t.category}</TableCell>
                        <TableCell>{t.date}</TableCell>
                        <TableCell>{t.amount}</TableCell>
                      </TableRow>
                    ))} */}
                    {data.transactions.slice(0,5).map((t: TransactionType) => (
                      <TableRow key={t.name}>
                        <TableCell>
                          <span className="flex items-center gap-x-4">
                            <Avatar>
                              <AvatarImage src={t.avatar}/>
                              <AvatarFallback>F</AvatarFallback>
                            </Avatar>
                            <span>{t.name}</span>
                          </span>
                        </TableCell>
                        <TableCell>
                          <span className="flex flex-col items-end">
                            <span>{t.amount}</span>
                            <span>{t.date}</span>
                          </span>
                          
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-5 space-y-6">
            <div className="w-full bg-white rounded-xl p-8">
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <h2 className="text-gray-900 text-preset-2">Budgets</h2>
                  <Button asChild variant="ghost" size="sm">
                    <Link href="/dashboard/budgets">
                      See Details
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
                <BudgetPieChart />
              </div>
            </div>
            <div className="w-full bg-white rounded-xl p-8">
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <h2 className="text-gray-900 text-preset-2">Recurring Bills</h2>
                  <Button asChild variant="ghost" size="sm">
                    <Link href="/dashboard/recurring-bills">
                      See Details
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
                <div className="grid grid-cols-2 gap-x-5">
                  <div className="flex flex-row items-center gap-x-4 bg-neutral-100 rounded-xl p-4">
                    <Landmark className="w-8 h-8" />
                    <div>
                      <p className="text-gray-500 text-preset-4">Total Saved</p>
                      <p className="text-gray-900 text-preset-1">$850</p>
                    </div>
                  </div>
                  <div className="relative grid grid-cols-2">
                    <div className="space-x-1 before:absolute before:-ml-3 before:bg-green-500 before:w-2 before:h-10 before:rounded-full ml-3">
                      <p className="text-gray-500 text-preset-5">Savings</p>
                      <p className="text-gray-900 text-preset-4-bold">$159</p>
                    </div>
                    <div className="space-x-1 before:absolute before:-ml-3 before:bg-green-500 before:w-2 before:h-10 before:rounded-full ml-3">
                      <p className="text-gray-500 text-preset-5">Gift</p>
                      <p className="text-gray-900 text-preset-4-bold">$40</p>
                    </div>
                    <div className="space-x-1 before:absolute before:-ml-3 before:bg-green-500 before:w-2 before:h-10 before:rounded-full ml-3">
                      <p className="text-gray-500 text-preset-5">Concert Ticket</p>
                      <p className="text-gray-900 text-preset-4-bold">$110</p>
                    </div>
                    <div className="space-x-1 before:absolute before:-ml-3 before:bg-green-500 before:w-2 before:h-10 before:rounded-full ml-3">
                      <p className="text-gray-500 text-preset-5">New Laptop</p>
                      <p className="text-gray-900 text-preset-4-bold">$10</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}