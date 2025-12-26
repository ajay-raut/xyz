
/**
 * Local assistant service for Calivert.
 * This replaces the Gemini API to remove the need for an API key.
 */

const KNOWLEDGE_BASE = [
  {
    keywords: ['intern', 'hiring', 'career', 'job', 'apply'],
    response: "We are currently looking for 'Fullstack Developer Interns' for a 6-month period. You can apply directly through the Careers section on this page!"
  },
  {
    keywords: ['stipend', 'salary', 'pay', 'money'],
    response: "Our internship program offers a monthly stipend of Rs. 5,000, along with a certificate of completion."
  },
  {
    keywords: ['location', 'address', 'where', 'office', 'pune'],
    response: "Calivert is located at 191/A, Maharashtra Co-Op Housing Society, Yerawada, Pune, Maharashtra 411006."
  },
  {
    keywords: ['service', 'do', 'work', 'build', 'offer'],
    response: "We specialize in Fullstack Development (React/Node), Mobile App Development, UI/UX Design, and Cloud Infrastructure."
  },
  {
    keywords: ['time', 'hour', 'schedule', 'monday'],
    response: "Our standard office hours are Monday to Friday, 10:00 AM to 6:00 PM."
  },
  {
    keywords: ['who', 'owner', 'md', 'sharma'],
    response: "Calivert is led by our Managing Director, Sahil Sharma."
  }
];

const DEFAULT_RESPONSE = "I'm sorry, I didn't quite catch that. You can ask me about our internship program, office location, services, or how to contact us!";

export const getGeminiResponse = async (userMessage: string): Promise<string> => {
  // Artificial delay to simulate "thinking" for better UX
  await new Promise(resolve => setTimeout(resolve, 600));

  const lowerMessage = userMessage.toLowerCase();
  
  for (const entry of KNOWLEDGE_BASE) {
    if (entry.keywords.some(key => lowerMessage.includes(key))) {
      return entry.response;
    }
  }

  return DEFAULT_RESPONSE;
};
