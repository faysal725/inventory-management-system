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
        <div className=" pr-8 grid grid-cols-4 gap-4">
          {/* card  */}
          {salesActivity.map((item, index) => {
            return (
              // <Link
              //   href={item.href}
              //   key={index}
              //   className="shadow rounded-lg border border-slate-200 hover:border-blue-400 bg-white px-3 py-4  cursor-pointer flex items-center flex-col gap-3 transition-all duration-300"
              // >
              //   <h4 className={`font-semibold text-3xl ${item.color}`}>
              //     {item.number}
              //   </h4>
              //   <small className={item.color}>{item.unit}</small>
              //   <div className="flex items-center space-x-2 text-slate-500">
              //     <CheckCircle2 className="w-4 h-4" />
              //     <span className="uppercase text-xs">{item.title}</span>
              //   </div>
              // </Link>
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
