import React, { useState } from 'react';
import './style.css';

const EnquireButton = () => {
  const [handleClick, setHandleClick] = useState(1);
  return (
    <button
      type="button"
      onClick={() => setHandleClick(handleClick + 1)}
      className="enquire-button"
    >
      Enquire Today
    </button>
  );
};

export default EnquireButton;
