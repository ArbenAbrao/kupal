import { Link } from "react-router-dom";  // Use React Router instead of Next.js Link
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function UserPage() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        
        <div className="flex flex-col min-h-screen bg-gray-100 p-6">
          {/* Header */}
          <div className="bg-white shadow rounded-lg p-6 flex items-center justify-between">
            <h2 className="text-xl font-bold">Members List</h2>
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Search by Mobile Number"
                className="border rounded p-2"
              />
              <select className="border rounded p-2">
                <option>KYC</option>
              </select>
              <select className="border rounded p-2">
                <option>Is Activated</option>
              </select>
            </div>
          </div>

          {/* Members Table */}
          <div className="bg-white shadow rounded-lg p-6 mt-6 overflow-auto">
            <table className="w-full text-sm border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="p-2">Name</th>
                  <th className="p-2">Mobile Number</th>
                  <th className="p-2">Wallet Balance</th>
                  <th className="p-2">Reward Points</th>
                  <th className="p-2">Account Type</th>
                  <th className="p-2">Community Name</th>
                  <th className="p-2">Address</th>
                  <th className="p-2">KYC Verified</th>
                  <th className="p-2">Activated</th>
                  <th className="p-2">View Profile</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "User 1", mobile: "9121212141", balance: "₱0", points: "290.2", type: "INVESTOR", community: "9121212146", address: "Some Address", kyc: "No", activated: "Yes" },
                  { name: "User 2", mobile: "9121212146", balance: "₱0", points: "5.2", type: "LEADER", community: "9121212146", address: "Some Address", kyc: "No", activated: "Yes" },
                  { name: "User 3", mobile: "9456656707", balance: "₱1000", points: "901.4", type: "LEADER", community: "9121212146", address: "Some Address", kyc: "No", activated: "Yes" },
                  { name: "User 4", mobile: "9121212143", balance: "₱0", points: "0", type: "MERCHANT", community: "9121212146", address: "Some Address", kyc: "No", activated: "No" },
                  { name: "User 5", mobile: "9121212142", balance: "₱0", points: "236.84", type: "ADMIN", community: "9121212146", address: "Some Address", kyc: "No", activated: "No" },
                ].map((row, index) => (
                  <tr key={index} className="border-t border-gray-300">
                    <td className="p-2">{row.name}</td>
                    <td className="p-2">{row.mobile}</td>
                    <td className="p-2">{row.balance}</td>
                    <td className="p-2">{row.points}</td>
                    <td className="p-2">{row.type}</td>
                    <td className="p-2">{row.community}</td>
                    <td className="p-2">{row.address}</td>
                    <td className="p-2">{row.kyc}</td>
                    <td className="p-2">{row.activated}</td>
                    <td className="p-2">
                      <Link to={`/file-viewer?user=${row.mobile}`}>
                        <button className="px-2 py-1 bg-blue-500 text-white rounded">...</button>
                      </Link>
                    </td>
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
