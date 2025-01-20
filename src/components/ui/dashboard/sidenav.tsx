"use client"

import clsx from "clsx";
import { ArrowDownUp, Boxes, ChartColumn, House, Receipt } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { name: 'Overview', href: "/dashboard", icon: House },
  { name: 'Transactions', href: "/dashboard/transactions", icon: ArrowDownUp },
  { name: 'Budgets', href: "/dashboard/budgets", icon: ChartColumn },
  { name: 'Pots', href: "/dashboard/pots", icon: Boxes },
  { name: 'Recurring Bills', href: "/dashboard/recurring-bills", icon: Receipt },
]

export default function SideNav() {
  const pathname = usePathname();

  return (
    <aside className="fixed top-0 min-h-screen left-0 w-[300px] bg-gray-900 rounded-r-2xl">
      <div className="pl-8 py-10">
        <Image 
          src="/images/logo-large.svg"
          alt="logo"
          width={122}
          height={22}
        />
      </div>
      <div className="w-[276px] flex-col items-start h-auto bg-inherit p-0">
        {LINKS.map((link) => {
          const LinkIcon = link.icon;
          return (
            <Link 
              key={link.name}
              href={link.href} 
              className={clsx(
                "h-14 w-full flex items-center justify-start gap-x-4 rounded-l-none rounded-r-xl border-l-4 text-preset-3 text-gray-300 pl-8",
                {
                  "bg-white text-gray-900 border-project-green" : pathname === link.href,
                },
                pathname === link.href ? "bg-white text-gray-900 border-project-gree" : "border-gray-900",
              )}
            >
              <LinkIcon 
                className={clsx(
                  "w-6 h-6",
                  {
                    "text-project-green" : pathname === link.href,
                  }
                )}
              />
              {link.name}
            </Link>
          )
        })}
      </div>
    </aside>
  )
}