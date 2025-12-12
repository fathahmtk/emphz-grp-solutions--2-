/**
 * Technical Center assistant (Mock)
 */
export const askTechnicalAssistant = async (query: string): Promise<string> => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  return `Thank you for your search regarding "${query}". 
  
  No specific datasheets matched your immediate query in the public index.
  
  Please refer to the "Downloads" section on the left for the full technical library, or contact our engineering team directly at info@emphz.in for detailed specifications.`;
};

/**
 * Live chat assistant (Mock)
 */
export const createSupportChat = () => {
  return {
    sendMessage: async (message: string | { message: string }) => {
       await new Promise(resolve => setTimeout(resolve, 1000));
       return {
         text: "Thank you for your message. Our live support team is currently offline. Please please visit our Contact page to send us an email, or use the WhatsApp button for urgent inquiries."
       };
    }
  };
};