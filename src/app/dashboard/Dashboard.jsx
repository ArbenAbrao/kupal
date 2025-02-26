import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { OverviewBarChart } from "@/components/OverviewBarChart"; // Import for the chart component

export default function Page() {
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
                <BreadcrumbPage>Dashboard</BreadcrumbPage>
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

          {/* Sales and Chart Section */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="h-[400px] flex flex-col justify-between rounded-xl bg-muted/50 p-4">
              <h3 className="text-xl font-semibold">Recent Sales</h3>
              <div className="flex flex-col gap-2 mt-4">
                {[
                  { name: "Olivia Martin", amount: "+$1,999" },
                  { name: "Jackson Lee", amount: "+$39" },
                  { name: "Isabella Nguyen", amount: "+$299" },
                  { name: "William Kim", amount: "+$99" },
                  { name: "Sofia Davis", amount: "+$39" },
                ].map((sale, index) => (
                  <div key={index} className="flex justify-between">
                    <span>{sale.name}</span>
                    <span className="font-semibold">{sale.amount}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="h-[400px] rounded-xl bg-muted/50 p-4">
              <h3 className="text-xl font-semibold">Overview</h3>
              <div className="mt-4 h-72 rounded-xl">
                <OverviewBarChart />
              </div>
            </div>
          </div>

          {/* Sales by Country & Recent Referred User */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="h-[400px] overflow-auto rounded-xl bg-muted/50 p-4">
              <h3 className="text-xl font-semibold">Sales by Country</h3>
              <table className="w-full text-sm mt-4">
                <thead>
                  <tr>
                    <th className="text-left">Country</th>
                    <th className="text-left">Sales</th>
                    <th className="text-left">Value</th>
                    <th className="text-left">Bounce</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { country: "United States", sales: "2,500", value: "$230,900", bounce: "29.9%" },
                    { country: "Germany", sales: "3,900", value: "$440,000", bounce: "40.22%" },
                    { country: "Great Britain", sales: "1,400", value: "$190,700", bounce: "23.44%" },
                    { country: "Brazil", sales: "562", value: "$143,960", bounce: "32.14%" },
                  ].map((row, index) => (
                    <tr key={index}>
                      <td>{row.country}</td>
                      <td>{row.sales}</td>
                      <td>{row.value}</td>
                      <td>{row.bounce}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="h-[400px] flex flex-col justify-center items-center rounded-xl bg-muted/50 p-4">
              <h3 className="text-xl font-semibold">Recent Referred User</h3>
              <div className="bg-gray-200 h-40 w-full mt-4 rounded-xl flex items-center justify-center">
                <p className="text-gray-500">No recent referrals</p>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
