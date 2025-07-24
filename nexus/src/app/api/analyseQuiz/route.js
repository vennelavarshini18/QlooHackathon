import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { definedTags } from '../../data/tags';

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const { answers } = body;

    if (!answers || answers.length === 0) {
      return NextResponse.json({ error: 'No answers provided' }, { status: 400 });
    }

    const prompt = `
      You are an expert profile analyzer. Based on a user's quiz answers, your job is to perform two tasks:
      1. Assign personality tags.
      2. Extract keywords suitable for the Qloo API, which finds recommendations based on taste in media and culture.

      The user's quiz answers provided these self-descriptions: "${answers.join(', ')}".

      Based on these answers, generate a single, valid JSON object that contains two keys: "tags" and "qloo_keywords".

      - The "tags" key should contain an array of exactly 3 strings, selected ONLY from this list: ${definedTags.join(', ')}.
      - The "qloo_keywords" key should contain an object with keys like "music", "movies", "books", or "concepts". The values should be an array of strings extracted or inferred from the user's answers. These keywords should be things Qloo can search for (e.g., artist names, movie titles, genres, authors, philosophical ideas).

      Example:
      {
        "tags": ["🎨 Creative", "🎵 Music-Driven", "🧩 Deep Thinker"],
        "qloo_keywords": {
          "music": ["Taylor Swift", "Coldplay"],
          "movies": ["Studio Ghibli"],
          "concepts": ["Time travel"]
        }
      }
    `;

    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });
    const result = await model.generateContent(prompt);
    const response = result.response;
    const rawText = response.text();
    const cleanedText = rawText.replace(/^```json\n/, '').replace(/\n```$/, '');
    const analysisResult = JSON.parse(cleanedText);

    const { tags, qloo_keywords } = analysisResult;

    //Call Qloo API
    const qlooResponse = await fetch('https://api.qloo.com/v1/taste/recommendations', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.QLOO_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(qloo_keywords),
    });

    const qlooData = await qlooResponse.json();
    console.log('🔍 Qloo API result:', qlooData);

    //Return full result: tags, keywords, and Qloo recommendations
    return NextResponse.json({
      tags,
      qloo_keywords,
      qloo_recommendations: qlooData
    });

  } catch (error) {
    console.error('Error in analyzeQuiz API with Gemini + Qloo:', error);
    return NextResponse.json({ error: 'Failed to analyze or fetch Qloo recommendations.' }, { status: 500 });
  }
}
