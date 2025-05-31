import { useState } from 'react';

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        className="w-full flex justify-between items-center p-6 bg-white hover:bg-gray-50 transition duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-medium text-left text-gray-800">{question}</h3>
        <svg
          className={`w-6 h-6 text-red-700 transform transition duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`px-6 pb-6 pt-0 bg-gray-50 transition-all duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'}`}
      >
        <p className="text-gray-700">{answer}</p>
      </div>
    </div>
  );
};

export default FaqItem;