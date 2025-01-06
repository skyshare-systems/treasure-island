import React from "react";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const Loading = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-[999999999] bg-black/10 backdrop-blur-2xl flex justify-center items-center min-h-[100dvh]">
      <ReactPlayer
        width="100%"
        height="100%"
        className="w-full rounded-2xl"
        url={"/vid/loading.mp4"}
        playing
        loop
      />
    </div>
  );
};

export default Loading;
