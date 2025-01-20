import SideNav from "@/components/ui/dashboard/sidenav";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SideNav />
      <main className="fixed top-0 bottom-0 left-0 lg:left-[300px] right-0 bg-[#F2F3F7]">
        <ScrollArea className="h-full px-10">
          {children}
        </ScrollArea>
      </main>
    </>
  )
}