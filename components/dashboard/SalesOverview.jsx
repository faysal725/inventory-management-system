import { Check } from "lucide-react";
import React from "react";

export default function SalesOverview() {
  return (
    <div className="bg-blue-100 border-b border-slate-300 p-8">
      
      {/* sales activity  */}
      <div className="flex">
        <h2>Sales Activity</h2>
        <div className="grid grid-cols-4">
          {/* card  */}
          <div className="rounded-lg border border-slate-200 hover:border-blue-400 bg-white p-8">
            <h4>10</h4>
            <small>Qty</small>
            <div className="flex">
              <Check />
              <span>To be packed</span>
            </div>
          </div>
        </div>
      </div>

      {/* inventory summary  */}
    </div>
  );
}
