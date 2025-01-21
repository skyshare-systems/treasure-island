"use client";
import XIcon from "@/components/icon/x-icon";
import { cn } from "@/lib/utils";
import { fredoka } from "@/public/fonts";
import React, { useRef, useState } from "react";
import { useDashboardModal } from "@/lib/store/dashboard-modal-store";
import CoinSwap from "@/components/icon/coin-swap";

const Swap = () => {
  const { dashboardCount, setDashboardCount } = useDashboardModal(
    (state) => state
  );

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
          className="flex items-center gap-1 p-3 border-2 border-cyan-1 bg-neutral-1 rounded-xl z-[3]"
        >
          <XIcon className="invert grayscale-0" />
        </button>
      ) : (
        <button
          onClick={handleClick}
          className="flex items-center gap-1 p-3 border-2 border-cyan-1 bg-neutral-1 rounded-xl z-[3]"
        >
          <CoinSwap />
          <h1 className={cn(fredoka.className, "ty-title text-neutral-8")}>
            Swap
          </h1>
        </button>
      )}
    </>
  );
};

export default Swap;
