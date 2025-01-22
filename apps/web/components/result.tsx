import { cn } from "@/lib/utils";
import { fredoka } from "@/public/fonts";
import React, { useEffect } from "react";
import Image from "next/image";
import { useSelectedLand } from "@/lib/store/selected-land-store";
import useMusic from "@/hooks/useMusic";

interface IResultModal {
  result: string;
  handleShowResult: any;
  attackPercentage: any;
}

const Result = ({
  result,
  handleShowResult,
  attackPercentage,
}: IResultModal) => {
  const { item } = useSelectedLand((state) => state);

  const computeAttackPrice = (islandPrice, attackPercentage) => {
    if (attackPercentage < 1 || attackPercentage > 100) {
      throw new Error("Attack percentage must be between 1 and 100.");
    }

    // Linear interpolation of the multiplier based on attack percentage
    const minMultiplier = 1.624; // Multiplier for 1% probability
    const maxMultiplier = 1.03; // Multiplier for 100% probability
    const multiplier =
      minMultiplier -
      ((minMultiplier - maxMultiplier) / 99) * (attackPercentage - 1);

    // Theoretical cost as a percentage of the island price
    const theoreticalCost = (attackPercentage / 100) * islandPrice;

    // Total cost including the multiplier
    const attackPrice = theoreticalCost * multiplier;

    return attackPrice;
  };

  return (
    <div className="fixed top-0 left-0 backdrop-blur-lg h-full w-full flex justify-center items-center z-[999999] overflow-hidden">
      <div className="flex flex-col justify-center items-center gap-4">
        {result === "You Lose!" && (
          <>
            <Image
              src={"/assets/dashboard/you-lost.png"}
              alt={"you-lose"}
              height={96}
              width={342}
            />

            <Image
              src={"/assets/dashboard/lost-panda.png"}
              alt={"lost panda"}
              height={414}
              width={414}
              className="w-full max-w-[414px]"
            />
            <button
              onClick={handleShowResult}
              className="attack-button py-3 px-8"
            >
              <h1 className={cn(fredoka.className, "ty-h4 attack-text")}>
                View Map
              </h1>
            </button>
          </>
        )}

        {result === "You Win!" && (
          <>
            <Image
              src={"/assets/dashboard/you-win.png"}
              alt={"you-win"}
              height={96}
              width={342}
            />

            <Image
              src={item.image}
              alt={item.name}
              height={540}
              width={540}
              className="w-full max-w-[540px]"
            />

            <div className="py-4 px-8 rounded-3xl border-4 border-cyan-1 bg-neutral-8 min-w-[488px] flex flex-wrap items-end justify-center gap-2">
              <div className="flex flex-col justify-center items-center gap-1 min-w-[131px]">
                <div className="flex items-center gap-1">
                  <Image
                    src={"/icons/sui.png"}
                    alt={"sui"}
                    height={14}
                    width={14}
                  />

                  <h1 className={cn(fredoka.className, "ty-h6 text-black")}>
                    {(
                      Number(item.sui) +
                      Number(computeAttackPrice(item?.sui, attackPercentage))
                    ).toFixed(2)}
                  </h1>
                </div>
                <h1
                  className={cn(
                    fredoka.className,
                    "ty-descriptions text-neutral-1"
                  )}
                >
                  New Island Price
                </h1>
              </div>

              <div className="flex flex-col justify-center items-center gap-1 min-w-[131px]">
                <div className="flex items-center gap-1">
                  <h1 className={cn(fredoka.className, " apr ty-h4")}>
                    <span className="stroke-letter">{item.percentage}</span>
                  </h1>
                </div>
                <h1
                  className={cn(
                    fredoka.className,
                    "ty-descriptions text-black"
                  )}
                >
                  APR
                </h1>
              </div>

              <div className="flex flex-col justify-center items-center gap-1 min-w-[131px]">
                <div className="flex items-center gap-1">
                  <Image
                    src={"/icons/sui.png"}
                    alt={"sui"}
                    height={14}
                    width={14}
                  />

                  <h1 className={cn(fredoka.className, "ty-h6 text-black")}>
                    {computeAttackPrice(item?.sui, attackPercentage).toFixed(2)}
                  </h1>
                </div>
                <h1
                  className={cn(
                    fredoka.className,
                    "ty-descriptions text-neutral-1"
                  )}
                >
                  Attack Price
                </h1>
              </div>
            </div>

            <button
              onClick={handleShowResult}
              className="view-my-island py-4 px-6"
            >
              <h1 className={cn(fredoka.className, "ty-title ")}>
                View My Island
              </h1>
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Result;
