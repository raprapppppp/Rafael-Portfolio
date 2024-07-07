import React from "react";

const Input = ({ children, ...props }) => {
  return (
    <>
      <input
        {...props}
        className="flex h-[48px] border rounded-md font-light border-white/10 focus:border-accent bg-primary px-4 py-5 text-base placeholder:text-white/60 outline-none"
      />
    </>
  );
};

export default Input;
