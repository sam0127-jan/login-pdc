import { Link } from "react-router-dom"
import clgLogo from "../assets/clg-logo.png"
import pdcLogo from "../assets/pdc-logo.png"

export default function Home() {
  const leadership = [
    { role: "Faculty Coordinators", names: ["Faculty Coordinator 1", "Faculty Coordinator 2"] },
    { role: "President", names: ["President Name"] },
    { role: "Vice President", names: ["Vice President Name"] },
    { role: "Treasurer", names: ["Jaid Nakade"] },
  ]

  const teams = [
    {
      name: "PR Team",
      head: "Vinay Katkar",
      coHead: "Nandini Patil",
      associates: ["Sabiya B.", "Sunder Chakure", "Aayush Chougule"],
    },
    {
      name: "Design Team",
      head: "Aniket Mohite",
      coHead: "Samiksha Yadav, Soham Patil",
      associates: [],
    },
    {
      name: "Social Media Team",
      head: "Atharva Mulik",
      coHead: "Rushal Pawar",
      associates: ["Pranav Musale"],
    },
    {
      name: "Marketing Team",
      head: "Pradnya Shelke",
      coHead: "Tushant Tagade",
      associates: ["Parthraj Mote"],
    },
    {
      name: "Event Team",
      head: "Atharva Shriwas",
      coHead: "Apeksha Khodave, Ayan Patvegar",
      associates: ["Pratik Kolase"],
    },
    {
      name: "Technical Team",
      head: "",
      coHead: "",
      associates: ["Anas Pathan"],
    },
  ]

  return (
    <main className="min-h-screen bg-[#020617] text-white">
      <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-[#020617]/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src={clgLogo} alt="GCEK Logo" className="w-16 h-16 object-contain bg-white rounded-2xl p-1" />

            <div>
              <h1 className="text-2xl font-black text-cyan-400">
                Placement Development Club
              </h1>
              <p className="text-sm text-slate-400">
                Government College of Engineering, Kolhapur
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6 text-sm font-bold">
            <a href="#home" className="text-cyan-400">Home</a>
            <a href="#team" className="hover:text-cyan-400">Team</a>
            <Link to="/" className="bg-cyan-400 text-slate-950 px-6 py-3 rounded-xl">
              Student Login
            </Link>
            <Link to="/admin/login" className="border border-white/20 px-6 py-3 rounded-xl">
              Admin
            </Link>
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen pt-32 px-6 flex items-center">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="inline-block text-cyan-300 bg-cyan-400/10 border border-cyan-400/30 px-5 py-2 rounded-full font-bold mb-8">
              Empowering Future Engineers
            </p>

            <h2 className="text-6xl md:text-7xl font-black leading-tight mb-8">
              Placement <br />
              <span className="text-cyan-400">Development Club</span>
            </h2>

            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
              A student-driven initiative focused on aptitude training,
              communication development, mock interviews, technical readiness,
              and placement preparation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 border border-cyan-400/30 rounded-[32px] p-8 text-center">
              <img src={clgLogo} alt="College Logo" className="w-48 h-48 mx-auto object-contain bg-white rounded-3xl p-3 mb-6" />
              <h3 className="text-2xl font-black">
                Government College of Engineering, Kolhapur
              </h3>
              <p className="text-slate-400 mt-3">
                Excellence in Engineering Education
              </p>
            </div>

            <div className="bg-white/5 border border-cyan-400/30 rounded-[32px] p-8 text-center">
              <img src={pdcLogo} alt="PDC Logo" className="w-48 h-48 mx-auto object-contain bg-white rounded-full p-3 mb-6" />
              <h3 className="text-2xl font-black">
                Placement Development Club
              </h3>
              <p className="text-slate-400 mt-3">
                Building Careers, Creating Leaders
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="px-6 py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-5xl font-black">
              Our Team Structure
            </h2>
            <div className="w-28 h-1 bg-cyan-400 mx-auto mt-5 rounded-full" />
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-10">
            {leadership.map((item, index) => (
              <div key={index} className="bg-white/5 border border-white/10 rounded-3xl p-7">
                <h3 className="text-2xl font-black text-cyan-400 mb-5">
                  {item.role}
                </h3>
                {item.names.map((name, i) => (
                  <p key={i} className="text-slate-300 mb-2">• {name}</p>
                ))}
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 xl:grid-cols-6 gap-6">
            {teams.map((team, index) => (
              <div key={index} className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-cyan-400/50 transition">
                <h3 className="text-xl font-black text-cyan-400 mb-5 border-b border-cyan-400/40 pb-3">
                  {team.name}
                </h3>

                {team.head && (
                  <div className="mb-4">
                    <p className="font-black">Head</p>
                    <p className="text-slate-300">• {team.head}</p>
                  </div>
                )}

                {team.coHead && (
                  <div className="mb-4">
                    <p className="font-black">Co-Head</p>
                    <p className="text-slate-300">• {team.coHead}</p>
                  </div>
                )}

                {team.associates.length > 0 && (
                  <div>
                    <p className="font-black">Associate</p>
                    {team.associates.map((name, i) => (
                      <p key={i} className="text-slate-300">• {name}</p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}