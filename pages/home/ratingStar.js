import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const RatingStar = () => {
  const [rating, setRating] = useState(0);

  const handleClick = (selectedRating) => {
    if (selectedRating === rating) {
      // If the same rating is clicked again, reset the rating
      setRating(0);
    } else {
      // Set the selected rating
      setRating(selectedRating);
    }
  };

  return (
    <div style={{backgroundColor:'rgba(3, 16, 23, 0.3)', borderRadius:'46px', padding:'5px 13px'}}>
      <span
        onClick={() => handleClick(1)}
        style={{ cursor: 'pointer', color: rating >= 1 ? 'gold' : 'var(--color-white)' }}
      >
        <FaStar />
      </span>
      <span style={{ marginLeft: '10px', color:'var(--color-white)' }}>{rating.toFixed(1)}</span>
    </div>
  );
};

export default RatingStar;
