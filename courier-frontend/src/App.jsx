import React from "react";
import BoxScene from "./components/Three Fiber/BoxScene";

import './App.css'
import { AuthProvider } from './context/AuthContext'
import AppRoutes from './router/AppRoutes'

function App() {
  return (
    <div>
      {/* <h1>Hello</h1> */}
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </div>
  );
};

export default App;
