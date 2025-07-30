import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { definedTags } from '../../../data/tags';

const qlooApiKey = process.env.QLOO_API_KEY;
const googleApiKey = process.env.GOOGLE_API_KEY;

const genAI = new GoogleGenerativeAI(googleApiKey);

export async function POST(request) {
  try {
    const body = await request.json();
    const { answers } = body;

    if (!answers || !Array.isArray(answers) || answers.length === 0) {
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
    const rawText = result.response.text();

    const jsonMatch = rawText.match(/```json([\s\S]*?)```/);
    const jsonString = jsonMatch ? jsonMatch[1].trim() : rawText.trim();

    let analysisResult;
    try {
      analysisResult = JSON.parse(jsonString);
    } catch (err) {
      console.error('❌ Failed to parse Gemini JSON output:', jsonString);
      return NextResponse.json({ error: 'Gemini returned invalid JSON format.' }, { status: 500 });
    }

    const { tags, qloo_keywords } = analysisResult;

    if (!tags || !qloo_keywords || typeof qloo_keywords !== 'object') {
      return NextResponse.json({ error: 'Missing or invalid tags or qloo_keywords in Gemini output' }, { status: 500 });
    }

    const categories = ["music", "movies", "books", "concepts"];
    const qlooRecommendations = {};

    for (const category of categories) {
      if (Array.isArray(qloo_keywords[category]) && qloo_keywords[category].length > 0) {
        const items = qloo_keywords[category].map((keyword) => ({
          type: category,
          value: keyword
        }));

        const response = await fetch('https://hackathon.api.qloo.com/v2/insights', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-Api-Key': qlooApiKey
          },
          body: JSON.stringify({
            filter: { type: category },
            taste: { items }
          }),
        });

        const data = await response.json();

        if (response.ok) {
          qlooRecommendations[category] = data;
        } else {
          console.error(`❌ Qloo API error for ${category}:`, data);
          qlooRecommendations[category] = {
            error: true,
            message: data?.errors?.[0]?.message || 'Unknown error'
          };
        }
      }
    }

    return NextResponse.json({
      tags,
      qloo_keywords,
      qloo_recommendations: qlooRecommendations
    });

  } catch (error) {
    console.error('❌ Error in analyzeQuiz API with Gemini + Qloo:', error);
    return NextResponse.json({ error: 'Failed to analyze or fetch Qloo recommendations.' }, { status: 500 });
  }
}
