import React from "react";

export const ContentIntro = (props) => {
  const { children } = props;

  return (
    <div className="bg-white h-1/4 bg-opacity-40 rounded-2xl shadow-2xl">
      {children}
    </div>
  );
};
