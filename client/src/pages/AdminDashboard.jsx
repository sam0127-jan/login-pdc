import { useState } from "react"

export default function AdminDashboard() {
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

  const createTest = async (e) => {
    e.preventDefault()

    const testData = {
      title,
      description,
      duration: Number(duration),
      warningLimit: Number(warningLimit),
      questions,
    }

    const res = await fetch("https://login-pdc.onrender.com/api/tests/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(testData),
    })

    const data = await res.json()
    alert(data.message || "Test Created")
  }

  return (
    <section className="min-h-screen bg-[#020617] text-white px-6 py-10">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-5xl font-black mb-3">
          Admin Dashboard
        </h1>

        <p className="text-slate-400 mb-10">
          Create and publish aptitude tests for students.
        </p>

        <form
          onSubmit={createTest}
          className="bg-white/5 border border-white/10 rounded-3xl p-8 space-y-8"
        >

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
                        handleOptionChange(qIndex, oIndex, e.target.value)
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
                  <option value="">Select Correct Answer</option>
                  {q.options.map((option, index) => (
                    <option key={index} value={option}>
                      {option || `Option ${index + 1}`}
                    </option>
                  ))}
                </select>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
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
      </div>
    </section>
  )
}