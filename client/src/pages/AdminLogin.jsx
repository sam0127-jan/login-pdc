import { useNavigate } from 'react-router-dom'

export default function AdminLogin() {

  const navigate = useNavigate()

  const handleAdminLogin = async (e) => {

    e.preventDefault()

    const form = e.target

    const loginData = {
      email: form[0].value,
      password: form[1].value,
    }

    try {

      const res = await fetch(
        'https://login-pdc.onrender.com/api/auth/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(loginData),
        }
      )

      const data = await res.json()

      if (!res.ok) {
        alert(data.message)
        return
      }

      // ONLY ADMIN ALLOWED
      if (data.role !== 'admin') {
        alert('Access Denied')
        return
      }

      alert('Admin Login Success')

      navigate('/admin/dashboard')

    } catch (err) {

      alert('Server Error')
      console.log(err)

    }

  }

  return (

    <section className="min-h-screen flex items-center justify-center bg-[#020617] text-white px-6">

      <div className="bg-white/5 border border-white/10 p-10 rounded-3xl w-full max-w-md backdrop-blur-xl">

        <h1 className="text-4xl font-black mb-8 text-center">
          Admin Login
        </h1>

        <form
          onSubmit={handleAdminLogin}
          className="space-y-5"
        >

          <input
            type="email"
            placeholder="Admin Email"
            className="w-full p-4 rounded-xl bg-slate-800 outline-none"
            required
          />

          <input
            type="password"
            placeholder="Admin Password"
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

      </div>

    </section>

  )
}