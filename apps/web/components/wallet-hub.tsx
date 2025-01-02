"use client";
import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { fredoka } from "@/public/fonts";
import TokenIcon from "./icon/token";
import { useControls } from "react-zoom-pan-pinch";
import ZoomIn from "./icon/zoom-in";
import ZoomOut from "./icon/zoom-out";

const WalletHub = () => {
  const { zoomIn, zoomOut, resetTransform, centerView } = useControls();
  function handleFunction() {
    centerView();
    resetTransform();
  }
  return (
    <div className="fixed bottom-0 left-0 z-[2]">
      <div className="flex flex-col gap-2 p-4 items-start justify-start max-w-[178px] ">
        <button
          onClick={() => handleFunction()}
          className="flex justify-center items-center gap-1 p-2 border bg-white rounded-2xl h-10 w-h-10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.75 12C1.75 6.33908 6.3391 1.75 11.9999 1.75C15.3829 1.75 18.3817 3.3888 20.2479 5.91374L20.3082 5.51032C20.388 4.97712 20.8849 4.60955 21.4181 4.68932C21.9513 4.76909 22.3189 5.266 22.2391 5.7992L21.7754 8.8986C21.7353 9.16656 21.5857 9.4058 21.3623 9.55909C21.1389 9.71238 20.8618 9.76593 20.5974 9.70693L17.6444 9.048C17.1182 8.93058 16.7869 8.40883 16.9043 7.88264C17.0217 7.35644 17.5434 7.02506 18.0696 7.14248L18.8508 7.31678C17.3552 5.13329 14.8439 3.70238 11.9999 3.70238C7.41736 3.70238 3.70237 7.41735 3.70237 12C3.70237 16.5826 7.41736 20.2976 11.9999 20.2976C16.5826 20.2976 20.2975 16.5826 20.2975 12C20.2975 11.4609 20.7346 11.0238 21.2737 11.0238C21.8128 11.0238 22.2499 11.4609 22.2499 12C22.2499 17.6609 17.6608 22.25 11.9999 22.25C6.3391 22.25 1.75 17.6609 1.75 12Z"
              fill="#141B34"
            />
          </svg>
        </button>
        <button
          onClick={() => zoomIn()}
          className="flex justify-center items-center gap-1 p-2 border bg-white rounded-2xl h-10 w-h-10"
        >
          <ZoomIn />
        </button>
        <button
          onClick={() => zoomOut()}
          className="flex justify-center items-center gap-1 p-2 border bg-white rounded-2xl h-10 w-h-10"
        >
          <ZoomOut />
        </button>
        <div className="flex items-center gap-1 p-3 border border-white bg-[#007BE3] rounded-xl w-full">
          <Image src={"/icons/sui.png"} alt={"sui"} height={14} width={14} />
          <h1 className={cn(fredoka.className, "ty-title text-white")}>
            41,859.25
          </h1>
        </div>

        <div className="flex items-center gap-1 p-3 border border-black bg-[#FDE74C] rounded-xl  w-full">
          <TokenIcon />
          <h1 className={cn(fredoka.className, "ty-title text-neutral-1")}>
            65.88
          </h1>
        </div>

        <div className="flex items-center gap-1 p-3 border border-white bg-white rounded-xl w-full">
          <Image
            src={"/assets/avatar.png"}
            alt={"avater"}
            height={14}
            width={14}
          />

          <h1 className={cn(fredoka.className, "ty-title text-neutral-1")}>
            @bucket
          </h1>
        </div>
      </div>
    </div>
  );
};

export default WalletHub;
