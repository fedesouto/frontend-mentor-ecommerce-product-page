import React from "react";

export const Next = ({setImage, image, limit}) => {
  const handleNext = () => {
    if(image < limit) {
      setImage(image+1)
    }
  }
  return (
    <div className="carrousel-btn right" onClick={() => handleNext()}>
      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="18">
        <path
          fill="none"
          fillRule="evenodd"
          stroke="#1D2026"
          strokeWidth="3"
          d="M2 1l8 8-8 8"
        ></path>
      </svg>
    </div>
  );
};
