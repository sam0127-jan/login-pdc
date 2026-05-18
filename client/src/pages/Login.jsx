import { Link, useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()

    const form = e.target

    const loginData = {
      email: form[0].value,
      password: form[1].value,
    }

    const res = await fetch('https://login-pdc.onrender.com/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(loginData),
    })

    const data = await res.json()

    if (!res.ok) {
      alert(data.message || data.error || 'Login failed')
      return
    }

    alert('Login Successful')

    if (data.role === 'admin') {
      navigate('/admin/dashboard')
    } else {
      navigate('/dashboard')
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#020617] text-white px-6">
      <div className="bg-white/5 border border-white/10 p-10 rounded-3xl w-full max-w-md backdrop-blur-xl">
        <h1 className="text-4xl font-black mb-8 text-center">
          Student Login
        </h1>

        <form onSubmit={handleLogin} className="space-y-5">
          <input
            type="email"
            placeholder="Enter Email"
            className="w-full p-4 rounded-xl bg-slate-800 outline-none"
            required
          />

          <input
            type="password"
            placeholder="Enter Password"
            className="w-full p-4 rounded-xl bg-slate-800 outline-none"
            required
          />

          <button
            type="submit"
            className="w-full bg-cyan-400 text-slate-950 font-bold p-4 rounded-xl hover:scale-105 transition-all duration-300"
          >
            Login
          </button>
        </form>

        <p className="text-center text-slate-400 mt-6">
          Don&apos;t have an account?{' '}
          <Link to="/register" className="text-cyan-400 font-bold hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </section>
  )
}