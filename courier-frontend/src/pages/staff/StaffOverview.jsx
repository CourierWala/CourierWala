import React, { useState } from "react";
import Sidebar from "./Sidebar.jsx";
import Overview from "./Overview.jsx";
import Profile from "./Profile.jsx";
import Earnings from "./Earnings.jsx";
import ShipmentHistory from "./ShipmentHistory.jsx";

export default function StaffOverview() {
  const [activePage, setActivePage] = useState("overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSignOut = () => {
    alert("Signed out!");
  };

  let PageComponent = null;
  if (activePage === "overview") PageComponent = <Overview />;
  else if (activePage === "profile") PageComponent = <Profile />;
  else if (activePage === "earnings") PageComponent = <Earnings />;
  else if (activePage === "history") PageComponent = <ShipmentHistory />;

  return (
    <div className="min-h-screen flex bg-slate-100">

      {/* sidebar */}
      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
        onSignOut={handleSignOut}
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
      />

      {/* main UI */}
      <div className="flex-1 md:ml-64 flex flex-col">

        {/* top bar */}
        <header className="h-14 flex items-center px-4 md:px-8 bg-white border-b shadow-sm sticky top-0 z-20">
          <button
            className="md:hidden mr-3 p-2 rounded-lg hover:bg-slate-100"
            onClick={() => setSidebarOpen((o) => !o)}
          >
            {/* Hamburger (3 lines) */}
            <div className="w-5 h-0.5 bg-slate-800 mb-1" />
            <div className="w-5 h-0.5 bg-slate-800 mb-1" />
            <div className="w-5 h-0.5 bg-slate-800" />
          </button>

          <h1 className="text-sm font-semibold text-slate-700">
            Delivery Staff Dashboard
          </h1>
        </header>

        {/* dynamic content */}
        <main className="flex-1">{PageComponent}</main>
      </div>
    </div>
  );
}
