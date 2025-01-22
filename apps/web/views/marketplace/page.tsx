"use client";
import DashboardIcon from "@/components/icon/dashboard";
import XIcon from "@/components/icon/x-icon";
import { cn } from "@/lib/utils";
import { fredoka } from "@/public/fonts";
import React, { useState } from "react";
import Dashboard from "./dashboard";
import { useDashboardModal } from "@/lib/store/dashboard-modal-store";
import Swap from "../swap/page";
import useMusic from "@/hooks/useMusic";

interface IMarketplace {
  onClick: any;
}

const Marketplace = ({ onClick }: IMarketplace) => {
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

  return (
    <div className="fixed hidden lg:flex flex-col items-end justify-end  gap-2 bottom-4 right-0 px-4 z-[3]">
      <Dashboard />
      <div className="flex flex-col md:flex-row items-end md:items-center gap-2 md:gap-4">
        <Swap />

        <button
          onClick={onClick}
          onMouseEnter={() => landHover()}
          onMouseDown={() => landClick()}
          className="flex items-center gap-1 p-3 border-2 border-black bg-white rounded-xl z-[3]"
        >
          {dashboardCount === 1 ? (
            <XIcon />
          ) : (
            <>
              <DashboardIcon />
              <h1 className={cn(fredoka.className, "ty-title text-black")}>
                Marketplace
              </h1>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default Marketplace;
