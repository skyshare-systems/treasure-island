import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { fredoka } from "@/public/fonts";
import ArrowUpRight from "./icon/arrow-up-right";
import TokenIcon from "./icon/token";
import PercentageIcon from "./icon/percentage";
import { useAttackModal } from "@/lib/store/attack-modal-store";
import { useSelectedLand } from "@/lib/store/selected-land-store";
import { useDashboardModal } from "@/lib/store/dashboard-modal-store";

interface ILandCard {
  className: string;
  imageClassName: string;
  image: string;
  name: string;
  type: string;
  variant: string;
  tag: string;
  sui: string | number;
  token: string | number;
  percentage: string | number;
  allign: string;
  dialogPosition: string;
}

const LandCard = ({ ...props }: ILandCard) => {
  const { setIsShowAttackModal } = useAttackModal((state) => state);

  const { setDashboardCount } = useDashboardModal((state) => state);
  const { setItem } = useSelectedLand((state) => state);

  function handleAttack(
    name,
    tag,
    type,
    variant,
    image,
    sui,
    token,
    percentage
  ) {
    setItem({
      name,
      tag,
      type,
      variant,
      image,
      sui,
      token,
      percentage,
    });

    setIsShowAttackModal(true);
  }

  function handleViewData(
    name,
    tag,
    type,
    variant,
    image,
    sui,
    token,
    percentage
  ) {
    setItem({
      name,
      tag,
      type,
      variant,
      image,
      sui,
      token,
      percentage,
    });

    setDashboardCount(2);
  }
  return (
    <div
      id={props.name}
      className={cn(
        props.className,
        "relative group/image flex flex-col items-center max-w-[200px] hover:brightness-125 cursor-pointer"
      )}
    >
      <Image
        src={props.image}
        alt={props.name}
        height={70}
        width={70}
        className={cn(props.imageClassName)}
        unoptimized
      />

      <div
        className={cn(
          // "absolute top-[60%]",
          props.dialogPosition,
          "absolute flex justify-center items-center opacity-0 scale-75 group-hover/image:scale-100 group-hover/image:opacity-100 ease-out duration-300 max-w-[200px]"
        )}
      >
        <div className="relative bg-neutral-8 min-w-[150px]  pb-4 p-3 rounded-2xl flex flex-col gap-1 ">
          <div className="flex justify-between items-start">
            <div className="flex flex-col">
              <h1
                className={cn(
                  fredoka.className,
                  "text-[10px] font-bold text-neutral-1"
                )}
              >
                {props.name}
              </h1>
              <h1
                className={cn(
                  fredoka.className,
                  "text-[8px] font-bold text-neutral-3"
                )}
              >
                {props.tag}
              </h1>
            </div>
            <div className="pl-4 pb-4 flex items-center gap-2">
              <button
                onClick={() =>
                  handleViewData(
                    props.name,
                    props.tag,
                    props.type,
                    props.variant,
                    props.image,
                    props.sui,
                    props.token,
                    props.percentage
                  )
                }
              >
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
                unoptimized
              />
              <h1
                className={cn(
                  fredoka.className,
                  "text-[10px] font-bold text-blue-1"
                )}
              >
                {props.sui}
              </h1>
            </div>
            <div className="flex items-center gap-1 p-1  bg-[#0000000A] rounded-lg">
              <TokenIcon />

              <h1
                className={cn(
                  fredoka.className,
                  "text-[10px] font-bold text-blue-1"
                )}
              >
                {props.token}
              </h1>
            </div>
            <div className="flex items-center gap-1 p-1  bg-[#0000000A] rounded-lg">
              <PercentageIcon />

              <h1
                className={cn(
                  fredoka.className,
                  "text-[10px] font-bold text-blue-1"
                )}
              >
                {props.percentage}
              </h1>
            </div>
          </div>

          <button
            onClick={() =>
              handleAttack(
                props.name,
                props.tag,
                props.type,
                props.variant,
                props.image,
                props.sui,
                props.token,
                props.percentage
              )
            }
            className={cn(
              fredoka.className,
              "text-[10px] font-bold text-white pt-[5px] pb-[5px] button-layout rounded-[8px] w-full text-center"
            )}
          >
            Attack!
          </button>

          {props.allign === "top" && (
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45 w-3 h-3 bg-neutral-8 border-l border-t border-neutral-8"></div>
          )}

          {props.allign === "left" && (
            <div className="absolute top-1/2 -left-[3%] transform translate-x-[3%] -translate-y-1/2 rotate-45 w-3 h-3 bg-neutral-8 border-l border-t border-neutral-8"></div>
          )}

          {props.allign === "left-top" && (
            <div className="absolute top-[20%] -left-[3%] transform translate-x-[3%] -translate-y-[20%] rotate-45 w-3 h-3 bg-neutral-8 border-l border-t border-neutral-8"></div>
          )}

          {props.allign === "right-top" && (
            <div className="absolute top-[20%] -right-[3%] transform translate-x-[3%] -translate-y-[20%] rotate-45 w-3 h-3 bg-neutral-8 border-l border-t border-neutral-8"></div>
          )}

          {props.allign === "right" && (
            <div className="absolute top-1/2 -right-[3%] transform translate-x-[3%] -translate-y-1/2 rotate-45 w-3 h-3 bg-neutral-8 border-l border-t border-neutral-8"></div>
          )}

          {props.allign === "bottom" && (
            <div className="absolute -bottom-[0.8rem] left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45 w-3 h-3 bg-neutral-8 border-l border-t border-neutral-8"></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LandCard;
