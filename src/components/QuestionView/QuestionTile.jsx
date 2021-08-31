import React from "react";

export const QuestionTile = (props) => {
  const { children } = props;

  return (
    <div className='border-white border-solid border-4 m-5 rounded-md'>
      <div className='bg-white opacity-60 p-4 border-4  border-solid border-white text-center text-black'>
        {children}
      </div>
    </div>
  );
};
