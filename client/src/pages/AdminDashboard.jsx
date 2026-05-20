import { useEffect, useState } from "react"

export default function AdminDashboard() {

  // TEST STATES
  const [title, setTitle] = useState("")

  const [description, setDescription] = useState("")

  const [duration, setDuration] = useState(300)

  const [warningLimit, setWarningLimit] = useState(5)

  const [questions, setQuestions] = useState([
    {
      question: "",
      options: ["", "", "", ""],
      answer: "",
    },
  ])

  // ANNOUNCEMENT STATES
  const [announcementTitle, setAnnouncementTitle] = useState("")

  const [announcementMessage, setAnnouncementMessage] = useState("")

  // ACTIVITY STATES
  const [activityTitle, setActivityTitle] = useState("")

  const [activityDate, setActivityDate] = useState("")

  const [activityVenue, setActivityVenue] = useState("")

  const [activityDescription, setActivityDescription] = useState("")

  // FETCHED DATA
  const [tests, setTests] = useState([])

  const [results, setResults] = useState([])

  // LOAD TESTS + RESULTS
  useEffect(() => {

    fetch("https://login-pdc.onrender.com/api/tests")
      .then((res) => res.json())
      .then((data) => setTests(data))

    fetch("https://login-pdc.onrender.com/api/results")
      .then((res) => res.json())
      .then((data) => setResults(data))

  }, [])

  // QUESTION FUNCTIONS
  const handleQuestionChange = (index, value) => {

    const updated = [...questions]

    updated[index].question = value

    setQuestions(updated)

  }

  const handleOptionChange = (qIndex, oIndex, value) => {

    const updated = [...questions]

    updated[qIndex].options[oIndex] = value

    setQuestions(updated)

  }

  const handleAnswerChange = (qIndex, value) => {

    const updated = [...questions]

    updated[qIndex].answer = value

    setQuestions(updated)

  }

  const addQuestion = () => {

    setQuestions([
      ...questions,
      {
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
    ])

  }

  // CREATE TEST
  const createTest = async (e) => {

    e.preventDefault()

    const testData = {

      title,

      description,

      duration: Number(duration),

      warningLimit: Number(warningLimit),

      questions,

    }

    const res = await fetch(
      "https://login-pdc.onrender.com/api/tests/create",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(testData),
      }
    )

    const data = await res.json()

    alert(data.message || "Test Published")

  }

  // ADD ANNOUNCEMENT
  const addAnnouncement = async (e) => {

    e.preventDefault()

    const res = await fetch(
      "https://login-pdc.onrender.com/api/announcements/create",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          title: announcementTitle,
          message: announcementMessage,
        }),
      }
    )

    const data = await res.json()

    alert(data.message)

  }

  // ADD ACTIVITY
  const addActivity = async (e) => {

    e.preventDefault()

    const res = await fetch(
      "https://login-pdc.onrender.com/api/activities/create",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          title: activityTitle,
          date: activityDate,
          venue: activityVenue,
          description: activityDescription,
        }),
      }
    )

    const data = await res.json()

    alert(data.message)

  }

  return (

    <section className="min-h-screen bg-[#020617] text-white px-6 py-10">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="mb-12">

          <h1 className="text-5xl font-black mb-3">
            Admin Dashboard
          </h1>

          <p className="text-slate-400 text-lg">
            Manage tests, announcements, activities and student results.
          </p>

        </div>

        {/* TOP CARDS */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
            <h2 className="text-slate-400 mb-2">
              Published Tests
            </h2>

            <p className="text-5xl font-black text-cyan-400">
              {tests.length}
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
            <h2 className="text-slate-400 mb-2">
              Student Results
            </h2>

            <p className="text-5xl font-black text-green-400">
              {results.length}
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
            <h2 className="text-slate-400 mb-2">
              Test Type
            </h2>

            <p className="text-4xl font-black text-yellow-400">
              Aptitude
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
            <h2 className="text-slate-400 mb-2">
              Portal Status
            </h2>

            <p className="text-4xl font-black text-pink-400">
              Active
            </p>
          </div>

        </div>

        {/* CREATE TEST */}
        <form
          onSubmit={createTest}
          className="bg-white/5 border border-white/10 rounded-3xl p-8 space-y-8 mb-12"
        >

          <h2 className="text-4xl font-black">
            Create Aptitude Test
          </h2>

          <div className="grid md:grid-cols-2 gap-5">

            <input
              type="text"
              placeholder="Test Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="p-4 rounded-xl bg-slate-800 outline-none"
              required
            />

            <input
              type="number"
              placeholder="Duration in seconds"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="p-4 rounded-xl bg-slate-800 outline-none"
              required
            />

            <input
              type="number"
              placeholder="Warning Limit"
              value={warningLimit}
              onChange={(e) => setWarningLimit(e.target.value)}
              className="p-4 rounded-xl bg-slate-800 outline-none"
              required
            />

            <input
              type="text"
              placeholder="Test Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="p-4 rounded-xl bg-slate-800 outline-none"
            />

          </div>

          <div className="space-y-8">

            {questions.map((q, qIndex) => (

              <div
                key={qIndex}
                className="bg-slate-900 border border-white/10 rounded-2xl p-6"
              >

                <h2 className="text-2xl font-bold mb-5">
                  Question {qIndex + 1}
                </h2>

                <input
                  type="text"
                  placeholder="Enter Question"
                  value={q.question}
                  onChange={(e) =>
                    handleQuestionChange(qIndex, e.target.value)
                  }
                  className="w-full p-4 rounded-xl bg-slate-800 outline-none mb-5"
                  required
                />

                <div className="grid md:grid-cols-2 gap-4">

                  {q.options.map((option, oIndex) => (

                    <input
                      key={oIndex}
                      type="text"
                      placeholder={`Option ${oIndex + 1}`}
                      value={option}
                      onChange={(e) =>
                        handleOptionChange(
                          qIndex,
                          oIndex,
                          e.target.value
                        )
                      }
                      className="p-4 rounded-xl bg-slate-800 outline-none"
                      required
                    />

                  ))}

                </div>

                <select
                  value={q.answer}
                  onChange={(e) =>
                    handleAnswerChange(qIndex, e.target.value)
                  }
                  className="w-full mt-5 p-4 rounded-xl bg-slate-800 outline-none"
                  required
                >

                  <option value="">
                    Select Correct Answer
                  </option>

                  {q.options.map((option, index) => (

                    <option
                      key={index}
                      value={option}
                    >
                      {option || `Option ${index + 1}`}
                    </option>

                  ))}

                </select>

              </div>

            ))}

          </div>

          <div className="flex gap-4 flex-wrap">

            <button
              type="button"
              onClick={addQuestion}
              className="bg-slate-700 px-6 py-3 rounded-xl font-bold"
            >
              + Add Question
            </button>

            <button
              type="submit"
              className="bg-cyan-400 text-slate-950 px-8 py-3 rounded-xl font-black"
            >
              Publish Test
            </button>

          </div>

        </form>

        {/* ANNOUNCEMENT + ACTIVITY */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">

          {/* ANNOUNCEMENTS */}
          <form
            onSubmit={addAnnouncement}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 space-y-5"
          >

            <h2 className="text-3xl font-black">
              Add Announcement
            </h2>

            <input
              type="text"
              placeholder="Announcement Title"
              value={announcementTitle}
              onChange={(e) =>
                setAnnouncementTitle(e.target.value)
              }
              className="w-full p-4 rounded-xl bg-slate-800 outline-none"
              required
            />

            <textarea
              placeholder="Announcement Message"
              value={announcementMessage}
              onChange={(e) =>
                setAnnouncementMessage(e.target.value)
              }
              className="w-full p-4 rounded-xl bg-slate-800 outline-none h-40"
              required
            />

            <button className="bg-cyan-400 text-slate-950 px-6 py-3 rounded-xl font-bold">
              Publish Announcement
            </button>

          </form>

          {/* ACTIVITIES */}
          <form
            onSubmit={addActivity}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 space-y-5"
          >

            <h2 className="text-3xl font-black">
              Add Activity
            </h2>

            <input
              type="text"
              placeholder="Activity Title"
              value={activityTitle}
              onChange={(e) =>
                setActivityTitle(e.target.value)
              }
              className="w-full p-4 rounded-xl bg-slate-800 outline-none"
              required
            />

            <input
              type="text"
              placeholder="Activity Date"
              value={activityDate}
              onChange={(e) =>
                setActivityDate(e.target.value)
              }
              className="w-full p-4 rounded-xl bg-slate-800 outline-none"
              required
            />

            <input
              type="text"
              placeholder="Venue"
              value={activityVenue}
              onChange={(e) =>
                setActivityVenue(e.target.value)
              }
              className="w-full p-4 rounded-xl bg-slate-800 outline-none"
              required
            />

            <textarea
              placeholder="Description"
              value={activityDescription}
              onChange={(e) =>
                setActivityDescription(e.target.value)
              }
              className="w-full p-4 rounded-xl bg-slate-800 outline-none h-32"
            />

            <button className="bg-green-400 text-slate-950 px-6 py-3 rounded-xl font-bold">
              Add Activity
            </button>

          </form>

        </div>

        {/* RESULTS */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

          <h2 className="text-4xl font-black mb-8">
            Student Results
          </h2>

          <div className="overflow-auto">

            <table className="w-full">

              <thead>

                <tr className="border-b border-white/10 text-left">

                  <th className="p-4">Student</th>

                  <th className="p-4">Test</th>

                  <th className="p-4">Score</th>

                  <th className="p-4">Warnings</th>

                </tr>

              </thead>

              <tbody>

                {results.map((result) => (

                  <tr
                    key={result._id}
                    className="border-b border-white/5"
                  >

                    <td className="p-4">
                      {result.studentName}
                    </td>

                    <td className="p-4">
                      {result.testTitle}
                    </td>

                    <td className="p-4">
                      {result.score} / {result.totalQuestions}
                    </td>

                    <td className="p-4">
                      {result.warnings}
                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </section>

  )

}