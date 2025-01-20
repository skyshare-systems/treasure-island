"use client";
import React, { useEffect, useState } from "react";
import Loading from "@/components/loading-first";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import WalletHub from "@/components/wallet-hub";
import Marketplace from "./marketplace/page";
import { fredoka } from "@/public/fonts";
import { cn } from "@/lib/utils";
import { useAttackModal } from "@/lib/store/attack-modal-store";
import { useDashboardModal } from "@/lib/store/dashboard-modal-store";
import { useSelectedLand } from "@/lib/store/selected-land-store";
import ArrowUpRight from "@/components/icon/arrow-up-right";
import Image from "next/image";
import TokenIcon from "@/components/icon/token";
import PercentageIcon from "@/components/icon/percentage";
import MinimapGame from "./minimap-game";
import { items } from "@/components/items";

const MainGame = () => {
  const [loading, setLoading] = useState(false);
  const { setIsShowAttackModal } = useAttackModal((state) => state);
  const { dashboardCount, setDashboardCount } = useDashboardModal(
    (state) => state
  );
  const { setItem, item } = useSelectedLand((state) => state);

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

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const gridContainerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)", // 13 columns
    gridTemplateRows: "repeat(10, 1fr)", // 12 rows
    gap: "2px", // Space between grid items
  };

  return (
    <div className="relative flex justify-center items-center">
      {loading && <Loading />}

      {dashboardCount === 4 && (
        <div
          className={cn(
            "fixed bottom-[4.3rem] lg:bottom-4 right-4 lg:left-1/2 lg:transform lg:-translate-x-1/2 flex justify-center items-center ease-out duration-300 md:max-w-[214px] z-[9999]"
          )}
        >
          <div className="relative bg-neutral-8 md:min-w-[214px]  pb-4 p-3 rounded-2xl flex flex-col gap-2 ">
            <div className="flex justify-between items-start">
              <div className="flex flex-col">
                <h1
                  className={cn(fredoka.className, "ty-title text-neutral-1")}
                >
                  {item.name}
                </h1>
                <h1
                  className={cn(
                    fredoka.className,
                    "ty-subtitle text-neutral-3"
                  )}
                >
                  {item.tag}
                </h1>
              </div>
              <div className="pl-4 pb-4 flex items-center gap-2">
                <button
                  onClick={() =>
                    handleViewData(
                      item.name,
                      item.tag,
                      item.type,
                      item.variant,
                      item.image,
                      item.sui,
                      item.token,
                      item.percentage
                    )
                  }
                >
                  <ArrowUpRight />
                </button>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center gap-1 w-full">
              <div className="flex items-center gap-1 p-1  bg-[#0000000A] rounded-lg md:grow w-full md:w-auto relative group/sui">
                <Image
                  src={"/icons/sui.png"}
                  alt={"sui"}
                  height={14}
                  width={14}
                  unoptimized
                />
                <h1 className={cn(fredoka.className, "ty-title text-blue-1")}>
                  {item.sui}
                </h1>

                <div className="group-hover/sui:block hidden absolute top-2 left-2 bg-white rounded-lg p-2 max-w-[248px] min-w-[248px]">
                  <div className="flex flex-col gap-1 items-start bg-[#0000000A] p-2 rounded-lg">
                    <h1 className="ty-subtitle text-black">Island Price</h1>
                    <p className="text-neutral-1 ty-subtext">
                      Value of the island in $BUCK if you want a 100% winrate in
                      attacking this island.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1 p-1  bg-[#0000000A] rounded-lg md:grow w-full md:w-auto group/token relative">
                <TokenIcon />

                <h1 className={cn(fredoka.className, "ty-title text-blue-1")}>
                  {item.token}
                </h1>

                <div className="group-hover/token:block hidden absolute top-2 left-2 bg-white rounded-lg p-2 max-w-[248px] min-w-[248px]">
                  <div className="flex flex-col gap-1 items-start bg-[#0000000A] p-2 rounded-lg">
                    <h1 className="ty-subtitle text-black">BUT Rewards</h1>
                    <p className="text-neutral-1 ty-subtext">
                      Value of total BUT rewards this island is currently
                      generating.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1 p-1  bg-[#0000000A] rounded-lg md:grow w-full md:w-auto group/apr relative">
                <PercentageIcon />

                <h1 className={cn(fredoka.className, "ty-title text-blue-1")}>
                  {item.percentage}
                </h1>

                <div className="group-hover/apr:block hidden absolute top-2 left-2 bg-white rounded-lg p-2 max-w-[248px] min-w-[248px]">
                  <div className="flex flex-col gap-1 items-start bg-[#0000000A] p-2 rounded-lg">
                    <h1 className="ty-subtitle text-black">APR</h1>
                    <p className="text-neutral-1 ty-subtext">
                      Annual percentage return of BUT being generated on this
                      island
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={() =>
                handleAttack(
                  item.name,
                  item.tag,
                  item.type,
                  item.variant,
                  item.image,
                  item.sui,
                  item.token,
                  item.percentage
                )
              }
              className={cn(
                fredoka.className,
                "ty-title text-white pt-[5px] pb-[5px] button-layout rounded-[8px] w-full text-center"
              )}
            >
              Attack!
            </button>
          </div>
        </div>
      )}

      <TransformWrapper
        initialScale={2}
        initialPositionX={0}
        initialPositionY={0}
        minScale={1.5}
      >
        {({ zoomIn, zoomOut, resetTransform, centerView, ...rest }) => (
          <>
            <WalletHub />
            <MinimapGame />
            <Marketplace />
            <div className="border-4 border-[#171921] rounded-2xl bg-[#1c82f7] relative flex justify-center  max-w-[1440px] w-full">
              <TransformComponent>
                <div className="rounded-2xl relative h-[99dvh] w-[99dvw] lg:w-[70dvw] lg:mx-[5rem]  max-w-[1440px]">
                  <div style={gridContainerStyle}>
                    {items.map((item) => (
                      <div
                        id={item.label}
                        key={item.id}
                        className={cn(
                          `${item.color !== "#f9f9f9" ? "cursor-pointer ease-out duration-300 hover:scale-125 hover:brightness-150" : ""}`,
                          "h-[35px] w-[35px] sm:h-[40px] sm:w-[40px] md:h-[70px] md:w-[70px] lg:h-[85px] lg:w-[85px] relative"
                        )}
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: "4px",
                        }}
                      >
                        {item.land}
                      </div>
                    ))}
                  </div>
                </div>
              </TransformComponent>
            </div>
          </>
        )}
      </TransformWrapper>
    </div>
  );
};

export default MainGame;
