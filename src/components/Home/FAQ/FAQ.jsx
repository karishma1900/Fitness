import React, { useState } from 'react';
import './FAQ.css';

const faqs = [
  {
    question: "What is your gym's opening time?",
    answer: "Our gym opens at 6:00 AM and closes at 10:00 PM every day.",
  },
  {
    question: "Do you offer personal training sessions?",
    answer: "Yes, we provide personal training sessions with certified trainers. Contact us for more details.",
  },
  {
    question: "What is the membership fee?",
    answer: "Our membership fee starts at $50 per month. Discounts are available for longer-term packages.",
  },
  {
    question: "Are group classes available?",
    answer: "Yes, we offer yoga, Zumba, and HIIT classes in small groups. Check our schedule for timings.",
  },
];

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className='faq-main'>

   
    <div className="faq-container">
      <h2 className="faq-heading">Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className={`faq-item ${activeIndex === index ? 'active' : ''}`}
        >
          <div
            className="faq-question"
            onClick={() => toggleAccordion(index)}
          >
            {faq.question}
            <span className="faq-icon">
              {activeIndex === index ? '-' : '+'}
            </span>
          </div>
          {activeIndex === index && (
            <div className="faq-answer">{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
    </div>
  );
};

export default FAQAccordion;
