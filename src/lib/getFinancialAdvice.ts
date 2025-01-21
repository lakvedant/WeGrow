// utils/getFinancialAdvice.ts
import OpenAI from "openai";

// Initialize the OpenAI client
const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

// Define the type for the function parameters
interface FinancialAdviceParams {
  Investment: number;
  Profit: number;
  Risk: number;
}

// Define the type for the response from OpenAI
interface OpenAIResponse {
  choices: Array<{
    message: {
      content: string;
    };
  }>;
}

// Function to generate personalized financial advice
const getFinancialAdvice = async ({
  Investment,
  Profit,
  Risk,
}: FinancialAdviceParams): Promise<string> => {
  console.log(Investment, Profit, Risk);
  try {
    const userPrompt = `
      Based on the following financial data:
      - Total Investment: ${Investment} INR 
      - Profit: ${Profit} INR 
      - Risk: ${Risk} %
      Provide detailed financial advice in 2 sentences to help the user manage their investment more effectively.
    `;

    // Send the prompt to the OpenAI API
    const chatCompletion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [{ role: "user", content: userPrompt }],
    });

    // Process and return the response
    const advice = (chatCompletion as unknown as OpenAIResponse).choices[0].message.content;

    console.log(advice);
    return advice;
  } catch (error) {
    console.error("Error fetching financial advice:", error);
    return "Sorry, I couldn't fetch the financial advice at this moment. Please try again later.";
  }
};

export default getFinancialAdvice;
