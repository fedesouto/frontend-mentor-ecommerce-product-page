import React from "react";

export const AddToCartButton = ({count, addItem,setCount}) => {
  const handleClick = () => {
    addItem(count);
    setCount(0);
  }
  return (
    <button className="addToCart" onClick={() => handleClick()}>
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20">
        <path
          fill="#fff"
          d="M20.925 3.641H3.863L3.61.816A.896.896 0 002.717 0H.897a.896.896 0 100 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 002.717-2.717 2.72 2.72 0 00-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 00.817-.677l1.821-7.283a.897.897 0 00-.87-1.114zM6.358 18.208a.926.926 0 010-1.85.926.926 0 010 1.85zm10.015 0a.926.926 0 010-1.85.926.926 0 010 1.85zm2.021-7.243l-13.8.81-.57-6.341h15.753l-1.383 5.53z"
        ></path>
      </svg>
      Add to cart
    </button>
  );
};
