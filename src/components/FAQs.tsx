'use client'

import React, { useState } from 'react';

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFaq = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b-[1px] border-b-slate-300">
      <button
        className="flex w-full items-center justify-between gap-4 py-6"
        onClick={toggleFaq}
      >
        <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-left text-lg font-medium text-[rgb(3,6,23)]">
          {question}
        </span>
        <span className={`text-[rgb(3,6,23)] transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-2xl"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </span>
      </button>
      {isOpen && <p className="py-4">{answer}</p>}
    </div>
  );
};

const Faq: React.FC = () => {
  const faqs: FaqItemProps[] = [
    {
        question: 'What is a hub and how does it work?',
        answer: 'A hub is a group of investors who pool their resources to invest in various opportunities like gold, crypto, and startups. By joining a hub, you can start investing with less money and benefit from collective knowledge and shared risk.'
      },
      // {
      //   question: 'Can I invest with a small amount of money?',
      //   answer: 'Yes, you can start investing with a small amount of money. Our platform allows you to join hubs and pool your funds with other investors, making it easier to diversify and participate in larger investment opportunities.'
      // },
      {
        question: 'How do I join a hub?',
        answer: 'To join a hub, simply browse through the available hubs on our platform, select the one that matches your investment interests, and submit a request to join. Once approved, you can start contributing to the hub’s investments.'
      },
      {
        question: 'What types of investments can I make through the platform?',
        answer: 'Our platform offers a variety of investment opportunities including gold, cryptocurrencies, and startups. You can choose the investment type that aligns with your financial goals and risk tolerance.'
      },
      // {
      //   question: 'Is my investment safe?',
      //   answer: 'We prioritize the security of your investments by partnering with reputable financial institutions and using advanced encryption technologies. However, all investments carry some level of risk, so it’s important to do your own research and consult with financial advisors if needed.'
      // },
      // {
      //   question: 'What are the fees associated with using the platform?',
      //   answer: 'Our platform charges a small percentage of the investment as a fee. The exact fee structure will be detailed during the investment process. We strive to keep fees transparent and competitive.'
      // },
      // {
      //   question: 'How do I track my investment performance?',
      //   answer: 'You can track your investment performance through your dashboard on our platform. It provides detailed information on the performance of your investments, returns, and other relevant metrics.'
      // },
      {
        question: 'Can I withdraw my investment at any time?',
        answer: 'Withdrawal policies depend on the type of investment and the specific hub you have joined. Some investments may have lock-in periods, while others might offer more flexibility. Please review the terms of each hub before investing.'
      }
  ];

  return (
    <div className="px-4 py-12">
      <div className="mx-auto max-w-3xl">
        <h3 className="mb-4 text-center text-4xl font-semibold">Frequently asked questions</h3>
        {faqs.map((faq, index) => (
          <FaqItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default Faq;
