import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'

import './index.css'

import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import AdminLogin from './pages/AdminLogin'
import AdminDashboard from './pages/AdminDashboard'
import TestPage from './pages/TestPage'

ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>

    <Routes>

      {/* HOME PAGE */}
      <Route
        path="/"
        element={<Home />}
      />

      {/* STUDENT LOGIN */}
      <Route
        path="/login"
        element={<Login />}
      />

      {/* REGISTER */}
      <Route
        path="/register"
        element={<Register />}
      />

      {/* STUDENT DASHBOARD */}
      <Route
        path="/dashboard"
        element={<Dashboard />}
      />

      {/* ADMIN LOGIN */}
      <Route
        path="/admin/login"
        element={<AdminLogin />}
      />

      {/* ADMIN DASHBOARD */}
      <Route
        path="/admin/dashboard"
        element={<AdminDashboard />}
      />

      {/* TEST PAGE */}
      <Route
        path="/test"
        element={<TestPage />}
      />

    </Routes>

  </BrowserRouter>

)