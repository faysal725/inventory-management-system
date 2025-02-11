"use client";
import { CreditCard, X } from "lucide-react";
import React, { useState } from "react";

export default function DashboardBanner() {
  const [hidden, setHidden] = useState(false);
  return (
    <div
      className={`${
        hidden
          ? "hidden"
          : "grid grid-cols-12 items-center py-6 px-16 relative bg-white gap-4"
      }`}
    >
      {/* icon  */}
      <div className="col-span-2">
        <CreditCard className="h-16 w-16 text-slate-500" />
      </div>
      {/* text  */}
      <div className="col-span-6 ">
        <h2 className="font-bold text-xl">Start accepting online payaments</h2>
        <p>
          businesses are moving towards online payments as they're easy, secure
          and fast. Try them for your business today.
        </p>
      </div>

      <div className="col-span-3">
        <button  className="py-2 px-8 uppercase bg-blue-500 text-sm text-white rounded-lg">
          Enable
        </button>
      </div>

      {/* close button  */}
      <button onClick={() => setHidden(true)} className="absolute right-16 top-4">
        <X className="text-slate-600"/>
      </button>
    </div>
  );
}
