import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  id: number;
  question: string;
  emoji: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    id: 1,
    question: '¿Cómo registro mis datos?',
    emoji: '🤔',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    id: 2,
    question: 'Ya estoy registrado con mis datos, ¿Qué sigue?',
    emoji: '😎',
    answer: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    id: 3,
    question: 'No me llega mi factura, ¿Qué hago?',
    emoji: '😟',
    answer: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
  }
];

const BillingFAQ: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div>
      <h4 className="flex items-center gap-2 text-lg font-medium text-gray-900 mb-6">
        <span role="img" aria-label="light-bulb">💡</span>
        Preguntas frecuentes
      </h4>

      <div className="space-y-3">
        {faqItems.map((item) => (
          <div
            key={item.id}
            className="border border-gray-200 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => toggleExpand(item.id)}
              className="w-full px-4 py-3 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 text-sm">
                  {item.id}
                </span>
                <span className="font-medium text-gray-900">
                  {item.question} <span role="img" aria-label="emoji">{item.emoji}</span>
                </span>
              </div>
              <ChevronDown
                className={`w-5 h-5 text-gray-400 transition-transform ${
                  expandedId === item.id ? 'transform rotate-180' : ''
                }`}
              />
            </button>
            {expandedId === item.id && (
              <div className="px-4 py-3 bg-gray-50 border-t border-gray-200">
                <p className="text-gray-600">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BillingFAQ;