import React from "react";

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active
    ? "text-white md:border-l border-b md:border-b-0 border-purple-500 md:border-l-4"
    : "text-[#ADB7BE]";
  return (
    <button onClick={selectTab}>
      <p
        className={`mr-3 w-28 md:w-32 text-left pl-2 font-semibold hover:text-white ${buttonClasses}`}
      >
        {children}
      </p>
    </button>
  );
};

export default TabButton;
