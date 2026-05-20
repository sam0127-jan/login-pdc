import React from 'react'

import ReactDOM from 'react-dom/client'

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'

import './index.css'

import Home from './pages/Home.jsx'

import Login from './pages/Login.jsx'

import Register from './pages/Register.jsx'

import Dashboard from './pages/Dashboard.jsx'

import AdminLogin from './pages/AdminLogin.jsx'

import AdminDashboard from './pages/AdminDashboard.jsx'

import TestPage from './pages/TestPage.jsx'

import Tests from './pages/Tests.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>

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

        {/* TESTS */}
        <Route
          path="/tests"
          element={<Tests />}
        />

        {/* SINGLE TEST */}
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

  </React.StrictMode>

)