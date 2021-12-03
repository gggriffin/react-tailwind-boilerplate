import React from "react";

export const FullWidthContainer = (props) => {
  const { children } = props;
  //#512888

  return (
    <div
      // style={{
      //   backgroundImage: `url(${
      //     process.env.PUBLIC_URL + "/images/deadwoods-background-photo.jpeg"
      //   })`,
      //   backgroundPosition: "center",
      //   backgroundRepeat: "no-repeat",
      //   backgroundSize: "cover",
      // }}
      className='flex flex-col flex-grow container w-100 min-h-screen'
    >
      {children}
    </div>
  );
};
