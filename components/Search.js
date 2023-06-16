import React from "react";

export const Search = ({value , onChange}) => {
  return (
    <div className="--form-control">
      <input type="text" placeholder="Search" value={value} 
      onChange={onChange}/>
    </div>
  );
};
