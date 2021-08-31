import React from "react";

export const FullWidthContainer = (props) => {
  const { children } = props;

  return (
    <div
      style={{
        background:
          "linear-gradient(to top, #512888, #412772, #33255c, #282146, #1f1c30, #1b1927, #18171d, #141414, #141414, #141414, #141414, #141414)",
      }}
      className='flex flex-col flex-grow container w-100 min-h-screen overflow-scroll'
    >
      {children}
    </div>
  );
};
