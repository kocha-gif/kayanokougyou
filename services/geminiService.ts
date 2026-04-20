import { GoogleGenAI } from "@google/genai";

// Note: In a production environment, never expose API keys on the client side.
// This is structured to use the key if provided via environment variables as per instructions.
// The API key must be obtained exclusively from the environment variable process.env.API_KEY.
const apiKey = process.env.API_KEY;

const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export const generateConceptImage = async (prompt: string): Promise<string | null> => {
  if (!ai) {
    // Silent fail in production/preview if no key is present to allow UI to show fallback images
    console.warn("Gemini API Key not found. Using placeholder images.");
    return null;
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-image-preview',
      contents: {
        parts: [
          { text: prompt }
        ]
      },
      config: {
        imageConfig: {
          aspectRatio: "16:9",
          imageSize: "1K"
        }
      }
    });

    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
  } catch (error) {
    console.error("Failed to generate image with Gemini:", error);
  }
  return null;
};