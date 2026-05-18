export default function AdminLogin() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#020617] text-white">

      <div className="bg-white/5 border border-white/10 p-10 rounded-3xl w-[400px] backdrop-blur-xl">

        <h1 className="text-4xl font-black mb-8 text-center">
          Admin Login
        </h1>

        <form className="space-y-5">

          <input
            type="email"
            placeholder="Admin Email"
            className="w-full p-4 rounded-xl bg-slate-800 outline-none"
          />

          <input
            type="password"
            placeholder="Admin Password"
            className="w-full p-4 rounded-xl bg-slate-800 outline-none"
          />

          <button
            className="w-full bg-cyan-400 text-slate-950 font-bold p-4 rounded-xl hover:scale-105 transition-all"
          >
            Login
          </button>

        </form>

      </div>

    </section>
  )
}