"use client"

import clsx from "clsx";
import { ArrowDownUp, Boxes, ChartColumn, House, Receipt } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { name: 'Overview', href: "/dashboard/overivew", icon: House },
  { name: 'Transactions', href: "/dashboard/transactions", icon: ArrowDownUp },
  { name: 'Budgets', href: "/dashboard/budgets", icon: ChartColumn },
  { name: 'Pots', href: "/dashboard/pots", icon: Boxes },
  { name: 'Recurring Bills', href: "/dashboard/recurring-bills", icon: Receipt },
]

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 lg:hidden w-full h-[52px] md:h-[74px] bg-gray-900 rounded-t-[8px]">
      <ul className="h-full flex items-center justify-evenly px-4 pt-2">
        {LINKS.map((link) => {
          const LinkIcon = link.icon;
          return (
            <li
              key={link.name}
              className="w-full h-full"
            >
              <Link 
                href={link.href}
                className={clsx(
                  "w-full h-full flex flex-col items-center justify-center gap-y-1 rounded-t-[8px]",
                  pathname === link.href ? "bg-white" : "bg-gray-900",
                )}
              >
                <LinkIcon 
                  className={clsx(
                    "w-6 h-6 text-gray-300",
                    {
                      "text-project-green" : pathname === link.href,
                    }
                  )}
                />
                <span 
                  className={clsx(
                    "hidden md:block text-preset-5-bold",
                    pathname === link.href ? "text-gray-900" : "text-gray-300"
                  )}
                >
                  {link.name}
                </span>
              </Link>
            </li>
          )
        })}
        
      </ul>
    </nav>
  )
}