"use client";
import { useState } from "react";
import { quizData } from "./data/quizData";

type Answer = { text: string; value: string };

export default function Quiz() {
  const [currentQ, setCurrentQ] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Answer[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [resultData, setResultData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleAnswer = (answer: Answer) => {
    const updatedAnswers = [...selectedAnswers, answer];
    setSelectedAnswers(updatedAnswers);

    if (currentQ + 1 < quizData.length) {
      setCurrentQ(currentQ + 1);
    } else {
      submitQuiz(updatedAnswers);
    }
  };

  const submitQuiz = async (answers: Answer[]) => {
    const values = answers.map((a) => a.value);
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/analyseQuiz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ answers: values }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "API Error");
      setResultData(data);
      setShowResults(true);
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const restartQuiz = () => {
    setCurrentQ(0);
    setSelectedAnswers([]);
    setShowResults(false);
    setResultData(null);
    setError("");
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100">
        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-50/30 via-transparent to-rose-50/30"></div>
        <div className="absolute top-20 left-20 w-32 h-32 bg-purple-200/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-blue-200/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/3 w-40 h-40 bg-rose-200/15 rounded-full blur-2xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-indigo-200/20 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-8">
        <div className="max-w-2xl w-full">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 space-y-8 border border-white/50">
            {!showResults ? (
              <>
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-sm text-slate-600">
                    <span className="px-3 py-1 bg-purple-100/60 rounded-full">
                      Question {currentQ + 1} of {quizData.length}
                    </span>
                    <div className="flex space-x-1">
                      {quizData.map((_, idx) => (
                        <div
                          key={idx}
                          className={`w-2 h-2 rounded-full ${
                            idx <= currentQ ? "bg-purple-300" : "bg-gray-200"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="w-full bg-gray-200/50 rounded-full h-2">
                    <div
                      className="h-full bg-gradient-to-r from-purple-300 to-pink-300 rounded-full"
                      style={{ width: `${((currentQ + 1) / quizData.length) * 100}%` }}
                    />
                  </div>
                </div>

                <div className="text-center space-y-6">
                  <h2 className="text-2xl text-slate-700 leading-relaxed">
                    {quizData[currentQ].question}
                  </h2>
                  <div className="space-y-4 mt-8">
                    {quizData[currentQ].answers.map((answer, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleAnswer(answer)}
                        className="group w-full bg-gradient-to-r from-white/70 to-purple-50/70 hover:from-purple-50/80 hover:to-pink-50/80 rounded-2xl px-6 py-4 text-left border border-purple-100/50 hover:border-purple-200/70 hover:shadow-lg"
                      >
                        <span className="text-slate-700 text-lg group-hover:text-slate-800">
                          {answer.text}
                        </span>
                      </button>
                    ))}
                  </div>
                  {loading && <p className="text-purple-500">Analyzing your results...</p>}
                  {error && <p className="text-red-500">{error}</p>}
                </div>
              </>
            ) : (
              <div className="text-center space-y-8">
                <div className="space-y-4">
                  <div className="text-6xl">✨</div>
                  <h2 className="text-3xl text-slate-700">Your Personality Vibe</h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-purple-300 to-pink-300 mx-auto"></div>
                </div>

                {/*tags*/}
                <div className="bg-gradient-to-br text-purple-500 to-pink-50 rounded-2xl p-6 border border-purple-100/30">
                  <h3 className="text-lg font-medium mb-2 text-slate-600">Tags:</h3>
                  <ul className="space-y-2">
                    {resultData?.tags?.map((tag: string, idx: number) => (
                      <li key={idx}>{tag}</li>
                    ))}
                  </ul>
                </div>

                {/*qloo keywords*/}
                <div className="text-left bg-white/70 p-4 rounded-xl shadow">
                  <h3 className="text-slate-600 font-medium mb-1">Qloo Keywords</h3>
                  <pre className="text-sm text-slate-700 whitespace-pre-wrap">
                    {JSON.stringify(resultData.qloo_keywords, null, 2)}
                  </pre>
                </div>

                {/*qloo recommendations */}   
                <div className="text-left bg-white/70 p-4 rounded-xl shadow">
                  <h3 className="text-slate-600 font-medium mb-1">Qloo Recommendations</h3>
                  <pre className="text-sm text-slate-700 whitespace-pre-wrap">
                    {JSON.stringify(resultData.qloo_recommendations, null, 2)}
                  </pre>
                </div>

                <button
                  onClick={restartQuiz}
                  className="w-full bg-gradient-to-r from-purple-200 to-pink-200 hover:from-purple-300 hover:to-pink-300 rounded-2xl px-8 py-4 text-lg text-slate-700"
                >
                  Take Quiz Again
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
