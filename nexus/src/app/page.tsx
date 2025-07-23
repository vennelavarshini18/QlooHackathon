'use client';

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [quizResponses, setQuizResponses] = useState<string[]>([
    "I love psychological thrillers",
    "Big fan of indie music",
    "I enjoy philosophical debates"
  ]);
  const [tags, setTags] = useState<string[]>([]);
  const [qlooKeywords, setQlooKeywords] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);

    try {
      // 1. Send to Gemini API
      const response = await fetch('/api/analyseQuiz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ answers: quizResponses }),
      });

      if (!response.ok) throw new Error("Gemini API failed");

      const { tags, qloo_keywords } = await response.json();

      // 2. Store in backend
      await fetch('/api/storeProfile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: 'user1',
          tags,
          qloo_keywords,
        }),
      });

      setTags(tags);
      setQlooKeywords(qloo_keywords);

    } catch (err: any) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

        <div className="text-center sm:text-left">
          <h2 className="text-lg font-semibold mb-2">Sample Quiz Responses</h2>
          <ul className="list-disc list-inside text-sm mb-4">
            {quizResponses.map((res, idx) => (
              <li key={idx}>{res}</li>
            ))}
          </ul>
          <button
            onClick={handleSubmit}
            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 disabled:opacity-50"
            disabled={loading}
          >
            {loading ? 'Analyzing...' : 'Submit Quiz'}
          </button>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>

        {tags.length > 0 && (
          <div className="mt-6 text-sm max-w-md">
            <h3 className="font-bold">🎯 Tags:</h3>
            <p>{tags.join(', ')}</p>

            <h3 className="font-bold mt-4">🎧 Qloo Keywords:</h3>
            <pre className="bg-gray-100 p-3 rounded text-xs overflow-auto">
              {JSON.stringify(qlooKeywords, null, 2)}
            </pre>
          </div>
        )}
      </main>

      <footer className="row-start-3 text-xs text-gray-400">
        © Qloo Hackathon Project
      </footer>
    </div>
  );
}
