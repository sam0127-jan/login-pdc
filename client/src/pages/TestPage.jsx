import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function TestPage() {
  const { id } = useParams()

  const [questions, setQuestions] = useState([])
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const [timeLeft, setTimeLeft] = useState(300)
  const [warnings, setWarnings] = useState(0)
  const [submitted, setSubmitted] = useState(false)
  const [testTitle, setTestTitle] = useState("Online Aptitude Test")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`https://login-pdc.onrender.com/api/tests/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data.questions || [])
        setTimeLeft(data.duration || 300)
        setTestTitle(data.title || "Online Aptitude Test")
        setLoading(false)
      })
      .catch((err) => {
        console.log(err)
        setLoading(false)
      })
  }, [id])

  const submitResult = async (finalScore, finalWarnings = warnings) => {
    if (submitted) return

    setSubmitted(true)

    const resultData = {
      studentName: localStorage.getItem("studentName") || "Student",
      studentEmail: localStorage.getItem("studentEmail") || "student@gmail.com",
      branch: localStorage.getItem("studentBranch") || "Not Provided",
      year: localStorage.getItem("studentYear") || "Not Provided",

      testId: id,
      testTitle,

      score: finalScore,
      totalQuestions: questions.length,
      warnings: finalWarnings,
    }

    try {
      await fetch("https://login-pdc.onrender.com/api/results/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(resultData),
      })
    } catch (err) {
      console.log(err)
    }
  }

  const giveWarning = async () => {
    const newWarnings = warnings + 1
    setWarnings(newWarnings)

    alert(`Warning ${newWarnings}/5`)

    if (newWarnings >= 5) {
      alert("Test Auto Submitted")
      await submitResult(score, newWarnings)
      setShowResult(true)
    }
  }

  useEffect(() => {
    if (timeLeft > 0 && !showResult && questions.length > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1)
      }, 1000)

      return () => clearInterval(timer)
    }

    if (timeLeft === 0 && !showResult && questions.length > 0) {
      submitResult(score, warnings)
      setShowResult(true)
    }
  }, [timeLeft, showResult, questions.length])

  useEffect(() => {
    document.documentElement.requestFullscreen().catch(() => {})
  }, [])

  useEffect(() => {
    const preventCopy = (e) => {
      e.preventDefault()
    }

    document.addEventListener("copy", preventCopy)
    document.addEventListener("paste", preventCopy)
    document.addEventListener("contextmenu", preventCopy)

    return () => {
      document.removeEventListener("copy", preventCopy)
      document.removeEventListener("paste", preventCopy)
      document.removeEventListener("contextmenu", preventCopy)
    }
  }, [])

  useEffect(() => {
    const handleVisibility = () => {
      if (document.hidden && !showResult && questions.length > 0) {
        giveWarning()
      }
    }

    document.addEventListener("visibilitychange", handleVisibility)

    return () => {
      document.removeEventListener("visibilitychange", handleVisibility)
    }
  }, [warnings, showResult, questions.length])

  useEffect(() => {
    const handleResize = () => {
      if (
        !showResult &&
        questions.length > 0 &&
        (window.innerWidth < 1000 || window.innerHeight < 600)
      ) {
        giveWarning()
      }
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [warnings, showResult, questions.length])

  useEffect(() => {
    const detectDevTools = setInterval(() => {
      if (
        !showResult &&
        questions.length > 0 &&
        (window.outerWidth - window.innerWidth > 160 ||
          window.outerHeight - window.innerHeight > 160)
      ) {
        giveWarning()
      }
    }, 1000)

    return () => clearInterval(detectDevTools)
  }, [warnings, showResult, questions.length])

  useEffect(() => {
    const handleFullscreen = () => {
      if (!document.fullscreenElement && !showResult && questions.length > 0) {
        giveWarning()
      }
    }

    document.addEventListener("fullscreenchange", handleFullscreen)

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreen)
    }
  }, [warnings, showResult, questions.length])

  const handleAnswer = async (option) => {
    let finalScore = score

    if (option === questions[currentQuestion].answer) {
      finalScore = score + 1
      setScore(finalScore)
    }

    const nextQuestion = currentQuestion + 1

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion)
    } else {
      await submitResult(finalScore, warnings)
      setShowResult(true)
    }
  }

  const minutes = Math.floor(timeLeft / 60)
  const seconds = timeLeft % 60

  if (loading) {
    return (
      <section className="min-h-screen bg-[#020617] text-white flex items-center justify-center">
        <h1 className="text-4xl font-black">Loading Test...</h1>
      </section>
    )
  }

  if (questions.length === 0) {
    return (
      <section className="min-h-screen bg-[#020617] text-white flex items-center justify-center">
        <h1 className="text-4xl font-black text-red-400">
          No Questions Found
        </h1>
      </section>
    )
  }

  return (
    <section className="min-h-screen bg-[#020617] text-white px-6 py-32">
      <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-[32px] p-10 backdrop-blur-xl">
        <div className="flex items-center justify-between mb-10">
          <h1 className="text-5xl font-black">{testTitle}</h1>

          <div className="text-right">
            <p className="text-red-400 font-bold text-2xl">
              {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
            </p>

            <p className="text-yellow-400 font-semibold">
              Warnings: {warnings}/5
            </p>
          </div>
        </div>

        {showResult ? (
          <div className="text-center py-20">
            <h2 className="text-5xl font-black text-cyan-400 mb-8">
              Test Submitted
            </h2>

            <p className="text-7xl font-black mb-6">
              {score} / {questions.length}
            </p>

            <p className="text-slate-400 text-xl">
              Your test has been completed successfully.
            </p>
          </div>
        ) : (
          <div>
            <p className="text-slate-400 mb-5">
              Question {currentQuestion + 1} of {questions.length}
            </p>

            <h2 className="text-3xl font-bold mb-10">
              {questions[currentQuestion].question}
            </h2>

            <div className="grid gap-5">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  className="bg-slate-800 hover:bg-cyan-400 hover:text-slate-950 transition-all duration-300 p-5 rounded-2xl text-left font-semibold"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}