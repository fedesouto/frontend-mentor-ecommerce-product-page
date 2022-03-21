import React from "react";

export const Previous = ({setImage, image, limit}) => {
  const handlePrevious = () => {
    if (image > limit) {
      setImage(image-1)
    }
  }
  return (
    <div className="carrousel-btn left" onClick={() => handlePrevious()}>
      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="18">
        <path
          fill="none"
          fillRule="evenodd"
          stroke="#1D2026"
          strokeWidth="3"
          d="M11 1L3 9l8 8"
        ></path>
      </svg>
    </div>
  );
};
