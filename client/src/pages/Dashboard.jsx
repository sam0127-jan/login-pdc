import { Link } from 'react-router-dom'

export default function Dashboard() {
  return (
    <section className="min-h-screen bg-[#020617] text-white p-10">

      <h1 className="text-5xl font-black mb-10">
        Placement Development Club
      </h1>

      <div className="grid md:grid-cols-3 gap-8">

        <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">

          <h2 className="text-3xl font-bold mb-4">
            Aptitude Test
          </h2>

          <p className="text-slate-400 mb-6">
            Start online aptitude test.
          </p>

          <Link
            to="/test"
            className="bg-cyan-400 text-slate-950 px-6 py-3 rounded-xl font-bold"
          >
            Start Test
          </Link>

        </div>

      </div>

    </section>
  )
}