import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { fredoka } from "@/public/fonts";
import TokenIcon from "./icon/token";

const WalletHub = () => {
  return (
    <div className="fixed bottom-0 left-0 z-[99]">
      <div className="flex flex-col gap-2 p-8 items-center justify-center max-w-[178px] ">
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
