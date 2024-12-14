import { AppSidebar } from "@/components/app-sidebar"
import AppTopNavBar from "@/components/app-top-navbar"
import {
    SidebarInset,
    SidebarProvider
} from "@/components/ui/sidebar"

export default function Page({children: children}: {children: React.ReactNode}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
       <AppTopNavBar />
        <div className="flex flex-1 flex-col gap-4 px-4 py-10">
         {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
