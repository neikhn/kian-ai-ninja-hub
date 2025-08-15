import {
  GoogleGenerativeAI,
  GenerationConfig,
  Content,
  Part,
} from "@google/generative-ai";

// Get the API key from environment variables
const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
if (!apiKey) {
  throw new Error("VITE_GEMINI_API_KEY is not set in the environment variables");
}

const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash", // Or "gemini-2.5-pro" based on availability
});

const generationConfig: GenerationConfig = {
  temperature: 0.7,
  topP: 1,
  topK: 1,
  maxOutputTokens: 2048,
  responseMimeType: "application/json",
};

// Function to build the chat history for the model
const buildHistory = (
  messages: { content: string; sender: 'user' | 'bot' }[]
): Content[] => {
  return messages.map((msg) => ({
    role: msg.sender === 'user' ? 'user' : 'model',
    parts: [{ text: msg.content }],
  }));
};

// Main function to call the Gemini API
export const callGeminiApi = async (
  systemPrompt: string,
  history: { content: string; sender: 'user' | 'bot' }[],
  newMessage: string
): Promise<{ content: string; emotion: 'happy' | 'thinking' | 'curious' | 'neutral'; suggestions: string[] }> => {
  try {
    const chatHistory = buildHistory(history);

    const chat = model.startChat({
      history: [
        {
          role: "user",
          parts: [{ text: systemPrompt }],
        },
        {
          role: "model",
          parts: [{ text: "Okay, I am ready to act as the Ninja AI assistant and will respond in the specified JSON format." }],
        },
        ...chatHistory
      ],
      generationConfig,
    });

    const result = await chat.sendMessage(newMessage);
    const responseText = result.response.text();
    
    // The model is expected to return a JSON string with content and emotion
    const parsedResponse = JSON.parse(responseText);

    return {
      content: parsedResponse.content || "I'm not sure how to respond to that.",
      emotion: parsedResponse.emotion || "neutral",
      suggestions: parsedResponse.suggestions || [],
    };
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    // Return a default error message if the API call fails
    return {
      content: "Sorry, I'm having trouble connecting. Please try again later.",
      emotion: "neutral",
      suggestions: [],
    };
  }
};