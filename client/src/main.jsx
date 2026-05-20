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

import Tests from './pages/Tests'

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

      {/* ALL TESTS PAGE */}
      <Route
        path="/tests"
        element={<Tests />}
      />

      {/* SINGLE TEST PAGE */}
      <Route
        path="/test/:id"
        element={<TestPage />}
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

    </Routes>

  </BrowserRouter>

)