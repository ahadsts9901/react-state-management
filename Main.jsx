// task: i have an state in CompA & i have to transfer it to ComB

import ComB from "./ComB";

const Main = (props) => {
  return (
    <>
      <ComB title={props.title} />
    </>
  );
};

export default Main;
