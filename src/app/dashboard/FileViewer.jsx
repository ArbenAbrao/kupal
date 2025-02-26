import { useState } from "react";
import { useLocation } from "react-router-dom";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function FileViewer() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const userMobile = params.get("user");

  const [activeSection, setActiveSection] = useState("referred-user");
  const [searchTerm, setSearchTerm] = useState("");
  const transactions = [
    { id: "TXN0012345", date: "2025-02-19 10:30 AM", merchant: "Starbucks", type: "Payment", amount: "-$5.00", status: "Completed" },
    { id: "TXN0012346", date: "2025-02-18 08:15 PM", merchant: "John Doe", type: "Transfer", amount: "+$20.00", status: "Completed" },
    { id: "TXN0012347", date: "2025-02-17 02:45 PM", merchant: "Grab", type: "Payment", amount: "-$12.50", status: "Pending" }, 
  ];

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <div className="flex flex-col min-h-screen bg-gray-100 p-6">
          {/* Header */}
          <div className="bg-white shadow rounded-lg p-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 bg-gray-300 rounded-full" />
              <h2 className="text-xl font-bold">JOHN CARLO BAGORIO</h2>
            </div>
            <div className="flex gap-4">
              {["Referred User", "Transaction History", "Reward History", "Conversion History"].map((btn, i) => (
                <button
                  key={i}
                  className={`bg-gray-300 hover:bg-gray-400 text-black py-2 px-4 rounded-lg shadow ${
                    activeSection === btn.toLowerCase().replace(" ", "-") ? "bg-gray-500" : ""
                  }`}
                  onClick={() => setActiveSection(btn.toLowerCase().replace(" ", "-"))}
                >
                  {btn}
                </button>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {/* Referral Section */}
            <div className="bg-white shadow rounded-lg p-6 flex flex-col gap-4">
              <div className="bg-gray-300 text-center py-3 rounded-lg">hd34jerij3kaf</div>
              <button className="bg-gray-400 text-white py-2 rounded-lg">Copy Referral Code</button>
              <div className="flex justify-between">
                {["Balance", "Reward Points", "Referred Users"].map((label, i) => (
                  <div key={i} className="bg-gray-300 py-2 px-4 rounded-lg text-center w-full mx-1">
                    {label}
                  </div>
                ))}
              </div>
            </div>

            {/* Dynamic Section */}
            <div className="col-span-2 bg-white shadow rounded-lg p-6 relative">
              {activeSection === "referred-user" && (
                <>
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-center flex-1">Edit Profile</h3>
                    <button className="bg-red-600 text-white px-4 py-1 rounded-lg hover:bg-red-700">
                      Actions
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mt-4">
                    {["Username", "Email Address", "First Name", "Last Name"].map((label, i) => (
                      <div key={i}>
                        <label className="block font-semibold mb-1">{label}</label>
                        <input
                          type="text"
                          placeholder={`Enter ${label}`}
                          className="border border-gray-300 w-full h-10 rounded-lg px-2"
                        />
                      </div>
                    ))}
                  </div>

                  <h4 className="mt-4 font-semibold">Contact Information</h4>
                  <input
                    type="text"
                    placeholder="Enter Contact Info"
                    className="border border-gray-300 w-full h-10 rounded-lg px-2 mb-4"
                  />

                  <div className="grid grid-cols-3 gap-4">
                    {["City", "Country", "Postal Code"].map((label, i) => (
                      <div key={i}>
                        <label className="block font-semibold mb-1">{label}</label>
                        <input
                          type="text"
                          placeholder={`Enter ${label}`}
                          className="border border-gray-300 w-full h-10 rounded-lg px-2"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center mt-6">
                    <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600">
                      Save
                    </button>
                  </div>
                </>
              )}

              {activeSection === "transaction-history" && (
                <>
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold">Transaction History</h3>
                    <input
                      type="text"
                      placeholder="Search..."
                      className="border border-gray-300 p-2 rounded-md text-sm"
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  <div className="mt-4 overflow-auto">
                    <table className="w-full text-sm border border-gray-300">
                      <thead>
                        <tr className="bg-gray-200">
                          <th className="text-left p-2">Transaction ID</th>
                          <th className="text-left p-2">Date & Time</th>
                          <th className="text-left p-2">Merchant/User</th>
                          <th className="text-left p-2">Type</th>
                          <th className="text-left p-2">Amount</th>
                          <th className="text-left p-2">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {transactions
                          .filter((row) =>
                            Object.values(row).some((value) =>
                              value.toLowerCase().includes(searchTerm.toLowerCase())
                            )
                          )
                          .map((row, index) => (
                            <tr key={index} className="border-t border-gray-300">
                              <td className="p-2">{row.id}</td>
                              <td className="p-2">{row.date}</td>
                              <td className="p-2">{row.merchant}</td>
                              <td className="p-2">{row.type}</td>
                              <td className="p-2">{row.amount}</td>
                              <td className="p-2">{row.status}</td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                </>
              )}

{activeSection === "conversion-history" && (
                <>
                  <h3 className="text-lg font-semibold text-center">Conversion History</h3>

                  {/* Conversion Table */}
                  <div className="mt-4 overflow-auto">
                    <table className="w-full text-sm border border-gray-300">
                      <thead>
                        <tr className="bg-gray-200">
                          <th className="text-left p-2">Reward Points</th>
                          <th className="text-left p-2">Equivalent Pesos (₱)</th>
                          <th className="text-left p-2">Notes</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { points: "50 Points", pesos: "₱10.00", notes: "Minimum redeemable amount" },
                          { points: "100 Points", pesos: "₱20.00", notes: "Standard conversion rate" },
                          { points: "250 Points", pesos: "₱50.00", notes: "Bonus conversion" },
                          { points: "500 Points", pesos: "₱120.00", notes: "Higher value redemption" },
                          { points: "1,000 Points", pesos: "₱250.00", notes: "Special tier rewards" },
                          { points: "2,000 Points", pesos: "₱600.00", notes: "Exclusive cashback" },
                        ].map((row, index) => (
                          <tr key={index} className="border-t border-gray-300">
                            <td className="p-2">{row.points}</td>
                            <td className="p-2">{row.pesos}</td>
                            <td className="p-2">{row.notes}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Filters: Date Picker & Search Bar */}
                  <div className="flex mt-4 gap-4">
                    <input type="date" className="border p-2 rounded-lg w-1/2" />
                    <input type="text" placeholder="Search Here" className="border p-2 rounded-lg w-1/2" />
                  </div>

                  {/* Transactions Table */}
                  <div className="mt-6 overflow-auto">
                    <table className="w-full text-sm border border-gray-300">
                      <thead>
                        <tr className="bg-gray-200">
                          <th className="text-left p-2">Transaction ID</th>
                          <th className="text-left p-2">Date & Time</th>
                          <th className="text-left p-2">Type</th>
                          <th className="text-left p-2">Amount (₱)</th>
                          <th className="text-left p-2">Reward Points Earned/Used</th>
                          <th className="text-left p-2">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { id: "TXN0012345", date: "2025-02-19 10:30 AM", type: "Payment (Starbucks)", amount: "-₱150.00", points: "+30 Points", status: "Completed" },
                          { id: "TXN0012346", date: "2025-02-18 08:15 PM", type: "Transfer (John Doe)", amount: "-₱500.00", points: "0 Points", status: "Completed" },
                          { id: "TXN0012347", date: "2025-02-17 02:45 PM", type: "Conversion (50 Points)", amount: "+₱10.00", points: "-50 Points", status: "Completed" },
                        ].map((row, index) => (
                          <tr key={index} className="border-t border-gray-300">
                            <td className="p-2">{row.id}</td>
                            <td className="p-2">{row.date}</td>
                            <td className="p-2">{row.type}</td>
                            <td className="p-2">{row.amount}</td>
                            <td className="p-2">{row.points}</td>
                            <td className="p-2">{row.status}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </>
              )}

{activeSection === "reward-history" && (
  <>
    {/* Header and Search Bar in a Single Row */}
    <div className="flex justify-between items-center mb-2">
      <h3 className="text-lg font-semibold">Reward History</h3>
      <input
        type="text"
        placeholder="Search..."
        className="border border-gray-300 p-2 rounded-md text-sm"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>

    {/* Reward History Table */}
    <div className="mt-4 overflow-auto">
      <table className="w-full text-sm border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="text-left p-2">Reward ID</th>
            <th className="text-left p-2">Date</th>
            <th className="text-left p-2">Description</th>
            <th className="text-left p-2">Points Earned</th>
            <th className="text-left p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {[
            { id: "RW001234", date: "2025-02-18", description: "Cashback from Starbucks", points: "+50 Points", status: "Redeemed" },
            { id: "RW001235", date: "2025-02-15", description: "Referral Bonus", points: "+100 Points", status: "Available" },
            { id: "RW001236", date: "2025-02-12", description: "Monthly Spending Bonus", points: "+200 Points", status: "Expired" },
          ]
            .filter((row) =>
              Object.values(row).some((value) =>
                value.toLowerCase().includes(searchTerm.toLowerCase())
              )
            )
            .map((row, index) => (
              <tr key={index} className="border-t border-gray-300">
                <td className="p-2">{row.id}</td>
                <td className="p-2">{row.date}</td>
                <td className="p-2">{row.description}</td>
                <td className="p-2">{row.points}</td>
                <td className="p-2">{row.status}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  </>
)}

              {/* Top Referral Section at the Bottom */}
              <div className="bg-white shadow rounded-lg p-6 mt-6 flex flex-col items-center">
                <h3 className="text-lg font-semibold">Top Referral</h3>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
