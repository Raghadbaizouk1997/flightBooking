import React, { useState } from "react";
import HeartIcon from "./heartIcon";
import Image from "next/image";
import { PackageItemIcon } from "./packageItemIcon";
import { FaStar } from "react-icons/fa";
import { Button } from "../../components/Button ";

export const PackageItem = ({
  title,
  img,
  country,
  calender,
  number,
  numberReviews,
  desc,
  rating,
}) => {
  const [viewerCount, setViewerCount] = useState(parseInt(numberReviews));
  const [selectedRating, setSelectedRating] = useState(rating);

  const handleStarClick = (index) => {
    if (index + 1 === selectedRating) {
      setSelectedRating(index);
      setViewerCount((prevCount) => prevCount - 1);
    } else {
      setSelectedRating(index + 1);
      setViewerCount((prevCount) => prevCount + 1);
    }
  };

  const borderSlider = {
    height: "280px",
    width: "291px",
    borderRadius: "15px",
    position: "relative",
  };
  const topBorderSlider = {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px",
    position: "absolute",
    zIndex: 1,
    width: "100%",
  };
  const priceSlider = {
    backgroundColor: "rgba(3, 16, 23, 0.2)",
    borderRadius: "46px 46px 46px 0",
    padding: "5px 13px",
    color: "var(--color-white)",
  };

  return (
    <div>
      <div style={borderSlider}>
        <Image
          src={img}
          alt="Slider Image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          style={{ borderRadius: "15px" }}
        />
        <div style={topBorderSlider}>
          <span style={priceSlider}>$1,400</span>
          <HeartIcon />
        </div>
      </div>
      <h3>{title}</h3>
      <PackageItemIcon country={country} calender={calender} number={number} />
      <div>
        {Array.from({ length: 5 }).map((_, index) => (
          <FaStar
            key={index}
            className="star"
            style={{ color: index < selectedRating ? "gold" : "#ddd" }}
            onClick={() => handleStarClick(index)}
          />
        ))}
        <span>{rating}</span>
        <span>({viewerCount} viewers)</span>
      </div>
      <p>{desc}</p>

      <Button text='Book Now' />
    </div>
  );
};
