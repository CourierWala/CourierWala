import React from "react";

export default function Earnings() {
  return (
    <div className="p-4 md:p-8 space-y-6">
      <h1 className="text-xl font-semibold">CURRENT EARNINGS</h1>

      <div className="grid md:grid-cols-4 gap-4">
        <StatCard title="Today" amount="$145" subtitle="12 deliveries" />
        <StatCard
          title="This Week"
          amount="$1,087"
          subtitle="+12% from last week"
        />
        <StatCard title="This Month" amount="$2,340" subtitle="87 deliveries" />
        <StatCard title="All Time" amount="$12,847" subtitle="Total earnings" />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl border shadow-sm p-4">
          <h2 className="text-sm font-semibold mb-2">
            Daily Earnings (This Week)
          </h2>
          <div className="h-56 flex items-center justify-center text-slate-400 text-xs">
            {/* put a chart library here later */}
            [Bar chart placeholder]
          </div>
        </div>

        <div className="bg-white rounded-xl border shadow-sm p-4">
          <h2 className="text-sm font-semibold mb-2">
            Monthly Earnings Trend
          </h2>
          <div className="h-56 flex items-center justify-center text-slate-400 text-xs">
            [Line chart placeholder]
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border shadow-sm p-4 overflow-x-auto">
        <h2 className="text-sm font-semibold mb-3">Recent Transactions</h2>
        <table className="min-w-full text-xs">
          <thead className="text-slate-500">
            <tr>
              <th className="text-left py-1.5">TRANSACTION ID</th>
              <th className="text-left py-1.5">ORDER ID</th>
              <th className="text-left py-1.5">DATE</th>
              <th className="text-left py-1.5">AMOUNT</th>
              <th className="text-left py-1.5">STATUS</th>
            </tr>
          </thead>
          <tbody className="text-slate-700">
            {["2847", "2846", "2845", "2844"].map((id, i) => (
              <tr key={id} className="border-t text-xs">
                <td className="py-2">TXN-123{i}</td>
                <td className="py-2 text-orange-600">ORDER-{id}</td>
                <td className="py-2">2025-12-0{i + 4}</td>
                <td className="py-2 text-green-600">$4{i + 1}.00</td>
                <td className="py-2">
                  <span className="px-2 py-0.5 rounded-full bg-green-50 text-green-700 text-[11px]">
                    Completed
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function StatCard({ title, amount, subtitle }) {
  return (
    <div className="bg-white rounded-xl border shadow-sm p-4 text-sm">
      <p className="text-slate-500">{title}</p>
      <p className="text-xl font-semibold mt-2">{amount}</p>
      <p className="text-xs text-slate-500 mt-1">{subtitle}</p>
    </div>
  );
}
