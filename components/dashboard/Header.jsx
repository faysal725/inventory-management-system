import {
  Bell,
  ChevronDown,
  Cog,
  History,
  LayoutGrid,
  Plus,
  Settings,
  Users2,
} from "lucide-react";
import React from "react";
import SearchInput from "./SearchInput";
import Image from "next/image";

export default function Header() {
  return (
    <div className="bg-gray-100 h-12 flex items-center justify-between px-8 border-b border-slate-300">
      <div className="flex gap-3 ">
        {/* recent activities  */}
        <button>
          <History className="w-6 h-6" />
        </button>
        {/* search  */}
        <SearchInput />
      </div>
      <div className="flex items-center gap-3">
        {/* plus icon  */}

        <div className="pr-2 border-r border-gray-300 ">
          <button className="p-1 bg-blue-600 rounded-lg ">
            <Plus className="w-4 h-4 text-slate-50" />
          </button>
        </div>

        <div className="pr-2 border-r border-gray-300 space-x-2">
          <button className="p-1 hover:bg-slate-200 rounded-lg ">
            <Users2 className="w-4 h-4 text-slate-900" />
          </button>

          <button className="p-1 hover:bg-slate-200 rounded-lg ">
            <Bell className="w-4 h-4 text-slate-900" />
          </button>

          <button className="p-1 hover:bg-slate-200 rounded-lg ">
            <Settings className="w-4 h-4 text-slate-900" />
          </button>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center">
            <span>Garat</span>
            <ChevronDown className="h-4 w-4 text-slate-800" />
          </button>

          <button>
            <Image
              src="/user.png"
              width={96}
              height={96}
              className="rounded-full w-8 h-8 border border-slate-800"
              alt="user image"
            />
          </button>

          <button>
            <LayoutGrid className="h-6 w-6 text-slate-900" />
          </button>
        </div>
      </div>
    </div>
  );
}
