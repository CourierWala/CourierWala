import React from "react";

import './App.css'
import { AuthProvider } from './context/AuthContext'
import AppRoutes from './router/AppRoutes'

function App() {
  return (
    <div>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </div>
  );
};

export default App;
