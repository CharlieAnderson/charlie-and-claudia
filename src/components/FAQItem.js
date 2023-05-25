import React, { useState } from 'react';
import Header from "../components/ContentHeader"

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div 
      style={{ 
        margin: '22px 5%', 
        border: 'solid rgb(8, 0, 123) 1px', 
        borderRadius: '5px',
        transition: '0.5s',
        cursor: 'pointer'
      }}
      onClick={toggleOpen}
    >
      <div className={`Question ${isOpen ? "Underline" : ""}`}>{question}</div>
        {isOpen 
          && <div className='Answer'>{answer}</div>
        }
    </div>
  );
}

export default FAQItem;