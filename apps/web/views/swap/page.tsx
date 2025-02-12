"use client";
import XIcon from "@/components/icon/x-icon";
import { cn } from "@/lib/utils";
import { fredoka_moto } from "@/public/fonts";
import React, { useRef, useState } from "react";
import { useDashboardModal } from "@/lib/store/dashboard-modal-store";
import CoinSwap from "@/components/icon/coin-swap";
import useMusic from "@/hooks/useMusic";

const Swap = () => {
  const { dashboardCount, setDashboardCount } = useDashboardModal(
    (state) => state
  );

  const {
    isPlaying,
    audioBgMusic,
    audioBgMusicAttack,

    setIsPlaying,
    landHover,
    landClick,
  } = useMusic();

  function handleClick() {
    var audio = new Audio("/music/modal-open.mp3");
    audio.play();
    setDashboardCount(3);
  }
  function handleClose() {
    var audio = new Audio("/music/modal-close.mp3");
    audio.play();
    setDashboardCount(0);
  }

  return (
    <>
      {dashboardCount === 3 ? (
        <button
          onClick={handleClose}
          onMouseEnter={() => landHover()}
          onMouseDown={() => landClick()}
          className="flex items-center gap-1 p-3 border-2 border-cyan-1 bg-neutral-1 rounded-xl z-[3]"
        >
          <XIcon className="invert grayscale-0" />
        </button>
      ) : (
        <button
          onClick={handleClick}
          onMouseEnter={() => landHover()}
          onMouseDown={() => landClick()}
          className="flex items-center gap-1 p-3 border-2 border-cyan-1 bg-neutral-1 rounded-xl z-[3]"
        >
          <CoinSwap />
          <h1
            className={cn(
              fredoka_moto.className,
              "lg:block hidden ty-title text-neutral-8"
            )}
          >
            Swap
          </h1>
        </button>
      )}
    </>
  );
};

export default Swap;
