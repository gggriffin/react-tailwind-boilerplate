import React from "react";

export const FullWidthContainer = (props) => {
  const { children } = props;

  return (
    <div
      style={{
        background:
          "linear-gradient(to top, #000000, #0f0f0f, #181818, #202020, #292929, #37343c, #483f4d, #5d495e, #895370, #b95d74, #e36c69, #ff8552)",
      }}
      className="flex flex-col container w-100 h-screen"
    >
      {children}
    </div>
  );
};
