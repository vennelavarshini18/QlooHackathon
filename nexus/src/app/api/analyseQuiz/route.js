import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { definedTags } from 'nexus/src/app/data/tags.js';

// Initialize the Google Generative AI client with the API key
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

export async function POST(request) {
  try {
    // 1. Get user's answers from the frontend
    const body = await request.json();
    const { answers } = body;

    if (!answers || answers.length === 0) {
      return NextResponse.json({ error: 'No answers provided' }, { status: 400 });
    }

    // 2. Engineer the NEW, more powerful prompt for Gemini
    // We are asking for two distinct things in a single JSON object.
    const prompt = `
      You are an expert profile analyzer. Based on a user's quiz answers, your job is to perform two tasks:
      1. Assign personality tags.
      2. Extract keywords suitable for the Qloo API, which finds recommendations based on taste in media and culture.

      The user's quiz answers provided these self-descriptions: "${answers.join(', ')}".

      Based on these answers, generate a single, valid JSON object that contains two keys: "tags" and "qloo_keywords".

      - The "tags" key should contain an array of exactly 3 strings, selected ONLY from this list: ${definedTags.join(', ')}.
      - The "qloo_keywords" key should contain an object with keys like "music", "movies", "books", or "concepts". The values should be an array of strings extracted or inferred from the user's answers. These keywords should be things Qloo can search for (e.g., artist names, movie titles, genres, authors, philosophical ideas).

      Example of the required output format:
      {
        "tags": ["🎨 Creative", "🎵 Music-Driven", "🧩 Deep Thinker"],
        "qloo_keywords": {
          "music": ["Taylor Swift", "Coldplay", "Lo-fi beats"],
          "movies": ["Studio Ghibli", "Blade Runner", "Sci-fi thrillers"],
          "concepts": ["Time travel", "Philosophy", "Aesthetic design"]
        }
      }
    `;

    // 3. Call the Gemini API
    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });
    const result = await model.generateContent(prompt);
    const response = result.response;
    
    // Extract the text and clean it, as Gemini can sometimes wrap it in ```json
    const rawText = response.text();
    const cleanedText = rawText.replace(/^```json\n/, '').replace(/\n```$/, '');

    // 4. Parse the JSON response from the AI
    const analysisResult = JSON.parse(cleanedText);

    // 5. Send the complete result object back to the frontend
    return NextResponse.json(analysisResult);

  } catch (error) {
    console.error('Error in analyzeQuiz API with Gemini:', error);
    return NextResponse.json({ error: 'Failed to process request with Gemini.' }, { status: 500 });
  }
}