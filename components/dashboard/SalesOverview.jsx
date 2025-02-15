import { Check, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import React from "react";
import SalesActivityCard from "./SalesActivityCard";
import InventoryCard from "./InventoryCard";

export default function SalesOverview() {
  const salesActivity = [
    {
      title: "To be Packed",
      number: "10",
      unit: "Qty",
      href: "#",
      color: "text-red-600",
    },

    {
      title: "To be Shipped",
      number: "10",
      unit: "Pkgs",
      href: "#",
      color: "text-blue-600",
    },

    {
      title: "To be Delivered",
      number: "10",
      unit: "Pkgs",
      href: "#",
      color: "text-green-600",
    },

    {
      title: "To be Invoiced",
      number: "10",
      unit: "Qty",
      href: "#",
      color: "text-orange-600",
    },
  ];

  const inventorySummary = [
    { title: "Quantity in Hand", number: 10 },
    { title: "Quantity in Received", number: 0 },
  ];
  return (
    <div className="bg-blue-50 border-b border-slate-300  grid grid-cols-12 gap-4">
      {/* sales activity  */}
      <div className="col-span-8 border-r border-slate-300 p-8">
        <h2 className="mb-6 text-xl">Sales Activity</h2>
        <div className=" pr-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* card  */}
          {salesActivity.map((item, index) => {
            return (

              <SalesActivityCard item={item} key={index} />
            );
          })}
        </div>
      </div>

      {/* inventory summary  */}
      <div className="col-span-4 p-8">
        <h2 className="mb-6 text-xl">Inventory Summary</h2>
        <div>
          {inventorySummary.map((item, index) => (
            <InventoryCard item={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
