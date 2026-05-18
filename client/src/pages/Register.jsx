import { useNavigate } from 'react-router-dom'

export default function Register() {
  const navigate = useNavigate()

  const handleRegister = async (e) => {
    e.preventDefault()

    const form = e.target

    const userData = {
      name: form[0].value,
      email: form[1].value,
      password: form[2].value,
      college: form[3].value,
    }

    try {
      const res = await fetch('https://login-pdc.onrender.com/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      })

      const data = await res.json()

      alert(data.message || data.error)

      if (data.message) {
        navigate('/')
      }
    } catch (error) {
      alert('Server error. Please try again.')
      console.log(error)
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#020617] text-white px-6">
      <div className="bg-white/5 border border-white/10 p-10 rounded-3xl w-full max-w-md backdrop-blur-xl">
        <h1 className="text-4xl font-black mb-8 text-center">
          Student Register
        </h1>

        <form onSubmit={handleRegister} className="space-y-5">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-4 rounded-xl bg-slate-800 outline-none"
            required
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full p-4 rounded-xl bg-slate-800 outline-none"
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-4 rounded-xl bg-slate-800 outline-none"
            required
          />

          <input
            type="text"
            placeholder="College Name"
            className="w-full p-4 rounded-xl bg-slate-800 outline-none"
            required
          />

          <button
            type="submit"
            className="w-full bg-cyan-400 text-slate-950 font-bold p-4 rounded-xl hover:scale-105 transition-all duration-300"
          >
            Register
          </button>
        </form>
      </div>
    </section>
  )
}