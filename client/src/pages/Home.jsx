import clgLogo from "../assets/clg-logo.png"
import pdcLogo from "../assets/pdc-logo.png"

export default function Home() {
  const teamMembers = [
    { role: "Faculty Coordinator", name: "Dr. Bhushan Yelure" },

    { role: "President", name: "Siddhi Patil" },
    { role: "Vice President", name: "Sayali Jasud" },
    { role: "Vice President", name: "Shardual Kolekar" },
    { role: "Secretary", name: "Aabha J." },
    { role: "Treasurer", name: "Jaid Nakade" },

    { role: "PR Head", name: "Vinay Katkar" },
    { role: "Design Head", name: "Aniket Mohite" },
    { role: "Social Media Head", name: "Atharva Mulik" },
    { role: "Marketing Head", name: "Pradnya Shelke" },
    { role: "Event Head", name: "Atharva Shriwas" },

    { role: "PR Co-Head", name: "Nandini Patil" },
    { role: "Design Co-Head", name: "Samiksha Yadav" },
    { role: "Design Co-Head", name: "Soham Patil" },
    { role: "Social Media Co-Head", name: "Rushal Pawar" },
    { role: "Marketing Co-Head", name: "Tushant Tagade" },
    { role: "Event Co-Head", name: "Apeksha Khodave" },
    { role: "Event Co-Head", name: "Ayan Patvegar" },

    { role: "Assistant Secretary", name: "Vaibhav Shejal" },
    { role: "Assistant Secretary", name: "Saurabh Tiurwadkar" },
    { role: "PR Associate", name: "Sabiya B." },
    { role: "PR Associate", name: "Sunder Chakure" },
    { role: "PR Associate", name: "Aayush Chougule" },
    { role: "Social Media Associate", name: "Pranav Musale" },
    { role: "Marketing Associate", name: "Parthraj Mote" },
    { role: "Event Associate", name: "Pratik Kolase" },
    { role: "Technical Associate", name: "Anas Pathan" },
  ]

  return (
    <main className="min-h-screen bg-[#020617] text-white overflow-hidden">
      <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-[#020617]/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src={clgLogo}
              alt="GCEK Logo"
              className="w-16 h-16 object-contain bg-white rounded-2xl p-1"
            />

            <div>
              <h1 className="text-2xl font-black text-cyan-400">
                Placement Development Club
              </h1>

              <p className="text-sm text-slate-400">
                Government College of Engineering, Kolhapur
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5 text-sm font-bold">
            <a href="#home" className="hover:text-cyan-400 transition-all">
              Home
            </a>

            <a href="#team" className="hover:text-cyan-400 transition-all">
              Team
            </a>

            <a
              href="https://login-pdc.vercel.app/?utm_source=chatgpt.com"
              target="_blank"
              rel="noreferrer"
              className="bg-cyan-400 hover:bg-cyan-300 text-slate-950 px-6 py-3 rounded-2xl transition-all duration-300 shadow-lg shadow-cyan-400/20"
            >
              Student Login
            </a>

            <a
              href="https://login-pdc.vercel.app/admin/login"
              target="_blank"
              rel="noreferrer"
              className="border border-white/20 hover:border-cyan-400 px-6 py-3 rounded-2xl transition-all duration-300"
            >
              Admin Login
            </a>
          </div>
        </div>
      </nav>

      <section
        id="home"
        className="min-h-screen pt-36 px-6 flex items-center"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <p className="inline-block text-cyan-300 bg-cyan-400/10 border border-cyan-400/30 px-5 py-2 rounded-full font-bold mb-8">
              Empowering Future Engineers
            </p>

            <h2 className="text-6xl md:text-7xl font-black leading-tight mb-8">
              Placement <br />
              <span className="text-cyan-400">
                Development Club
              </span>
            </h2>

            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
              A student-driven initiative focused on aptitude training,
              communication development, mock interviews, technical readiness,
              and placement preparation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 border border-cyan-400/30 rounded-[32px] p-8 text-center backdrop-blur-xl">
              <img
                src={clgLogo}
                alt="College Logo"
                className="w-48 h-48 mx-auto object-contain bg-white rounded-3xl p-3 mb-6"
              />

              <h3 className="text-3xl font-black leading-tight">
                Government College of Engineering, Kolhapur
              </h3>

              <p className="text-slate-400 mt-4 text-lg">
                Excellence in Engineering Education
              </p>
            </div>

            <div className="bg-white/5 border border-cyan-400/30 rounded-[32px] p-8 text-center backdrop-blur-xl">
              <img
                src={pdcLogo}
                alt="PDC Logo"
                className="w-48 h-48 mx-auto object-contain bg-white rounded-full p-3 mb-6"
              />

              <h3 className="text-3xl font-black leading-tight">
                Placement Development Club
              </h3>

              <p className="text-slate-400 mt-4 text-lg">
                Building Careers, Creating Leaders
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="team"
        className="px-6 py-24 border-t border-white/10"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black">
              Official PDC Club Team
            </h2>

            <div className="w-32 h-1 bg-cyan-400 mx-auto mt-5 rounded-full" />

            <p className="text-slate-400 mt-6 text-lg">
              Selected members for the current academic year.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:border-cyan-400/40 hover:-translate-y-1 transition-all duration-300"
              >
                <p className="text-cyan-400 font-black text-xl mb-4">
                  {member.role}
                </p>

                <h3 className="text-3xl font-black leading-tight">
                  {member.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}