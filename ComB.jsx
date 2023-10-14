// task: i have an state in CompA & i have to transfer it to ComB

import React from "react";

const ComB = (props) => {

  return (
    <>
      <span>i am component b {props.title}</span>
    </>
  );
};

export default ComB;
