import Image from 'next/image';
import { useState } from 'react';

const CalendarImage = ({ images }) => {
  const [activeImage, setActiveImage] = useState(null);

  const handleClick = (image) => {
    setActiveImage(image === activeImage ? null : image);
  };

  return (
    <div className='--align-center'>
      {images.map((image, index) => (
        <div
          key={index}
          onClick={() => handleClick(image)}
          onMouseEnter={() => setActiveImage(image)}
          onMouseLeave={() => setActiveImage(null)}
          className={`image-wrapper ${activeImage === image ? 'active' : ''}`}
        >
          <div className="image-container">
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="scaled-image"
            />
          </div>
        </div>
      ))}

      <style jsx>{`
        .image-wrapper {
          transition: transform 0.3s;
        }

        .active {
          transform: scale(1.1, 1.1);
        }

        .image-container {
          border-radius: 8px; 
          overflow: hidden;
        }

        .scaled-image {
          display: block;
        }
      `}</style>
    </div>
  );
};

export default CalendarImage;
