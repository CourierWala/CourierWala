import React from "react";

export default function Profile() {
  return (
    <div className="p-4 md:p-8 flex flex-col gap-6">
      <h1 className="text-xl font-semibold">PROFILE</h1>

      <div className="grid md:grid-cols-1 gap-6 ">
        <div className="bg-white rounded-xl shadow-sm border p-6 space-y-4">
          <div className="flex items-center gap-4">
            <div className="h-14 w-14 rounded-full bg-orange-600 flex items-center justify-center text-white font-bold text-xl">
              
            </div>
            <div>
              <p className="font-semibold"></p>
              <button className="text-xs text-orange-600 font-medium">
                
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <label className="block text-xs text-slate-500 mb-1">
                First Name
              </label>
              <input
                className="w-full border rounded-lg px-3 py-2 text-sm"
                defaultValue=""
              />
            </div>
            <div>
              <label className="block text-xs text-slate-500 mb-1">
                Last Name
              </label>
              <input
                className="w-full border rounded-lg px-3 py-2 text-sm"
                defaultValue=""
              />
            </div>
            <div>
              <label className="block text-xs text-slate-500 mb-1">
                Email
              </label>
              <input
                className="w-full border rounded-lg px-3 py-2 text-sm"
                defaultValue=""
              />
            </div>
            <div>
              <label className="block text-xs text-slate-500 mb-1">
                Phone Number
              </label>
              <input
                className="w-full border rounded-lg px-3 py-2 text-sm"
                defaultValue=""
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-xs text-slate-500 mb-1">
                Address
              </label>
              <input
                className="w-full border rounded-lg px-3 py-2 text-sm"
                defaultValue=""
              />
            </div>
            <div>
              <label className="block text-xs text-slate-500 mb-1">
                Vehicle Type
              </label>
              <select className="w-full border rounded-lg px-3 py-2 text-sm">
                <option>Van</option>
                <option>Bike</option>
                <option>Car</option>
              </select>
            </div>
            <div>
              <label className="block text-xs text-slate-500 mb-1">
                Vehicle Number
              </label>
              <input
                className="w-full border rounded-lg px-3 py-2 text-sm"
                defaultValue=""
              />
            </div>
          </div>

          <button className="mt-4 px-4 py-2 rounded-lg bg-orange-600 text-white text-sm font-medium">
            Save Changes
          </button>
        </div>

        <div className="space-y-4">
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <h2 className="text-sm font-semibold mb-3">Earning Details</h2>
            <div className="grid grid-cols-3 gap-3 text-xs">
              <div className="bg-orange-50 rounded-lg p-3">
                <p className="text-slate-500">Total Earnings</p>
                <p className="text-lg font-semibold text-orange-600">
                  $12,847
                </p>
              </div>
              <div className="bg-green-50 rounded-lg p-3">
                <p className="text-slate-500">This Month</p>
                <p className="text-lg font-semibold text-green-600">
                  $2,340
                </p>
              </div>
              <div className="bg-blue-50 rounded-lg p-3">
                <p className="text-slate-500">Today</p>
                <p className="text-lg font-semibold text-blue-600">$145</p>
              </div>
            </div>

            <div className="mt-4 text-xs space-y-2">
              <div>
                <p className="text-slate-500">Bank Account</p>
                <p className="flex justify-between">
                  <span>xxxx xxxx 5678</span>
                  <button className="text-orange-600 text-xs">Edit</button>
                </p>
              </div>
              <div>
                <p className="text-slate-500">Payment Method</p>
                <p className="flex justify-between">
                  <span>Direct Deposit</span>
                  <button className="text-orange-600 text-xs">Change</button>
                </p>
              </div>
            </div>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-xs">
            <p className="font-semibold text-red-700 mb-1">
              Delete Account
            </p>
            <p className="text-red-600 mb-2">
              Once you delete your account, there is no going back. Please be
              certain.
            </p>
            <button className="px-3 py-2 rounded-lg bg-red-600 text-white text-xs font-medium">
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
