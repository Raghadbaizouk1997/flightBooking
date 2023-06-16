import React from 'react'
import HeartIcon from './heartIcon'
import RatingStar from './ratingStar'
import Image from "next/image";

export const PlaceItem = ({name, price, img}) => {
    const borderSlider = {
        height:'315px',
        width:'291px',
        borderRadius:'15px',
        position:'relative'
    }
    const topBorderSlider = {
        display:'flex',
        justifyContent:'space-between',
        padding:'15px',
        position:'absolute',
        zIndex: 1,
        width:'100%'
    }
    const bottomBorderSlider = {
        position:'absolute',
        bottom:'0',
        color:'var(--color-white)',
        padding:'15px'
    }
  return (
    <div style={borderSlider}>
        <Image
        src={img}
        alt="Slider Image"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        style={{ borderRadius: '15px' }}
      />
        <div style={topBorderSlider}>
        <RatingStar />
        <HeartIcon />
        </div>
        <div style={bottomBorderSlider}>
            <h1>{name}</h1>
            <span>{price}</span><span style={{color:'var(--color-white)'}}>/Per person</span>
        </div>
   
    </div>
  )
}
