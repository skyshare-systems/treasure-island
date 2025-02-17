"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { fredoka_moto, jaro } from "@/public/fonts";
import TokenIcon from "./icon/token";
import { useDashboardModal } from "@/lib/store/dashboard-modal-store";
import { useToken0, useToken1 } from "@/lib/store/token-store";
import Marketplace from "@/views/marketplace/page";
import XIcon from "./icon/x-icon";
import DashboardIcon from "./icon/dashboard";
import Dashboard from "@/views/marketplace/dashboard";
import Swap from "@/views/swap/page";
import { useShowMap } from "@/lib/store/minimap-modal-store";

const WalletHub = () => {
  const openModalMusic = useRef<any>();
  const { isShowMap, setIsShowMap } = useShowMap((state) => state);

  const closeModalMusic = useRef<any>();
  const { setDashboardCount, dashboardCount } = useDashboardModal(
    (state) => state
  );
  const { setItem } = useToken0((state) => state);
  const { setItem: setItem1 } = useToken1((state) => state);

  function handleClick() {
    var audio = new Audio("/music/modal-open.mp3");
    audio.play();
    setDashboardCount(1);
  }
  function handleClose() {
    var audio = new Audio("/music/modal-close.mp3");
    audio.play();
    setDashboardCount(0);
  }

  function handleBuck() {
    setDashboardCount(3);

    setItem({
      name: "BUCK",
      image: "/icons/sui.png",
      address: "0x1...1",
    });

    setItem1({
      name: "SUI",
      image: "/assets/swap/sui-token.png",
      address: "0x1...1",
    });
  }

  function handleBut() {
    setDashboardCount(3);

    setItem({
      name: "BUT",
      image: "/assets/swap/but-token.png",
      address: "0x1...1",
    });

    setItem1({
      name: "SUI",
      image: "/assets/swap/sui-token.png",
      address: "0x1...1",
    });
  }

  const [isShowData, setIsShowData] = useState(false);

  useEffect(() => {
    if (dashboardCount === 0) {
      setIsShowMap(true);
    }
    if (dashboardCount === 1 || dashboardCount === 3) {
      setIsShowMap(false);
      setIsShowData(false);
    }
  }, [dashboardCount]);
  return (
    <>
      <audio ref={openModalMusic} src="/music/modal-open.mp3" />
      <audio ref={closeModalMusic} src="/music/modal-close.mp3" />

      <div className="fixed bottom-0 left-0 z-[2]">
        {/* desktop */}
        <div className="hidden lg:flex flex-col gap-2 p-4 items-start justify-start max-w-[178px] ">
          <button
            onClick={handleBuck}
            className="flex items-center gap-1 p-3 border border-white bg-[#007BE3] rounded-xl w-full"
          >
            <Image src={"/icons/sui.png"} alt={"buck"} height={14} width={14} />
            <h1 className={cn(fredoka_moto.className, "ty-title text-white")}>
              41,859.25
            </h1>
          </button>

          <button
            onClick={handleBut}
            className="flex items-center gap-1 p-3 border border-black bg-[#FDE74C] rounded-xl  w-full"
          >
            <TokenIcon />
            <h1
              className={cn(fredoka_moto.className, "ty-title text-neutral-1")}
            >
              65.88
            </h1>
          </button>

          <div className="flex items-center gap-1 p-3 border border-white bg-white rounded-xl w-full">
            <Image
              src={"/assets/avatar.png"}
              alt={"avater"}
              height={14}
              width={14}
            />

            <h1
              className={cn(
                fredoka_moto.className,
                "block ty-title text-neutral-1"
              )}
            >
              @bucket
            </h1>
          </div>
        </div>
        {/* mobile */}

        <div className="lg:hidden flex flex-col gap-2 p-4 items-start justify-start max-w-[178px] ">
          {isShowData && (
            <div className="flex flex-col gap-2 bg-white border border-neutral-1 rounded-xl p-1">
              <button
                onClick={handleBuck}
                className="flex items-center gap-1 p-3 border border-white bg-[#007BE3] rounded-xl w-full"
              >
                <Image
                  src={"/icons/sui.png"}
                  alt={"buck"}
                  height={14}
                  width={14}
                />
                <h1
                  className={cn(fredoka_moto.className, "ty-title text-white")}
                >
                  41,859.25
                </h1>
              </button>

              <button
                onClick={handleBut}
                className="flex items-center gap-1 p-3 border border-black bg-[#FDE74C] rounded-xl  w-full"
              >
                <TokenIcon />
                <h1
                  className={cn(
                    fredoka_moto.className,
                    "ty-title text-neutral-1"
                  )}
                >
                  65.88
                </h1>
              </button>

              <button
                onClick={() => setIsShowData(false)}
                className="p-2 rounded-xl bg-[#99202C]/[0.08] text-red-4"
              >
                Disconnect
              </button>
            </div>
          )}

          <button
            onClick={() => setIsShowData(true)}
            className="flex items-center gap-1 p-3 border-2 border-black bg-white rounded-xl"
          >
            <Image
              src={"/assets/avatar.png"}
              alt={"avater"}
              height={14}
              width={14}
            />
          </button>
        </div>

        <div className="flex flex-row items-center gap-2 lg:hidden fixed bottom-4 right-4">
          <Swap />

          {dashboardCount === 1 ? (
            <button
              onClick={handleClose}
              className={cn(
                "flex items-center gap-1 p-3 border-2 border-black bg-white rounded-xl z-[3]",
                `${dashboardCount === 1 ? "" : "w-full min-w-[147px]"}`
              )}
            >
              <XIcon />
            </button>
          ) : (
            <button
              onClick={handleClick}
              className={cn(
                "flex items-center gap-1 p-3 border-2 border-black bg-white rounded-xl z-[3]",
                `${dashboardCount === 1 ? "" : "w-full lg:min-w-[147px]"}`
              )}
            >
              <DashboardIcon />
              <h1
                className={cn(
                  fredoka_moto.className,
                  "lg:block hidden ty-title text-black"
                )}
              >
                Marketplace
              </h1>
            </button>
          )}
        </div>
      </div>

      <div className="fixed flex lg:hidden flex-col items-end justify-end  gap-2 bottom-[4rem] right-0 px-4 z-[3]">
        <Dashboard />
        <Marketplace onClick={handleClick} />
      </div>
    </>
  );
};

export default WalletHub;
