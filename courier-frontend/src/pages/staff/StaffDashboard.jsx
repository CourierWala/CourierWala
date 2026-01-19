import React from 'react'
import Overview from './Overview'

import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

const StaffDashboard = () => {
  return (
       <div className="min-h-screen flex bg-slate-100">
        <Sidebar />

      <div className="flex-1 ml-64 flex flex-col">
        <header className="h-14 flex items-center px-6 bg-white border-b shadow-sm">
          <h1 className="text-sm font-semibold text-slate-700">
            Delivery Staff Dashboard
          </h1>
        </header>

        <main className="flex-1">
          <Outlet />
        </main>

      </div>
    </div>
    
  )
}

export default StaffDashboard
