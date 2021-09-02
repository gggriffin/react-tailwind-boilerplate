import React from "react";

export const InfoHeaderText = (props) => {
  const { children } = props;
  return (
    <div className='text-center text-3xl font-bold font-main-content-text text-green-primary'>
      {children}
    </div>
  );
};
