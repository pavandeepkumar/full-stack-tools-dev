"use client"

import * as React from "react"

import { NavFavorites } from "@/components/nav-favorites"
import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavWorkspaces } from "@/components/nav-workspaces"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { SIDE_MENU_DATA } from "@/constants"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar className="border-r-0" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={SIDE_MENU_DATA.teams} />
        <NavMain items={SIDE_MENU_DATA.navMain} />
      </SidebarHeader>
      <SidebarContent>
        <NavFavorites favorites={SIDE_MENU_DATA.favorites} />
        <NavWorkspaces workspaces={SIDE_MENU_DATA.workspaces} />
        <NavSecondary items={SIDE_MENU_DATA.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
