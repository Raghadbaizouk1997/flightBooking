import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const GeneralSlider = ({ settings, places, sliderClassName, arrowClassName, arrowStyle, childComponent, sliderStyle }) => {
  const defaultSliderStyle = {
    width: '70%',
    margin: '0',
  };

  const mergedSliderStyle = {
    ...defaultSliderStyle,
    ...sliderStyle,
  };

  return (
    <div className={sliderClassName} style={mergedSliderStyle}>
      <Slider {...settings} className="custom-slider">
        {places.map((item) => (
          <div key={item.id}>
            {React.cloneElement(childComponent, { ...item })}
          </div>
        ))}
      </Slider>
    </div>
  );
};
