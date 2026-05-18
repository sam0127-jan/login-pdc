export default function AdminDashboard() {
  return (
    <section className="min-h-screen bg-[#020617] text-white p-10">

      <h1 className="text-5xl font-black mb-10">
        Admin Dashboard
      </h1>

      <div className="grid md:grid-cols-3 gap-8">

        <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">

          <h2 className="text-3xl font-bold mb-4">
            Create Test
          </h2>

          <p className="text-slate-400 mb-6">
            Add new aptitude test questions.
          </p>

          <button
            className="bg-cyan-400 text-slate-950 px-6 py-3 rounded-xl font-bold"
          >
            Add Test
          </button>

        </div>

      </div>

    </section>
  )
}