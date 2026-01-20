


import React from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar({ links, title = "Courier Wala" }) {
  const linkClass = ({ isActive }) =>
    `block px-6 py-2.5 text-sm font-medium rounded-xl transition p-4
     ${
       isActive
         ? "bg-orange-600 text-white"
         : "text-slate-300 hover:bg-slate-800"
     }`;
  return (
    <aside className="fixed inset-y-0 left-0 w-64 bg-slate-900 text-slate-100 flex flex-col">
      {/* Logo / Title */}
      <div className="flex items-center gap-2 px-6 py-5 border-b border-slate-800">
        <div className="h-9 w-9 rounded-xl bg-orange-600 flex items-center justify-center">
          📦
        </div>
        <span className="text-lg font-semibold">{title}</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 mt-4 space-y-1 px-3">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.end}
            className={linkClass}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}







