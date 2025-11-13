import React, { useState } from "react";
import { Bell, Search } from "lucide-react";

type TopBarProps = {
  onSearchChange?: (searchQuery: string) => void;
};

export default function TopBar({ onSearchChange }: TopBarProps) {
  const [searchQuery, setSearchQuery] = useState("");

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setSearchQuery(value);
    if (onSearchChange) {
      onSearchChange(value);
    }
  }

  return (
    <header
      className="
  flex items-center gap-4
  px-6 py-4
  border-b border-slate-100
  bg-white/80 backdrop-blur
  "
    >
      {/* Suchfeld */}
      <div className="flex-1">
        <label className="relative block">
          <Search
            className="
        pointer-events-none
        absolute left-4 top-1/2
        -translate-y-1/2
        text-slate-400
        "
          />
          <input
            type="text"
            value={searchQuery}
            onChange={handleInputChange}
            placeholder="Search..."
            className="
          w-full
          rounded-2xl
          border border-transparent
          bg-slate-50
          py-3 pl-11 pr-4
          text-sm text-slate-900
            placeholder:text-slate-400
            outline-none
            focus:border-indigo-300
            focus:bg-white
            focus:ring-2 focus:ring-indigo-100
        "
          />
        </label>
      </div>
      {/* Notifications Button */}
      <button
        type="button"
        className="relative inline-flex
      h-10 w-10
      items-center justify-center
      rounded-full
      border border-slate-200
      bg-slate-50
      shadow-sm
      transition
      hover:bg-slate-100
      "
        aria-label="Notifications"
      >
        <Bell className="h-5 w-5 text-slate-500" />
        <span className="absolute -top-0.5 -right-0.5 rounded-full ring-2 ring-white"></span>
      </button>

      {/* User Info */}
      <div className="flex items-center gap-3">
        <div className="text-right leading-tight">
          <p className="text-sm font-semibold text-slate-900">Adam</p>
          <p className="text-xs text-slate-400">Administrator</p>
        </div>
      </div>
    </header>
  );
}
