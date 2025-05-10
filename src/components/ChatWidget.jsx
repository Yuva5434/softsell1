import { useState } from 'react';

const exampleQuestions = [
  'How do I sell my license?',
  'What types of licenses can I sell?',
  'How long does the valuation take?',
  'Is my data secure?',
];

const exampleAnswers = {
  'How do I sell my license?': 'You can sell your license by uploading it through our How It Works section and following the steps.',
  'What types of licenses can I sell?': 'We accept single user, multi user, and enterprise licenses.',
  'How long does the valuation take?': 'Valuation usually takes less than 24 hours.',
  'Is my data secure?': 'Yes, we use industry-standard security measures to protect your data.',
};

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [chatLog, setChatLog] = useState([
    { from: 'bot', text: 'Hi! How can I help you today? You can ask me about selling licenses.' },
  ]);
  const [input, setInput] = useState('');

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMessage = input.trim();
    setChatLog([...chatLog, { from: 'user', text: userMessage }]);
    setInput('');

    const answer = exampleAnswers[userMessage] || "Sorry, I don't understand that. Please try another question.";
    setTimeout(() => {
      setChatLog((prev) => [...prev, { from: 'bot', text: answer }]);
    }, 500);
  };

  return (
    <>
      <button
        onClick={toggleChat}
        aria-label="Toggle Chat Widget"
        className="fixed bottom-6 right-6 bg-secondary dark:bg-secondary-dark text-white rounded-full p-4 shadow-lg hover:bg-secondary-dark transition"
      >
        💬
      </button>
      {isOpen && (
        <div className="fixed bottom-20 right-6 w-80 max-w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg flex flex-col">
          <div className="p-4 border-b border-gray-300 dark:border-gray-700 font-bold text-primary dark:text-primary-light">
            SoftSell Chat
          </div>
          <div className="p-4 flex-grow overflow-y-auto max-h-64 space-y-3">
            {chatLog.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`rounded-lg p-2 max-w-xs ${
                    msg.from === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 border-t border-gray-300 dark:border-gray-700 flex space-x-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type your question..."
              className="flex-grow p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
            <button
              onClick={handleSend}
              className="bg-primary dark:bg-primary-light text-white px-4 rounded hover:bg-primary-dark transition"
            >
              Send
            </button>
          </div>
          <div className="p-2 text-xs text-gray-500 dark:text-gray-400">
            Try: {exampleQuestions.join(' | ')}
          </div>
        </div>
      )}
    </>
  );
}
