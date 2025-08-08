"use client"
import React from 'react'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuSub,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import { TbInvoice, TbLayoutDashboard } from "react-icons/tb";
import { MdOutlineInventory, MdOutlineLiveTv } from "react-icons/md";
import { IoPeopleOutline } from 'react-icons/io5';
import { HiOutlineCash } from 'react-icons/hi';
import Image from 'next/image';
import annoorLogo from '../public/annoor_logo.jpg'
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible';
import { FaChevronDown } from 'react-icons/fa';
import { ChevronDown } from 'lucide-react';

const AppSidebar = () => {
  const isMobile = useIsMobile()
  const items = [
    {
      title: "HRMS",
      url: "#",
      icon: <IoPeopleOutline size={20}/>,
      children: [
        { title: "Dashboard", url: "/hrms" },
        { title: "Employee Directory", url: "/hrms/employees" },
        { title: "Attendance", url: "#" },
        { title: "Leave Management", url: "#" },
        { title: "Payroll", url: "#" },
        { title: "Recruitment", url: "#" },
        { title: "Performance Reviews", url: "#" },
        { title: "Departments", url: "#" },
        { title: "Holidays", url: "#" },
        { title: "Reports", url: "#" },
      ]
    },
    {
      title: "Billing",
      url: "/dashboard",
      icon: <TbInvoice size={20}/>,
      children: [
        { title: "Dashboard", url: "#" },
        { title: "Invoices", url: "#" },
        { title: "Payments Received", url: "#" },
        { title: "Billing Reports", url: "#" },
        { title: "Tax Summary", url: "#" },
      ]
    },
    {
      title: "Inventory Management",
      url: "#",
      icon: <MdOutlineInventory size={20}/>,
      children: [
        { title: "Dashboard", url: "#" },
        { title: "Stock Overview", url: "#" },
        { title: "Stock Adjustments", url: "#" },
        { title: "Add/Update Items", url: "#" },
        { title: "Purchase Orders", url: "#" },
        { title: "Sales Orders", url: "#" },
        { title: "Suppliers", url: "#" },
        { title: "Inventory Reports", url: "#" },
      ]
    },
    {
      title: "Accounts",
      url: "#",
      icon: <HiOutlineCash size={20}/>,
      children: [
        { title: "Dashboard", url: "#" },
        { title: "Invoices", url: "#" },
        { title: "Transactions", url: "#" },
        { title: "Profit & Loss", url: "#" },
        { title: "Tax Management", url: "#" },
      ]
    },
    // {
    //   title: "Live Site Monitoring",
    //   url: "#",
    //   icon: <MdOutlineLiveTv />,
    // },
  ]
  const pathname = usePathname()
  return (
    <Sidebar collapsible='icon' hidden={isMobile}>
      <SidebarHeader className='flex flex-row gap-2 justify-start items-center px-4 pt-4'>
        <Image src={annoorLogo} alt='Annoor Group' width={30} height={30} /><span className='text-2xl font-semibold'>Annoor Groups</span>
      </SidebarHeader>
      <SidebarContent className='p-4'>
        <SidebarMenu>
          {items.map((item) => {
            const active = pathname.includes(item.url);
            if (item.children) {
              return <Collapsible key={item.title} className="group/collapsible">
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton className="py-4 px-2 hover:bg-green-200 h-12 flex items-center justify-between text-sm cursor-pointer transition duration-500">
                      <div className="flex gap-2 items-center">
                        {item.icon}
                        <span className=''>{item.title}</span>
                      </div>
                      <ChevronDown />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>

                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {item.children.map((sub) => (
                        <SidebarMenuSubItem key={sub.title}>
                          <a
                            href={sub.url}
                            className="pl-2 py-1 text-sm hover:text-green-700 block cursor-pointer"
                          >
                            {sub.title}
                          </a>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            }
            return <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild className={cn('p-4 hover:bg-green-100 h-12 text-sm', active && "text-white font-medium bg-linear-to-r hover:text-white from-green-700 to-green-500")}>
                <a href={item.url}>
                  {item.icon}
                  <span>{item.title}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>

          })}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  )
}

export default AppSidebar