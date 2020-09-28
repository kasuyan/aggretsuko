import React, { useState, useEffect } from "react";

const Moive: React.FC = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Clean up");
    // new YT.Player("player", {
    //   height: "360",
    //   width: "640",
    //   videoId: "M7lc1UVf-VE",
    //   events: {},
    // });
  });

  const onClickCount = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div id="player"></div>
      <div>
        bbb{count}
        <button onClick={onClickCount}>+</button>
      </div>
    </>
  );
};

export default Moive;
