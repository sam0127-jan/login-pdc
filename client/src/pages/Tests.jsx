import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function Tests() {
  const [tests, setTests] = useState([])

  useEffect(() => {
    fetch("https://login-pdc.onrender.com/api/tests")
      .then((res) => res.json())
      .then((data) => setTests(data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <section className="min-h-screen bg-[#020617] text-white px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-black mb-4">
          Available Tests
        </h1>

        <p className="text-slate-400 mb-10">
          All aptitude tests published by admin.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {tests.length === 0 ? (
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 text-slate-400">
              No tests published yet.
            </div>
          ) : (
            tests.map((test) => (
              <div
                key={test._id}
                className="bg-white/5 border border-white/10 rounded-3xl p-6"
              >
                <h2 className="text-2xl font-black text-cyan-400 mb-3">
                  {test.title}
                </h2>

                <p className="text-slate-400 mb-4">
                  {test.description}
                </p>

                <p className="mb-2">
                  Duration: {test.duration} sec
                </p>

                <p className="mb-6">
                  Questions: {test.questions?.length || 0}
                </p>

                <Link
                  to={`/test/${test._id}`}
                  className="bg-cyan-400 text-slate-950 px-6 py-3 rounded-xl font-bold inline-block"
                >
                  Start Test
                </Link>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  )
}