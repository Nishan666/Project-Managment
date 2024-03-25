import React from "react";

const Button = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className="px-4 py-2 text-sm rounded-md md:text-base bg-stone-700 text-stone-400 hover:text-stone-100 hover:bg-stone-600"
    >
      {children}
    </button>
  );
};

export default Button;
