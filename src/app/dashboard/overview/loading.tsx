import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <>        
      <div className="w-full h-full space-y-8 py-8 animate-pulse">
        <h1 className="text-gray-900 text-preset-1">Overview</h1>
        <div className="flex flex-col md:flex-row justify-between gap-x-6 gap-y-3">
          <div className="basis-1/3 h-[120px] space-y-3 bg-gray-900 rounded-xl p-6">
            <Skeleton className="w-32 h-[21px]" />
            <Skeleton className="w-40 h-[38px]" />
          </div>
          <div className="basis-1/3 space-y-3 bg-white rounded-xl p-6">
          <Skeleton className="w-32 h-[21px]" />
          <Skeleton className="w-40 h-[38px]" />
          </div>
          <div className="basis-1/3 space-y-3 bg-white rounded-xl p-6">
          <Skeleton className="w-32 h-[21px]" />
          <Skeleton className="w-40 h-[38px]" />
          </div>
        </div>
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-7 space-y-6">
            <div className="w-full bg-white rounded-xl p-8">
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <Skeleton className="w-10 h-6" />
                  <Skeleton className="w-20 h-6" /> 
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="h-[94px] w-full flex flex-row items-center gap-x-4 bg-neutral-100 rounded-xl p-4">
                    {/* <Landmark className="w-8 h-8" />
                    <div>
                      <p className="text-gray-500 text-preset-4">Total Saved</p>
                      <p className="text-gray-900 text-preset-1">$850</p>
                    </div> */}
                  </div>
                  <div className="relative grid grid-cols-2 gap-y-4">
                    {[0,1,2,3].map((_, index) => {
                      return (
                        <div 
                          key={index} 
                          className="flex items-center gap-x-4"
                        >
                          <span 
                            className="w-1 h-full bg-gray-100 rounded-full"
                          />
                          <span className="space-y-1">
                            <Skeleton className="w-12 h-4" />
                            <Skeleton className="w-14 h-5" />
                          </span>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="col-span-7 bg-white rounded-xl p-8">
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
                  <TableBody>
                    {data.transactions.map((t: Transaction) => (
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
            </div> */}
          </div>
          <div className="col-span-12 lg:col-span-5 space-y-6">
            {/* <div className="w-full bg-white rounded-xl p-8">
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
            </div> */}
            {/* <div className="w-full bg-white rounded-xl p-8">
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
            </div> */}
          </div>
        </div>
      </div>
    </>
    
    // <>        
    //   <div className="w-full h-full space-y-8 py-8">
    //     <h1 className="text-gray-900 text-preset-1">Overview</h1>
    //     <div className="flex justify-between gap-x-6 animate-pulse">
    //       <div className="basis-1/3 h-[120px] space-y-3 bg-gray-900 rounded-xl p-6">
    //         <Skeleton className="h-[21px] w-44" />
    //         <Skeleton className="h-[38.398px] w-44" />
    //       </div>
    //       <div className="basis-1/3 space-y-3 bg-white rounded-xl p-6">
    //         <Skeleton className="h-[21px] w-44" />
    //         <Skeleton className="h-[38.398px] w-44" />
    //       </div>
    //       <div className="basis-1/3 space-y-3 bg-white rounded-xl p-6">
    //         <Skeleton className="h-[21px] w-44" />
    //         <Skeleton className="h-[38.398px] w-44" />
    //       </div>
    //     </div>
    //     <div className="grid grid-cols-12 gap-6 animate-pulse">
    //       <div className="col-span-12 lg:col-span-7 space-y-6">
    //         <div className="w-full h-[218px] bg-white rounded-xl p-8">
    //         </div>
    //         <div className="col-span-7 bg-white rounded-xl p-8">
    //           <div className="space-y-5">
    //             <div className="flex items-center justify-between">
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="col-span-12 lg:col-span-5 space-y-6">
    //         <div className="w-full bg-white rounded-xl p-8">
    //           <div className="space-y-5">
    //             <div className="flex items-center justify-between">
    //             </div>
    //           </div>
    //         </div>
    //         <div className="w-full bg-white rounded-xl p-8">
    //           <div className="space-y-5">
    //             <div className="flex items-center justify-between">
    //               <h2 className="text-gray-900 text-preset-2">Recurring Bills</h2>
    //             </div>
    //             <div className="grid grid-cols-2 gap-x-5">
    //               <div className="flex flex-row items-center gap-x-4 bg-neutral-100 rounded-xl p-4">
    //                 <div>
    //                   <p className="text-gray-500 text-preset-4">Total Saved</p>
    //                   <p className="text-gray-900 text-preset-1">$850</p>
    //                 </div>
    //               </div>
    //               <div className="relative grid grid-cols-2">
    //                 <div className="space-x-1 before:absolute before:-ml-3 before:bg-green-500 before:w-2 before:h-10 before:rounded-full ml-3">
    //                   <p className="text-gray-500 text-preset-5">Savings</p>
    //                   <p className="text-gray-900 text-preset-4-bold">$159</p>
    //                 </div>
    //                 <div className="space-x-1 before:absolute before:-ml-3 before:bg-green-500 before:w-2 before:h-10 before:rounded-full ml-3">
    //                   <p className="text-gray-500 text-preset-5">Gift</p>
    //                   <p className="text-gray-900 text-preset-4-bold">$40</p>
    //                 </div>
    //                 <div className="space-x-1 before:absolute before:-ml-3 before:bg-green-500 before:w-2 before:h-10 before:rounded-full ml-3">
    //                   <p className="text-gray-500 text-preset-5">Concert Ticket</p>
    //                   <p className="text-gray-900 text-preset-4-bold">$110</p>
    //                 </div>
    //                 <div className="space-x-1 before:absolute before:-ml-3 before:bg-green-500 before:w-2 before:h-10 before:rounded-full ml-3">
    //                   <p className="text-gray-500 text-preset-5">New Laptop</p>
    //                   <p className="text-gray-900 text-preset-4-bold">$10</p>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </>
  )
}