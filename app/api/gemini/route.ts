'use server'

// app/api/gemini/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

export async function POST(req: NextRequest) {
  // Parse the incoming request body (for example, paragraph and tone)
  const { paragraph, tone } = await req.json();

  // Ensure the API key is available in environment variables
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: 'API key is missing in the environment variables.' },
      { status: 500 }
    );
  }

  // Initialize the GoogleGenerativeAI client
  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

  try {
    // Send the request to Gemini API
    const result = await model.generateContent([
      {
        text: `Correct the grammar and spelling of the following paragraph with a ${tone} tone: "${paragraph}"`,
      },
    ]);

    // Return the result from Gemini API
    return NextResponse.json({ correctedText: result.response.text() });
  } catch (error) {
    console.error('Error from Gemini API:', error);
    return NextResponse.json({ error: 'Error processing the text.' }, { status: 500 });
  }
}
