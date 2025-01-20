import SideNav from "@/components/ui/dashboard/sidenav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SideNav />
      <main className="fixed top-0 bottom-0 left-[300px] right-0 bg-[#F2F3F7] px-10 py-8">
        {children}
      </main>
    </>
  )
}