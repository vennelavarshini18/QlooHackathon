'use client';

import { useState } from 'react';

export default function SubmitQuiz() {
  const [quizResponses, setQuizResponses] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async () => {
    try {
      const response = await fetch('/api/analyseQuiz', {
        method: 'POST',
        body: JSON.stringify({ quizResponses }),
      });

      const { tags, qloo_keywords } = await response.json();

      await fetch('/api/storeProfile', {
        method: 'POST',
        body: JSON.stringify({
          userId: 'user1', // Replace with dynamic user after having auth
          tags,
          qloo_keywords,
        }),
      });

      setSubmitted(true);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>Submit Quiz</h1>
      {/*replace below with dynamic form fields*/}
      <button onClick={handleSubmit}>Submit Quiz</button>
      {submitted && <p>Profile stored successfully!</p>}
    </div>
  );
}
