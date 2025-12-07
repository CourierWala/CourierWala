import React from "react";

const menuItems = [
  { id: "overview", label: "Overview" },
  { id: "profile", label: "Profile" },
  { id: "earnings", label: "Current Earnings" },
  { id: "history", label: "Shipment History" },
];

export default function Sidebar({
  activePage,
  setActivePage,
  onSignOut,
  isOpen,
  setIsOpen,
}) {
  return (
    <>
      {/* dark overlay for mobile */}
      <div
        className={`fixed inset-0 bg-black/40 z-30 md:hidden ${
          isOpen ? "block" : "hidden"
        }`}
        onClick={() => setIsOpen(false)}
      />

      <aside
        className={`fixed z-40 inset-y-0 left-0 w-64 bg-slate-900 text-slate-100 flex flex-col
        transition-transform duration-200 md:translate-x-0
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex items-center gap-2 px-6 py-5 border-b border-slate-800">
          <div className="h-9 w-9 rounded-xl bg-orange-600 flex items-center justify-center text-xl font-bold">
            📦
          </div>
          <span className="text-lg font-semibold">SwiftShip</span>
        </div>

        <nav className="flex-1 mt-4">
          {menuItems.map((item) => (
            <button
              key={item.id}
              className={`w-full text-left px-6 py-2.5 text-sm font-medium rounded-r-full
               transition
               ${
                 activePage === item.id
                   ? "bg-orange-600 text-white"
                   : "text-slate-300 hover:bg-slate-800"
               }`}
              onClick={() => {
                setActivePage(item.id);
                setIsOpen(false);
              }}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="mt-auto px-6 pb-6 pt-3 border-t border-slate-800">
          <button
            onClick={onSignOut}
            className="flex items-center gap-2 text-sm text-sky-300 hover:text-sky-200"
          >
            <span>⏻</span>
            <span>Sign Out</span>
          </button>
        </div>
      </aside>
    </>
  );
}
