import { Calendar, Home, Inbox, Search, Settings, Wrench } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "#",
    icon: Home,
  },
  {
    title: "Cards",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Swish",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Savings",
    url: "#",
    icon: Search,
  },
  {
    title: "Investments",
    url: "#",
    icon: Settings,
  },
  {
    title: "Documents",
    url: "#",
    icon: Settings,
  },
  {
    title: "Settings",
    url: "#",
    icon: Wrench,
  },
];

export function AppSidebar() {
  return (
    <Sidebar className="bg-white">
      <SidebarContent>
        <SidebarGroup>
          {/* <SidebarGroupLabel>Swish</SidebarGroupLabel> */}
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title} className="align-middle">
                  <SidebarMenuButton
                    asChild
                    className="text-black h-20 text-xl align-middle hover:text-blue-800"
                  >
                    <a href={item.url}>
                      <item.icon size={48} />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
