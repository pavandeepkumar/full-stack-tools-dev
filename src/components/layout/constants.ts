import { Calendar, Home, Inbox, Search, Settings, Sparkles } from "lucide-react"
interface SidebarMenuItem {
    title: string
    url: string
    icon: React.ElementType
}
const sideMenuItems:SidebarMenuItem[] = [
    {
        title: "Home",
        url: "#",
        icon: Home,
    },
    {
        title: "Inbox",
        url: "#",
        icon: Inbox,
    },
    {
        title: "Calendar",
        url: "#",
        icon: Calendar,
    },
    {
        title: "Search",
        url: "#",
        icon: Search,
    },
    {
        title: "Settings",
        url: "#",
        icon: Settings,
    },
    {
        title: "Ask AI",
        url: "#",
        icon: Sparkles,
    }
]

export default sideMenuItems