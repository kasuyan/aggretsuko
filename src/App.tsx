import React from "react";

import YouTube from "react-youtube";

function App() {
  let yes = 1 as const;
  let no = 0 as const;
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: yes,
      loop: yes,
      controls: no,
      mute: yes,
      rel: no,
    },
  };

  return (
    <>
      <YouTube className="movie" videoId="1n3xXuEyr40" opts={opts} />
      <div className="section-01">
        <span>アグレッシブ烈子</span>
      </div>
      <div className="section-02">aaaa</div>
    </>
  );
}

export default App;
