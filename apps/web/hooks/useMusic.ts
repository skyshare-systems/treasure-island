"use client";
import React, { useRef, useState } from "react";

const useMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioBgMusic = useRef<any>();
  const audioBgMusicAttack = useRef<any>();

  return {
    isPlaying,
    audioBgMusic,
    audioBgMusicAttack,

    setIsPlaying,
  };
};

export default useMusic;
