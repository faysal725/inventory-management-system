import { ChevronLeft, Home,  ShoppingCart } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Sidebar() {
  return (
    <div className="w-56 min-h-screen bg-slate-800 p-0 text-slate-50 justify-between">
      <div className="flex flex-col">
        <div className="bg-slate-950  flex space-x-2 items-center py-3 px-2">
          <ShoppingCart />
          <span className="text-xl font-semibold">Inventory</span>
        </div>
      </div>

      <div className="flex flex-col justify-end">


        {/* links  */}
        <nav className="flex flex-col gap-4 p-3">

          <Link href="/" className="flex items-center space-x-2">
          
            <Home className="h-4 w-4" />
            <span>Home</span>
          </Link>
          <Link href="/" className="flex items-center space-x-2">
            <Home className="h-4 w-4" />
            <span>Inventory</span>
          </Link>
        </nav>

        <div className="bg-slate-950  flex space-x-2 items-center py-3 px-2">
          <ChevronLeft className=" text-white" />
        </div>
      </div>
    </div>
  );
}
