import React, { useState } from 'react';

interface Question {
  question: string;
  answer: string;
  id: number;
}

interface AccordionProps {
  questions: Question[];
}

const Accordion: React.FC<AccordionProps> = ({ questions }) => {
  const [isOpen, setIsOpen] = useState<number | null>(null);

  const toggle = (i: number) => {
    if (isOpen === i) {
      setIsOpen(null);
      return;
    }
    return setIsOpen(i);
  };

  return (
    <div className='w-full h-auto border-b border-black/10 overflow-hidden'>
      {questions.map((faq) => (
        <div
          key={faq.id}
          className={`w-full h-auto overflow-hidden border-t border-black/10 mb-3
          `}
        >
          <div
            className='w-full h-auto flex items-center justify-between py-2 md:py-4 lg:py-3 cursor-pointer selection:bg-none mt-3 md:mt-1'
            onClick={() => toggle(faq.id)}
          >
            <h3 className='text-lg md:text-2xl font-medium font-montserrat'>
              {faq.question}
            </h3>
            <span
              className={`text-2xl md:text-3xl font-montserrat transition-all duration-200 ${
                isOpen == faq.id ? 'rotate-45' : 'rotate-0'
              }`}
            >
              +
            </span>
          </div>
          <div
            className={`grid overflow-hidden ${
              isOpen == faq.id
                ? 'grid-rows-[1fr] opacity-100'
                : 'grid-rows-[0fr] opacity-0'
            } transition-all duration-200 ease-in-out`}
          >
            <div className='text-md md:text-lg font-montserrat overflow-hidden'>
              {faq.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
