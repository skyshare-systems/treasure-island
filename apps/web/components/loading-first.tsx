"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";

const LoadingFirst = () => {
  // const loading_bg_music = useRef<any>();

  // const buttonRef = useRef(null);

  // const [play]: any = useSound("/music/loading-bg-music.mp3");

  // useEffect(() => {
  //   if (buttonRef.current) {
  //     buttonRef.current.click(); // Automatically clicks the button
  //   }
  // }, []);

  return (
    <div
      // onMouseEnter={play}
      className="fixed top-0 left-0 w-full z-[99999999999999] bg-black/10 backdrop-blur-2xl flex justify-center items-center overflow-hidden min-h-[100dvh]"
    >
      {/* <button ref={buttonRef} onClick={() => playAudio()}>
        asd
      </button> */}
      {/* <audio
        ref={loading_bg_music}
        src="/music/loading-bg-music.mp3"
        muted
        autoPlay
      /> */}
      <Image src={"/icons/logo.png"} alt={"logo"} height={556} width={496} />
    </div>
  );
};

export default LoadingFirst;
