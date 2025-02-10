import { Building2 } from "lucide-react";
import React from "react";

export default function HomeNavbar() {
  return (
    <div className="h-32 bg-green-500 p-5">
      <div className="flex space-x-3">
        <div className="flex w-12 h-12 rounded-lg bg-white items-center justify-center">
          <Building2 />
        </div>
        <div className="flex flex-col">
          <p>Hello, Dev</p>
          <span className="text-">Garat</span>
        </div>
      </div>
      
      {/* <nav className="sticky bottom-0">
        <p></p>
      </nav> */}
    </div>
  );
}
