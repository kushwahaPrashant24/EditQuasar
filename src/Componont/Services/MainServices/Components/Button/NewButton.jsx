import React from 'react';
import './NewButton.css'; // Ensure this matches the actual file name
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'; // Import the icon

const NewButton = ({ buttonText, link }) => {
  const handleClick = () => {
    window.open(link, '_blank'); // Opens link in a new tab
  };

  return (
    <button className='button' onClick={handleClick}>
      {buttonText} <ArrowForwardIcon />
    </button>

    
  );
};

export default NewButton;
