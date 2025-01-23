"use client";
import React, { useRef, useState } from "react";

const useMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioBgMusic = useRef<any>();
  const audioBgMusicAttack = useRef<any>();
  const audioLoadingMusic = useRef<any>();

  function landHover() {
    var audio = new Audio("/music/land-hover.mp3");
    audio.play();
  }

  function landClick() {
    var audio = new Audio("/music/land-click.mp3");
    audio.play();
  }

  return {
    isPlaying,
    audioBgMusic,
    audioBgMusicAttack,
    audioLoadingMusic,

    setIsPlaying,
    landHover,
    landClick,
  };
};

export default useMusic;
