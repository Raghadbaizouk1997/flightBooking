import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';

const HeartIcon = () => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <FaHeart
      onClick={handleLike}
      color={isLiked ? 'red' : 'var(--color-white)'}
      size={24}
    />
  );
};

export default HeartIcon;
