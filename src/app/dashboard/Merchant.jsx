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

export default function Merchant() {
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
                <BreadcrumbPage>Merchants</BreadcrumbPage>
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
            <Button className="bg-blue-500 text-white p-2 rounded-lg">Add Merchant</Button>
          </div>

          {/* Merchants Table */}
          <div className="overflow-auto rounded-xl bg-white p-4 shadow-md">
            <h3 className="text-xl font-semibold mb-4">Merchants</h3>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2">Merchant ID</th>
                  <th className="text-left p-2">Merchant Full Name</th>
                  <th className="text-left p-2">Business Name</th>
                  <th className="text-left p-2">Business Type</th>
                  <th className="text-left p-2">Discount</th>
                  <th className="text-left p-2">Profile</th>
                </tr>
              </thead>
              <tbody>
                {[ 
                  { id: "#0000001", name: "John Carlo Bagorio", business: "CodeCrafters", type: "Tech & Software", discount: "10%" },
                  { id: "#0000002", name: "Michael James Carter", business: "SwiftCart Online Marketplace", type: "E-commerce & Retail", discount: "10%" },
                  { id: "#0000003", name: "Nelson Daryl Biasura", business: "GoSend", type: "Finance & E-Wallet", discount: "10%" },
                ].map((merchant, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-2">{merchant.id}</td>
                    <td className="p-2">{merchant.name}</td>
                    <td className="p-2">{merchant.business}</td>
                    <td className="p-2">{merchant.type}</td>
                    <td className="p-2">{merchant.discount}</td>
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
