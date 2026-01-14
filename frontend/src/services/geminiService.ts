import { GoogleGenerativeAI } from "@google/generative-ai";

const getAiClient = () => {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  if (!apiKey) {
    console.warn("VITE_GEMINI_API_KEY is missing from environment variables.");
    return null;
  }
  return new GoogleGenerativeAI(apiKey);
};

export interface AIAnalysisResult {
  factors: string;
  sentiment: 'bullish' | 'bearish' | 'neutral';
  confidence: number; // 0-100
  riskLevel: 'low' | 'medium' | 'high';
  summary: string;
}

export const analyzeMarketEvent = async (question: string, description: string): Promise<string> => {
  const ai = getAiClient();
  if (!ai) return "AI Analysis unavailable: Missing API Key.";

  try {
    const prompt = `
      Act as a financial analyst and prediction market expert.
      Analyze the following prediction market event:
      Question: "${question}"
      Context: "${description}"

      Provide a concise, neutral analysis of 3 key factors that could influence the outcome (YES or NO). 
      Do not predict the winner, just list the factors. 
      Keep it under 150 words. Format as a bulleted list.
    `;

    const model = ai.getGenerativeModel({ model: "gemini-2.0-flash" });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return text || "Analysis could not be generated at this time.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Error generating market analysis. Please try again later.";
  }
};

/**
 * Advanced AI analysis with structured output
 */
export const analyzeMarketAdvanced = async (
  question: string,
  description: string,
  poolYes: number,
  poolNo: number
): Promise<AIAnalysisResult | null> => {
  const ai = getAiClient();
  if (!ai) return null;

  try {
    const yesOdds = poolYes + poolNo > 0 ? (poolYes / (poolYes + poolNo) * 100).toFixed(1) : '50';
    const noOdds = poolYes + poolNo > 0 ? (poolNo / (poolYes + poolNo) * 100).toFixed(1) : '50';

    const prompt = `
      You are an expert prediction market analyst. Analyze this market:
      
      Question: "${question}"
      Description: "${description}"
      Current Market Odds: YES ${yesOdds}% / NO ${noOdds}%
      
      Provide your analysis in the following JSON format ONLY (no markdown, no code blocks):
      {
        "factors": "3 key factors as bullet points",
        "sentiment": "bullish" or "bearish" or "neutral",
        "confidence": number between 0-100 representing your confidence in the market's current odds,
        "riskLevel": "low" or "medium" or "high",
        "summary": "One sentence summary of your view"
      }
    `;

    const model = ai.getGenerativeModel({ model: "gemini-2.0-flash" });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text().trim();

    // Parse JSON response
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      const parsed = JSON.parse(jsonMatch[0]);
      return {
        factors: parsed.factors || '',
        sentiment: parsed.sentiment || 'neutral',
        confidence: Math.min(100, Math.max(0, Number(parsed.confidence) || 50)),
        riskLevel: parsed.riskLevel || 'medium',
        summary: parsed.summary || ''
      };
    }
    return null;
  } catch (error) {
    console.error("Advanced Gemini API Error:", error);
    return null;
  }
};

/**
 * Generate trading recommendation based on market analysis
 */
export const getTradeRecommendation = async (
  question: string,
  currentOdds: number // YES odds percentage
): Promise<string> => {
  const ai = getAiClient();
  if (!ai) return "Recommendation unavailable.";

  try {
    const prompt = `
      As a trading advisor, briefly assess this prediction market:
      Question: "${question}"
      Current YES probability: ${currentOdds}%
      
      In 2-3 sentences, provide a balanced view on whether the current odds seem fair. 
      Do NOT give financial advice or tell users what to do. Just provide perspective.
    `;

    const model = ai.getGenerativeModel({ model: "gemini-2.0-flash" });
    const result = await model.generateContent(prompt);
    return result.response.text() || "Unable to generate recommendation.";
  } catch (error) {
    console.error("Trade recommendation error:", error);
    return "Recommendation temporarily unavailable.";
  }
};
