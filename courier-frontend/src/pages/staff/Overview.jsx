import React, { useState } from "react";

const initialAvailable = [
  {
    id: "ORDER-284",
    customer: "om kharmate",
    pickup: "123 vaduj,satara ",
    delivery: "45 ram charan, raigad",
    distance: "100 km",
    weight: "2.5 kg",
    amount: 45,
  },
  {
    id: "ORDER-2846",
    customer: "Sarah khan",
    pickup: "789 rajarampuri, kolhapur",
    delivery: "321 radhika patil, satara",
    distance: "150 km",
    weight: "1.8 kg",
    amount: 52,
  },
];

export default function Overview() {
  const [tab, setTab] = useState("available");
  const [availableOrders, setAvailableOrders] = useState(initialAvailable);
  const [acceptedOrders, setAcceptedOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [showHandover, setShowHandover] = useState(false);
  const [otp, setOtp] = useState("");

  const handlePickup = (order) => {
    setAvailableOrders((prev) => prev.filter((o) => o.id !== order.id));
    setAcceptedOrders((prev) => [...prev, order]);
    setTab("accepted");
  };

  const handleHandoverClick = (order) => {
    setSelectedOrder(order);
    setShowHandover(true);
  };

  const completeDelivery = () => {
    // here you’d verify OTP etc. – for now just remove from list
    setAcceptedOrders((prev) =>
      prev.filter((o) => o.id !== selectedOrder.id)
    );
    setShowHandover(false);
    setOtp("");
    alert("Delivery Completed ✅");
  };

  return (
    <div className="p-4 md:p-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-6">
        <div>
          <h1 className="text-2xl font-semibold">WELCOME TO DELIVERY STAFF</h1>
          <p className="text-sm text-slate-500">
            Logged in as: <span className="text-sky-600">Mike Wilson</span>
          </p>
        </div>
        
      </div>

      {/* Tabs */}
      <div className="bg-slate-50 rounded-xl border mb-4">
        <div className="flex">
          <button
            className={`flex-1 py-2.5 text-sm font-medium rounded-xl md:rounded-none md:rounded-tl-xl
              ${
                tab === "available"
                  ? "bg-white text-slate-900 border-b-2 border-orange-600"
                  : "text-slate-500"
              }`}
            onClick={() => setTab("available")}
          >
            Available Orders
          </button>
          <button
            className={`flex-1 py-2.5 text-sm font-medium rounded-xl md:rounded-none md:rounded-tr-xl
              ${
                tab === "accepted"
                  ? "bg-white text-slate-900 border-b-2 border-orange-600"
                  : "text-slate-500"
              }`}
            onClick={() => setTab("accepted")}
          >
            Accepted Orders ({acceptedOrders.length})
          </button>
        </div>

        {/* content container */}
        <div className="p-4 md:p-6">
          {tab === "available" ? (
            <>
              <h2 className="font-semibold mb-4">Available Orders</h2>
              {availableOrders.length === 0 && (
                <p className="text-sm text-slate-500">No available orders.</p>
              )}
              <div className="space-y-4">
                {availableOrders.map((order) => (
                  <OrderCard
                    key={order.id}
                    order={order}
                    type="available"
                    onPickup={() => handlePickup(order)}
                    onOverview={() => {
                      setSelectedOrder(order);
                      setShowDetails(true);
                    }}
                  />
                ))}
              </div>
            </>
          ) : (
            <>
              <h2 className="font-semibold mb-4">Accepted Orders</h2>
              {acceptedOrders.length === 0 && (
                <p className="text-sm text-slate-500">
                  You have no accepted orders.
                </p>
              )}
              <div className="space-y-4">
                {acceptedOrders.map((order) => (
                  <OrderCard
                    key={order.id}
                    order={order}
                    type="accepted"
                    onHandover={() => handleHandoverClick(order)}
                    onOverview={() => {
                      setSelectedOrder(order);
                      setShowDetails(true);
                    }}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Order Details Modal */}
      {showDetails && selectedOrder && (
        <Modal onClose={() => setShowDetails(false)}>
          <h2 className="text-xl font-semibold mb-4">Order Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="font-medium">Order ID</p>
              <p>{selectedOrder.id}</p>
            </div>
            <div>
              <p className="font-medium">Customer</p>
              <p>{selectedOrder.customer}</p>
            </div>
            <div>
              <p className="font-medium">Payment</p>
              <p className="text-orange-600">${selectedOrder.amount}</p>
            </div>
            <div>
              <p className="font-medium">Weight</p>
              <p>{selectedOrder.weight}</p>
            </div>
          </div>

          <div className="mt-6 space-y-3 text-sm">
            <div>
              <p className="font-medium">Pickup Address</p>
              <p>{selectedOrder.pickup}</p>
            </div>
            <div>
              <p className="font-medium">Delivery Address</p>
              <p>{selectedOrder.delivery}</p>
            </div>
            <div>
              <p className="font-medium">Distance</p>
              <p>{selectedOrder.distance}</p>
            </div>
          </div>

          <button
            onClick={() => setShowDetails(false)}
            className="mt-6 w-full py-2.5 rounded-lg bg-slate-100 text-sm font-medium hover:bg-slate-200"
          >
            Close
          </button>
        </Modal>
      )}

      {/* Handover / OTP Modal */}
      {showHandover && selectedOrder && (
        <Modal onClose={() => setShowHandover(false)}>
          <h2 className="text-xl font-semibold text-center mb-2">
            Complete Delivery
          </h2>
          <p className="text-center text-sm text-slate-500 mb-4">
            Order ID{" "}
            <span className="text-orange-600 font-medium">
              {selectedOrder.id}
            </span>
          </p>

          <label className="block text-xs font-medium text-slate-600 mb-1">
            Enter OTP
          </label>
          <input
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            maxLength={6}
            className="w-full border rounded-lg px-3 py-2 text-center tracking-[0.4em] text-lg outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 mb-3"
            placeholder="Enter 6-digit OTP"
          />

          <button
            className="w-full py-2.5 rounded-lg bg-slate-100 text-sm font-medium mb-3 cursor-not-allowed"
            disabled
          >
            Generate Key
          </button>

          <button
            onClick={completeDelivery}
            className="w-full py-2.5 rounded-lg bg-orange-600 hover:bg-orange-600 text-white text-sm font-medium mb-3"
          >
            Delivery Done
          </button>

          <button className="w-full py-2.5 rounded-lg bg-red-600 hover:bg-red-700 text-white text-sm font-medium mb-3">
            Not Able To Deliver
          </button>

          <button
            onClick={() => setShowHandover(false)}
            className="w-full py-2.5 rounded-lg bg-white border text-sm font-medium"
          >
            Cancel
          </button>
        </Modal>
      )}
    </div>
  );
}

function OrderCard({ order, type, onPickup, onHandover, onOverview }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border p-4 md:p-5 flex flex-col gap-3">
      <div className="flex items-start justify-between gap-2">
        <div>
          <p className="text-xs font-semibold text-orange-600">
            {order.id}
          </p>
          <p className="text-sm font-medium text-slate-800">
            {order.customer}
          </p>
        </div>
        <div className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold">
          ${order.amount.toFixed(2)}
        </div>
      </div>

      <div className="text-xs space-y-1 text-slate-600">
        <p>
          <span className="mr-1">📍</span>
          <span className="font-medium">Pickup:</span> {order.pickup}
        </p>
        <p>
          <span className="mr-1">📦</span>
          <span className="font-medium">Delivery:</span> {order.delivery}
        </p>
        <p className="text-slate-500">
          Distance: {order.distance} &nbsp; • &nbsp; Weight: {order.weight}
        </p>
      </div>

      <div className="flex gap-2 mt-2">
        {type === "available" ? (
          <button
            onClick={onPickup}
            className="flex-1 py-2 rounded-lg bg-orange-600 hover:bg-orange-600 text-white text-sm font-medium"
          >
            Pickup
          </button>
        ) : (
          <button
            onClick={onHandover}
            className="flex-1 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white text-sm font-medium"
          >
            Handover
          </button>
        )}
        <button
          onClick={onOverview}
          className="flex-1 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-sm font-medium"
        >
          Overview
        </button>
      </div>
    </div>
  );
}

function Modal({ children, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
      <div className="relative bg-white rounded-2xl max-w-lg w-full p-6 md:p-8 shadow-xl">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-slate-400 hover:text-slate-600"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
}
