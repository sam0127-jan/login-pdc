import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

import {
  Briefcase,
  FileText,
  Trophy,
  Code2,
  Building2,
  Bell,
} from "lucide-react"

export default function Dashboard() {
  const [announcements, setAnnouncements] = useState([])
  const [activities, setActivities] = useState([])

  useEffect(() => {
    fetch("https://login-pdc.onrender.com/api/announcements")
      .then((res) => res.json())
      .then((data) => setAnnouncements(data))
      .catch((err) => console.log(err))

    fetch("https://login-pdc.onrender.com/api/activities")
      .then((res) => res.json())
      .then((data) => setActivities(data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 text-white p-8">
      <div className="mb-12">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 rounded-2xl bg-cyan-400 flex items-center justify-center">
            <Briefcase className="text-slate-950 w-8 h-8" />
          </div>

          <div>
            <h1 className="text-5xl font-black tracking-tight">
              Placement Development Club
            </h1>

            <p className="text-slate-400 mt-2 text-lg">
              Empowering students for careers & placement preparation
            </p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-4 gap-6 mb-12">
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-3xl hover:scale-105 transition">
          <h2 className="text-slate-400 text-sm mb-2">Active Batch</h2>
          <p className="text-4xl font-black text-cyan-400">3rd Year</p>
        </div>

        <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-3xl hover:scale-105 transition">
          <h2 className="text-slate-400 text-sm mb-2">Training Focus</h2>
          <p className="text-4xl font-black text-green-400">Aptitude</p>
        </div>

        <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-3xl hover:scale-105 transition">
          <h2 className="text-slate-400 text-sm mb-2">Practice Mode</h2>
          <p className="text-4xl font-black text-yellow-400">Mock Tests</p>
        </div>

        <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-3xl hover:scale-105 transition">
          <h2 className="text-slate-400 text-sm mb-2">Goal</h2>
          <p className="text-4xl font-black text-pink-400">Placements</p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white/5 backdrop-blur-lg border border-cyan-400/20 p-8 rounded-3xl hover:-translate-y-2 transition duration-300 shadow-2xl">
          <Code2 className="w-12 h-12 text-cyan-400 mb-5" />

          <h2 className="text-3xl font-bold mb-4">Aptitude Tests</h2>

          <p className="text-slate-400 mb-6">
            View and attempt all published aptitude tests from admin panel.
          </p>

          <Link
            to="/tests"
            className="bg-cyan-400 hover:bg-cyan-300 text-slate-950 px-6 py-3 rounded-xl font-bold inline-block"
          >
            View Tests
          </Link>
        </div>

        <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-3xl hover:-translate-y-2 transition duration-300 shadow-2xl">
          <FileText className="w-12 h-12 text-green-400 mb-5" />

          <h2 className="text-3xl font-bold mb-4">Resume Builder</h2>

          <p className="text-slate-400 mb-6">
            Create ATS-friendly resumes for placement preparation.
          </p>

          <button className="bg-green-400 hover:bg-green-300 text-slate-950 px-6 py-3 rounded-xl font-bold">
            Build Resume
          </button>
        </div>

        <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-3xl hover:-translate-y-2 transition duration-300 shadow-2xl">
          <Trophy className="w-12 h-12 text-yellow-400 mb-5" />

          <h2 className="text-3xl font-bold mb-4">Leaderboard</h2>

          <p className="text-slate-400 mb-6">
            Track top performers in aptitude and mock tests.
          </p>

          <button className="bg-yellow-400 hover:bg-yellow-300 text-slate-950 px-6 py-3 rounded-xl font-bold">
            View Rankings
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mt-12">
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
          <div className="flex items-center gap-4 mb-6">
            <Building2 className="text-cyan-400 w-8 h-8" />

            <h2 className="text-2xl font-bold">
              Upcoming Activities
            </h2>
          </div>

          <div className="space-y-4">
            {activities.length === 0 ? (
              <div className="bg-white/5 p-4 rounded-xl text-slate-400">
                No activities added yet.
              </div>
            ) : (
              activities.map((activity) => (
                <div
                  key={activity._id}
                  className="bg-white/5 p-4 rounded-xl"
                >
                  <h3 className="font-bold text-cyan-400 text-lg mb-2">
                    {activity.title}
                  </h3>

                  <p className="text-slate-300">
                    {activity.description}
                  </p>

                  <p className="text-sm text-slate-500 mt-2">
                    {activity.date} • {activity.venue}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
          <div className="flex items-center gap-4 mb-6">
            <Bell className="text-pink-400 w-8 h-8" />

            <h2 className="text-2xl font-bold">
              Latest Announcements
            </h2>
          </div>

          <div className="space-y-4">
            {announcements.length === 0 ? (
              <div className="bg-white/5 p-4 rounded-xl text-slate-400">
                No announcements added yet.
              </div>
            ) : (
              announcements.map((announcement) => (
                <div
                  key={announcement._id}
                  className="bg-white/5 p-4 rounded-xl"
                >
                  <h3 className="font-bold text-pink-400 text-lg mb-2">
                    {announcement.title}
                  </h3>

                  <p className="text-slate-300">
                    {announcement.message}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  )
}