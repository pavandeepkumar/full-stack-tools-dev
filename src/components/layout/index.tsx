import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "./sidebar"


export default function LayoutProvider({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider >
      <AppSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  )
}
