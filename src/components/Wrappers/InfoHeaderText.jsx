import React from "react";

export const InfoHeaderText = (props) => {
  const { children } = props;
  return (
    <div className='text-center text-3xl font-bold mb-5 font-main-content-text text-blue-primary'>
      {children}
    </div>
  );
};
