import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { fredoka } from "@/public/fonts";
import ArrowUpRight from "./icon/arrow-up-right";
import TokenIcon from "./icon/token";
import PercentageIcon from "./icon/percentage";

interface ILandCard {
  className: string;
  imageClassName: string;
  image: string;
  name: string;
  tag: string;
  sui: string | number;
  token: string | number;
  percentage: string | number;
  handleAttackModal: any;
  handleViewLand: any;
}

const LandCard = ({ ...props }: ILandCard) => {
  return (
    <div className={cn(props.className)}>
      <div className="relative group/image">
        <Image
          src={props.image}
          alt={props.name}
          height={540}
          width={540}
          className="max-w-[220px] md:max-w-[240px]"
          unoptimized
        />

        <div className="absolute top-[120%] left-1/2 transform -translate-x-1/2 -translate-y-[120%] flex justify-center items-center opacity-0 scale-75 group-hover/image:scale-100 group-hover/image:opacity-100 ease-out duration-300">
          <div className="relative bg-neutral-8 min-w-[175px] min-h-[134px] pb-5 p-3 rounded-2xl flex flex-col gap-2 ">
            <div className="flex justify-between items-start">
              <div className="flex flex-col">
                <h1
                  className={cn(fredoka.className, "ty-title text-neutral-1")}
                >
                  {props.name}
                </h1>
                <h1
                  className={cn(
                    fredoka.className,
                    "ty-subtitle text-neutral-3"
                  )}
                >
                  {props.tag}
                </h1>
              </div>
              <div className="pl-4 pb-4 flex items-center gap-2">
                <button onClick={props.handleViewLand}>
                  <ArrowUpRight />
                </button>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-1">
              <div className="flex items-center gap-1 p-1  bg-[#0000000A] rounded-lg">
                <Image
                  src={"/icons/sui.png"}
                  alt={"sui"}
                  height={14}
                  width={14}
                />
                <h1 className={cn(fredoka.className, "ty-title text-blue-1")}>
                  {props.sui}
                </h1>
              </div>
              <div className="flex items-center gap-1 p-1  bg-[#0000000A] rounded-lg">
                <TokenIcon />

                <h1 className={cn(fredoka.className, "ty-title text-blue-1")}>
                  {props.token}
                </h1>
              </div>
              <div className="flex items-center gap-1 p-1  bg-[#0000000A] rounded-lg">
                <PercentageIcon />

                <h1 className={cn(fredoka.className, "ty-title text-blue-1")}>
                  {props.percentage}
                </h1>
              </div>
            </div>

            <button
              onClick={props.handleAttackModal}
              className={cn(
                fredoka.className,
                "ty-title text-white font-bold pt-3 pb-3 button-layout rounded-[8px] w-full text-center"
              )}
            >
              Attack!
            </button>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45 w-6 h-6 bg-neutral-8 border-l border-t border-neutral-8"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandCard;
