import {
  BaggageClaim,
  BarChart4,
  Cable,
  ChevronLeft,
  Files,
  Home,
  ShoppingBag,
  ShoppingBasket,
  ShoppingBasketIcon,
  ShoppingCart,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import SubscriptionCard from "./SubscriptionCard";

export default function Sidebar() {
  return (
    <div className="w-60 min-h-screen bg-slate-800 p-0 text-slate-50 justify-between fixed">
      <div className="flex flex-col justify-end">
        {/* logo  */}
        <Link
          href="#"
          className="bg-slate-950  flex space-x-2 items-center py-3 px-2"
        >
          <ShoppingCart />
          <span className="text-xl font-semibold">Inventory</span>
        </Link>
        {/* links  */}

        <nav className="flex flex-col gap-3 px-3 py-6">
          <Link
            href="#"
            className="flex items-center space-x-2 bg-blue-600 text-slate-50 p-2  rounded-md"
          >
            <Home className="h-4 w-4" />
            <span>Home</span>
          </Link>
          <button className="flex items-center space-x-2 p-2 ">
            <BaggageClaim className="h-4 w-4" />
            <span>Inventory</span>
          </button>
          <button className="flex items-center space-x-2 p-2 ">
            <ShoppingBasket className="h-4 w-4" />
            <span>Sales</span>
          </button>
          <button className="flex items-center space-x-2 p-2 ">
            <ShoppingBag className="h-4 w-4" />
            <span>Purchases</span>
          </button>
          <Link href="#" className="flex items-center space-x-2 p-2 ">
            <Cable className="h-4 w-4" />
            <span>Integrations</span>
          </Link>

          <Link href="#" className="flex items-center space-x-2 p-2 ">
            <BarChart4 className="h-4 w-4" />
            <span>Reports</span>
          </Link>

          <Link href="#" className="flex items-center space-x-2 p-2 ">
            <Files className="h-4 w-4" />
            <span>Documents</span>
          </Link>
        </nav>

        <SubscriptionCard />
      </div>

      {/* bottom  */}
      <div className="flex flex-col ">
        <button className="bg-slate-950  flex space-x-2 items-center justify-center py-3 px-2">
          <ChevronLeft className=" text-white" />
        </button>
      </div>
    </div>
  );
}
