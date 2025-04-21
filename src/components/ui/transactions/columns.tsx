"use client"

import { TransactionType } from "@/lib/types"
import { ColumnDef, createColumnHelper } from "@tanstack/react-table"
import Image from "next/image"

const imageLoader = ({ src }: { src: string }) => {
  return `${src}`
}

const columnHelper = createColumnHelper();

export const columns: ColumnDef<TransactionType>[] = [
  {
    accessorKey: "name",
    header: () => <div>Recipient / Sender</div>,
    cell: ({ row }) => {
      const name: string = row.getValue("name")
      // const avatar: string = row.getValue("avatar")

      return (
        <div className="flex items-center gap-x-4">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            {/* <Image 
              src={imageLoader({ src: avatar })}
              width={40}
              height={40}
              alt="name"
            /> */}
          </div>
          <span>{name as string}</span>
        </div>
      )
    }
  },
  {
    accessorKey: "category",
    header: () => <div>Category</div>,
  },
  {
    accessorKey: "date",
    header: "Transaction Date",
    cell: ({ row }) => {
      const date = new Date(row.getValue("date"))
      const formatted = date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });

      return <div>{formatted}</div>
    }
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"))
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount)

      return <div className="text-right font-medium">{formatted}</div>
    }
  },
]