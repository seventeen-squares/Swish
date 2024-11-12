import { Calendar, Home, Inbox, Search, Settings, Wrench } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
    SidebarHeader,
} from "@/components/ui/sidebar";

import viteLogo from "/vite.svg";
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
    <Sidebar className="bg-white text-gray-600 flex flex-row ">
      <SidebarHeader>
         <img src={viteLogo} className="logo" alt="Vite logo" />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title} className="">
                  <SidebarMenuButton
                    asChild
                    className="text-gray-600 h-20 text-lg align-middle hover:bg-blue-600 hover:text-white flex flex-row items-center rounded-3xl"
                  >
                    <a href={item.url} className="flex flex-row items-center">
                      <item.icon size={40} />
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