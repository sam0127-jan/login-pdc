import { useEffect, useState } from 'react'
import questions from './questions'

export default function TestPage() {

  const [currentQuestion, setCurrentQuestion] = useState(0)

  const [score, setScore] = useState(0)

  const [showResult, setShowResult] = useState(false)

  const [timeLeft, setTimeLeft] = useState(300)

  const [warnings, setWarnings] = useState(0)

  // WARNING FUNCTION

  const giveWarning = () => {

    const newWarnings = warnings + 1

    setWarnings(newWarnings)

    alert(`Warning ${newWarnings}/5`)

    if (newWarnings >= 5) {

      alert('Test Auto Submitted')

      setShowResult(true)

    }

  }

  // TIMER

  useEffect(() => {

    if (timeLeft > 0 && !showResult) {

      const timer = setInterval(() => {

        setTimeLeft((prev) => prev - 1)

      }, 1000)

      return () => clearInterval(timer)

    }

    if (timeLeft === 0) {

      setShowResult(true)

    }

  }, [timeLeft, showResult])

  // FULLSCREEN START

  useEffect(() => {

    document.documentElement.requestFullscreen()

  }, [])

  // COPY PASTE BLOCK

  useEffect(() => {

    const preventCopy = (e) => {

      e.preventDefault()

    }

    document.addEventListener('copy', preventCopy)

    document.addEventListener('paste', preventCopy)

    document.addEventListener('contextmenu', preventCopy)

    return () => {

      document.removeEventListener('copy', preventCopy)

      document.removeEventListener('paste', preventCopy)

      document.removeEventListener('contextmenu', preventCopy)

    }

  }, [])

  // TAB SWITCH + MINIMIZE DETECT

  useEffect(() => {

    const handleVisibility = () => {

      if (document.hidden) {

        giveWarning()

      }

    }

    document.addEventListener(
      'visibilitychange',
      handleVisibility
    )

    return () => {

      document.removeEventListener(
        'visibilitychange',
        handleVisibility
      )

    }

  }, [warnings])

  // SCREEN RESIZE DETECT

  useEffect(() => {

    const handleResize = () => {

      if (
        window.innerWidth < 1000 ||
        window.innerHeight < 600
      ) {

        giveWarning()

      }

    }

    window.addEventListener('resize', handleResize)

    return () => {

      window.removeEventListener(
        'resize',
        handleResize
      )

    }

  }, [warnings])

  // DEVTOOLS DETECT

  useEffect(() => {

    const detectDevTools = setInterval(() => {

      if (
        window.outerWidth - window.innerWidth > 160 ||
        window.outerHeight - window.innerHeight > 160
      ) {

        giveWarning()

      }

    }, 1000)

    return () => clearInterval(detectDevTools)

  }, [warnings])

  // FULLSCREEN EXIT DETECT

  useEffect(() => {

    const handleFullscreen = () => {

      if (!document.fullscreenElement) {

        giveWarning()

      }

    }

    document.addEventListener(
      'fullscreenchange',
      handleFullscreen
    )

    return () => {

      document.removeEventListener(
        'fullscreenchange',
        handleFullscreen
      )

    }

  }, [warnings])

  // HANDLE ANSWER

  const handleAnswer = (option) => {

    if (option === questions[currentQuestion].answer) {

      setScore(score + 1)

    }

    const nextQuestion = currentQuestion + 1

    if (nextQuestion < questions.length) {

      setCurrentQuestion(nextQuestion)

    } else {

      setShowResult(true)

    }

  }

  // TIMER FORMAT

  const minutes = Math.floor(timeLeft / 60)

  const seconds = timeLeft % 60

  return (

    <section
      id="test"
      className="min-h-screen bg-[#020617] text-white px-6 py-32"
    >

      <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-[32px] p-10 backdrop-blur-xl">

        <div className="flex items-center justify-between mb-10">

          <h1 className="text-5xl font-black">
            Online Aptitude Test
          </h1>

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