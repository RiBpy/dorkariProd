"use client";

import { useState, useMemo } from "react";
import { Calendar } from "react-feather";
import _ from "lodash";

const salesData = [
  { id: 1, date: "2025-01-15", amount: 1200 },
  { id: 2, date: "2025-01-22", amount: 800 },
  { id: 3, date: "2025-02-05", amount: 2000 },
  { id: 4, date: "2025-02-10", amount: 1500 },
  { id: 5, date: "2025-03-01", amount: 900 },
  { id: 6, date: "2025-03-12", amount: 2200 },
];

export default function SalesByMonth() {
  const [selectedMonth, setSelectedMonth] = useState("");

  // Group sales by month using Lodash
  const groupedSales = useMemo(() => {
    const grouped = _.groupBy(salesData, (sale) =>
      new Date(sale.date).toLocaleString("default", { month: "long", year: "numeric" })
    );
    return grouped;
  }, []);

  // Get month list
  const monthList = Object.keys(groupedSales);

  // Filtered sales
  const filteredSales = selectedMonth
    ? groupedSales[selectedMonth] || []
    : salesData;

  const totalSales = filteredSales.reduce((sum, sale) => sum + sale.amount, 0);

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
        <Calendar className="text-blue-500" /> Sales by Month
      </h2>

      {/* Month Filter */}
      <div className="mb-4">
        <select
          className="border p-2 rounded w-full"
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
        >
          <option value="">All Months</option>
          {monthList.map((month) => (
            <option key={month} value={month}>
              {month}
            </option>
          ))}
        </select>
      </div>

      {/* Sales Table */}
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Date</th>
            <th className="border p-2">Amount ($)</th>
          </tr>
        </thead>
        <tbody>
          {filteredSales.map((sale) => (
            <tr key={sale.id}>
              <td className="border p-2">{sale.date}</td>
              <td className="border p-2 text-right">{sale.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Total Sales */}
      <div className="mt-4 p-3 bg-gray-50 border rounded text-lg font-semibold">
        Total Sales: ${totalSales}
      </div>
    </div>
  );
}
