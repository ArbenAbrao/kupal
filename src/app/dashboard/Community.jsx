import React from "react";
import { AppSidebar } from "@/components/app-sidebar";
import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function Community() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">Customer Support</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Community</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>

        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          {/* Cards Section */}
          <div className="grid gap-4 md:grid-cols-4">
            {[
              { title: "Total Revenue", value: "$45,231.89", change: "+20.1%" },
              { title: "Subscriptions", value: "+2,350", change: "+18.0%" },
              { title: "Sales", value: "+12,234", change: "+19%" },
              { title: "Active Now", value: "+573", change: "+201 since last hour" },
            ].map((item, index) => (
              <div key={index} className="h-[150px] rounded-xl bg-muted/50 p-4 flex flex-col justify-between">
                <h3 className="text-xl">{item.title}</h3>
                <div className="text-2xl font-bold">{item.value}</div>
                <span className="text-sm text-green-500">{item.change}</span>
              </div>
            ))}
          </div>

          {/* Filters Section */}
          <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-md">
            <Input type="date" className="border p-2 rounded-lg" placeholder="Select date range" />
            <select className="border p-2 rounded-lg">
              <option value="all">Sort by Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
            <Button className="bg-blue-500 text-white p-2 rounded-lg">Add Community</Button>
          </div>

          {/* Community Table */}
          <div className="overflow-auto rounded-xl bg-white p-4 shadow-md">
            <h3 className="text-xl font-semibold mb-4">Community</h3>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2">Community ID</th>
                  <th className="text-left p-2">Community Name</th>
                  <th className="text-left p-2">Leader</th>
                  <th className="text-left p-2">Contact Number</th>
                  <th className="text-left p-2">Reward Points</th>
                  <th className="text-left p-2">Date</th>
                  <th className="text-left p-2"></th>
                </tr>
              </thead>
              <tbody>
                {[ 
                  { id: "#0000001", name: "	CodeCrafters", leader: "John Carlo Bagorio", contact: "09123049923", reward: "43,000", date: "19/02/2024" },
                  { id: "#0000002", name: "	SwiftCart Online Marketplace", leader: "Michael James Carter", contact: "09123048284", reward: "10,000", date: "05/05/2024" },
                  { id: "#0000003", name: "	GoSend", leader: "Nelson Daryl Biasura", contact: "09123043434", reward: "500,000", date: "12/07/2024" },
                ].map((community, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-2">{community.id}</td>
                    <td className="p-2">{community.name}</td>
                    <td className="p-2">{community.leader}</td>
                    <td className="p-2">{community.contact}</td>
                    <td className="p-2">{community.reward}</td>
                    <td className="p-2">{community.date}</td>
                    <td className="p-2 text-blue-500 cursor-pointer">View Profile</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
