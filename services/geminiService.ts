import { GoogleGenerativeAI } from "@google/generative-ai";

/**
 * Technical Center assistant (Real Integration)
 */
export const askTechnicalAssistant = async (query: string, apiKey: string): Promise<string> => {
  if (!apiKey) {
    return "ACCESS DENIED: Missing API Key. Please authorize via the top-right console.";
  }

  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `
      You are the enhanced Engineering AI for Emphz GRP Solutions.
      Context: Emphz manufactures high-performance Glass Reinforced Plastic (GRP/FRP) enclosures, cabins, and kiosks.
      
      User Query: ${query}
      
      Instructions:
      1. Provide a technical, professional engineer-to-engineer response.
      2. If asking about specifications, refer to general GRP standards (IP rating, UL94 fire safety, IK10 impact).
      3. Be concise (max 3 sentences usually, unless detail is requested).
      4. Format your response with simple Markdown (bold for key specs).
      5. If unrelated to industrial engineering, politely decline.
      
      Answer:`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "CONNECTION ERROR: Neural link unstable. Please verify API Key or network status.";
  }
};

/**
 * Live chat assistant (Mock - kept as fallback for now)
 */
export const createSupportChat = () => {
  return {
    sendMessage: async (_message: string | { message: string }) => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      return {
        text: "Thank you for your message. Our live support team is currently offline. Please please visit our Contact page to send us an email, or use the WhatsApp button for urgent inquiries."
      };
    }
  };
};