import React from "react";

export const FullWidthContainer = (props) => {
  const { children } = props;
  //#512888

  return (
    <div
      style={{
        background:
          "linear-gradient(0deg, rgba(94,252,141,1) 0%, rgba(20,20,20,1) 30%)",
      }}
      className='flex flex-col flex-grow container w-100 min-h-screen overflow-scroll'
    >
      {children}
    </div>
  );
};
