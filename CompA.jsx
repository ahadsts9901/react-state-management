// task: i have an state in CompA & i have to transfer it to ComB

import React, { useState } from "react";

const CompA = () => {

  let [title, setTitle] = useState("Learning ReactJS");

  return <div>Comp A</div>;
};

export default CompA;
