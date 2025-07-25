"use client"
import { useState } from "react"
import { quizData } from "./data/quizData"

type Answer = {
  text: string
  value: string
}

export default function Quiz() {
  const [currentQ, setCurrentQ] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<Answer[]>([])
  const [showResults, setShowResults] = useState(false)

  const handleAnswer = (answer: Answer) => {
    setSelectedAnswers([...selectedAnswers, answer])
    if (currentQ + 1 < quizData.length) {
      setCurrentQ(currentQ + 1)
    } else {
      setShowResults(true)
    }
  }

  const restartQuiz = () => {
    setCurrentQ(0)
    setSelectedAnswers([])
    setShowResults(false)
  }

  const getResultsSummary = () => {
    const frequency: { [key: string]: number } = {}
    selectedAnswers.forEach((ans) => {
      const key = ans.value
      frequency[key] = (frequency[key] || 0) + 1
    })
    const sorted = Object.entries(frequency).sort((a, b) => b[1] - a[1])
    const topTraits = sorted.slice(0, 3).map(([trait]) => trait)
    return topTraits
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Dreamy Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100">
        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-50/30 via-transparent to-rose-50/30"></div>
        {/* Floating orbs for dreamy effect */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-purple-200/20 to-pink-200/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-blue-200/20 to-indigo-200/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/3 w-40 h-40 bg-gradient-to-r from-rose-200/15 to-purple-200/15 rounded-full blur-2xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-gradient-to-r from-indigo-200/20 to-blue-200/20 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-8">
        <div className="max-w-2xl w-full">
          {/* Quiz Card */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl shadow-purple-100/50 p-8 space-y-8 border border-white/50">
            {!showResults ? (
              <>
                {/* Progress indicator */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-sm font-medium text-slate-600">
                    <span className="px-3 py-1 bg-purple-100/60 rounded-full">
                      Question {currentQ + 1} of {quizData.length}
                    </span>
                    <div className="flex space-x-1">
                      {Array.from({ length: quizData.length }).map((_, idx) => (
                        <div
                          key={idx}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            idx <= currentQ ? "bg-purple-300" : "bg-gray-200"
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div className="w-full bg-gray-200/50 rounded-full h-2 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-purple-300 to-pink-300 rounded-full transition-all duration-500 ease-out"
                      style={{ width: `${((currentQ + 1) / quizData.length) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Question */}
                <div className="text-center space-y-6">
                  <h2 className="text-2xl font-light text-slate-700 leading-relaxed tracking-wide">
                    {quizData[currentQ].question}
                  </h2>

                  {/* Answer options */}
                  <div className="space-y-4 mt-8">
                    {quizData[currentQ].answers.map((answer, index) => (
                      <button
                        key={index}
                        onClick={() => handleAnswer(answer)}
                        className="group w-full bg-gradient-to-r from-white/70 to-purple-50/70 hover:from-purple-50/80 hover:to-pink-50/80 transition-all duration-300 rounded-2xl px-6 py-4 text-left border border-purple-100/50 hover:border-purple-200/70 hover:shadow-lg hover:shadow-purple-100/30 transform hover:-translate-y-0.5"
                      >
                        <span className="text-slate-700 font-light text-lg leading-relaxed group-hover:text-slate-800 transition-colors">
                          {answer.text}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <div className="text-center space-y-8">
                {/* Results header */}
                <div className="space-y-4">
                  <div className="text-6xl">✨</div>
                  <h2 className="text-3xl font-light text-slate-700 tracking-wide">Your Personality Vibe</h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full mx-auto"></div>
                </div>

                {/* Results list */}
                <div className="bg-gradient-to-br from-purple-50/50 to-pink-50/50 rounded-2xl p-6 border border-purple-100/30">
                  <ul className="space-y-4">
                    {getResultsSummary().map((trait, idx) => (
                      <li key={idx} className="flex items-center space-x-3 text-slate-700">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                        <span className="text-lg font-light tracking-wide">{trait}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Restart button */}
                <button
                  onClick={restartQuiz}
                  className="w-full bg-gradient-to-r from-purple-200/80 to-pink-200/80 hover:from-purple-300/80 hover:to-pink-300/80 transition-all duration-300 rounded-2xl px-8 py-4 font-light text-lg text-slate-700 hover:text-slate-800 border border-purple-200/50 hover:border-purple-300/70 hover:shadow-lg hover:shadow-purple-100/30 transform hover:-translate-y-0.5"
                >
                  Take Quiz Again
                </button>
              </div>
            )}
          </div>

          {/* Floating elements for extra dreaminess */}
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-purple-200/40 to-pink-200/40 rounded-full blur-sm animate-bounce delay-1000"></div>
          <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-r from-blue-200/40 to-indigo-200/40 rounded-full blur-sm animate-bounce delay-2000"></div>
        </div>
      </div>
    </div>
  )
}
