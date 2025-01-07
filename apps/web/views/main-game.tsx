"use client";
import React, { useEffect, useState } from "react";
import Loading from "@/components/loading-first";
import LandCard from "@/components/land-card";
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
            <Marketplace />

            <TransformComponent>
              <div className="grid grid-cols-8 h-[100dvh]  w-[100dvw] px-[5rem]">
                {/* row 1  */}
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full  flex justify-center items-center" />
                <div className=" max-w-[200px] max-h-[200px]  bg-[#1c82f7] flex justify-center items-center">
                  <LandCard
                    className=""
                    image={"/assets/lands/image-1.png"}
                    name={"Konoha"}
                    tag={"@naruto"}
                    sui={31}
                    token={12}
                    percentage={1.4}
                    imageClassName={
                      "max-w-[200px] lg:max-w-[90px] w-full flex justify-center items-center"
                    }
                    type={"A"}
                    variant={"platinum"}
                  />
                </div>
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] flex justify-center items-center"></div>
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center">
                  <LandCard
                    className={""}
                    image={"/assets/lands/image-3.png"}
                    name={"Planet Namek"}
                    tag={"@suiyan"}
                    sui={42}
                    token={30}
                    percentage={1.8}
                    imageClassName={
                      "max-w-[200px] lg:max-w-[90px] w-full flex justify-center items-center"
                    }
                    type={"A"}
                    variant={"platinum"}
                  />
                </div>
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center" />
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full  flex justify-center items-center" />
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full  flex justify-center items-center" />
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full  flex justify-center items-center" />
                {/* row 2  */}
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full  flex justify-center items-center" />
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full  flex justify-center items-center"></div>
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] flex justify-center items-center">
                  <LandCard
                    className="max-w-[220px] flex justify-center items-center"
                    image={"/assets/lands/image-2.png"}
                    name={"Mirai Land"}
                    tag={"@studiomirai"}
                    sui={80}
                    token={47}
                    percentage={1.1}
                    imageClassName={
                      "max-w-[200px] lg:max-w-[90px] w-full flex justify-center items-center"
                    }
                    type={"A"}
                    variant={"platinum"}
                  />
                </div>
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full  flex justify-center items-center" />
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full  flex justify-center items-center" />
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full  flex justify-center items-center" />
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full  flex justify-center items-center" />
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full  flex justify-center items-center" />
                {/* row 3  */}
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full  flex justify-center items-center" />
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full  flex justify-center items-center">
                  <LandCard
                    className={""}
                    image={"/assets/lands/image-4.png"}
                    name={"Pink Panther"}
                    tag={"0x1412…4120"}
                    sui={37}
                    token={22}
                    percentage={1.3}
                    imageClassName={"max-w-[200px] lg:max-w-[90px] w-full"}
                    type={"A"}
                    variant={"platinum"}
                  />{" "}
                </div>
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center" />
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center" />
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center" />
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center" />
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center">
                  <LandCard
                    className=""
                    image={"/assets/lands/image-12.png"}
                    name={"Loki's Hideout"}
                    tag={"@wallstreetbets"}
                    sui={12}
                    token={6}
                    percentage={1.4}
                    imageClassName={"max-w-[200px] lg:max-w-[90px] w-full"}
                    type={"C"}
                    variant={"emerald"}
                  />{" "}
                </div>
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center" />
                {/* row 4 */}
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center">
                  <LandCard
                    className="hover:z-[3]"
                    image={"/assets/lands/image-5.png"}
                    name={"Sacred Land of Japan"}
                    tag={"@pandagovernment"}
                    sui={194}
                    token={39}
                    percentage={2.57}
                    imageClassName={"max-w-[200px] lg:max-w-[90px] w-full"}
                    type={"A"}
                    variant={"platinum"}
                  />{" "}
                </div>
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center" />
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center" />
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center" />
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center" />
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center">
                  <LandCard
                    className=""
                    image={"/assets/lands/image-13.png"}
                    name={"Emerald City of Oz"}
                    tag={"@mystenlabs"}
                    sui={12}
                    token={6}
                    percentage={1.4}
                    imageClassName={"max-w-[200px] lg:max-w-[90px] w-full"}
                    type={"C"}
                    variant={"emerald"}
                  />{" "}
                </div>
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center" />
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center" />
                {/* row 5 */}
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center" />
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center">
                  <LandCard
                    className="hover:z-[2]"
                    image={"/assets/lands/image-6.png"}
                    name={"Cherry Land"}
                    tag={"@wara"}
                    sui={88}
                    token={12}
                    percentage={1.14}
                    imageClassName={"max-w-[200px] lg:max-w-[90px] w-full"}
                    type={"A"}
                    variant={"platinum"}
                  />{" "}
                </div>
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center">
                  <LandCard
                    className="hover:z-[2]"
                    image={"/assets/lands/image-7.png"}
                    name={"AEON land"}
                    tag={"@000"}
                    sui={144}
                    token={53}
                    percentage={2.01}
                    imageClassName={"max-w-[200px] lg:max-w-[90px] w-full"}
                    type={"A"}
                    variant={"platinum"}
                  />{" "}
                </div>
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center" />
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center">
                  <LandCard
                    // className={"absolute top-[54rem] left-[62rem] md:left-[82rem]"}
                    className=""
                    image={"/assets/lands/image-14.png"}
                    name={"Shang Chi"}
                    tag={"@kotaro"}
                    sui={12}
                    token={6}
                    percentage={1.4}
                    imageClassName={"max-w-[200px] lg:max-w-[90px] w-full"}
                    type={"D"}
                    variant={"gold"}
                  />{" "}
                </div>
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center" />
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center" />
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center" />
                {/* row 6 */}
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center" />
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center" />
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center">
                  <LandCard
                    // className={
                    //   "absolute top-[67rem] left-[36rem] md:left-[56rem]"
                    // }
                    className=""
                    image={"/assets/lands/image-8.png"}
                    name={"Panda Express"}
                    tag={"@pandakitchen"}
                    sui={31}
                    token={12}
                    percentage={1.1}
                    imageClassName={"max-w-[200px] lg:max-w-[90px] w-full"}
                    type={"D"}
                    variant={"gold"}
                  />{" "}
                </div>
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center" />
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center" />
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center">
                  <LandCard
                    // className={
                    //   "absolute top-[67rem] left-[74.5rem] md:left-[94.5rem]"
                    // }
                    className=""
                    image={"/assets/lands/image-15.png"}
                    name={"Bambooman"}
                    tag={"@suifrens"}
                    sui={12}
                    token={6}
                    percentage={1.4}
                    imageClassName={"max-w-[200px] lg:max-w-[90px] w-full"}
                    type={"D"}
                    variant={"gold"}
                  />{" "}
                </div>
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center" />
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center" />
                {/* row 7 */}
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center">
                  <LandCard
                    // className={
                    //   "absolute top-[79.7rem] left-[10rem] md:left-[30rem]"
                    // }
                    className=""
                    image={"/assets/lands/image-9.png"}
                    name={"Zen's Tropics V2"}
                    tag={"@zenfrogs"}
                    sui={12}
                    token={6}
                    percentage={1.4}
                    imageClassName={"max-w-[200px] lg:max-w-[90px] w-full"}
                    type={"B"}
                    variant={"diamond"}
                  />{" "}
                </div>
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center">
                  <LandCard
                    // className={
                    //   "absolute top-[79.7rem] left-[23rem] md:left-[43rem]"
                    // }
                    className=""
                    image={"/assets/lands/image-10.png"}
                    name={"Ancient Egypt V2"}
                    tag={"@adeniyi"}
                    sui={12}
                    token={6}
                    percentage={1.4}
                    imageClassName={"max-w-[200px] lg:max-w-[90px] w-full"}
                    type={"B"}
                    variant={"diamond"}
                  />{" "}
                </div>
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center" />
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center" />
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center" />
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center" />
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center" />
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center" />
                {/* row 8  */}
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center" />
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center" />
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center">
                  <LandCard
                    // className={
                    //   "absolute top-[92.3rem] left-[36rem] md:left-[56rem]"
                    // }
                    className=""
                    image={"/assets/lands/image-11.png"}
                    name={"Zen's Tropics"}
                    tag={"@zenfrogs"}
                    sui={12}
                    token={6}
                    percentage={1.4}
                    imageClassName={"max-w-[200px] lg:max-w-[90px] w-full"}
                    type={"D"}
                    variant={"gold"}
                  />{" "}
                </div>
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center" />
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center" />
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center" />
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center" />
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center" />
                {/* row 9  */}
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center" />
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center" />
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center" />
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center" />
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center">
                  <LandCard
                    // className={
                    //   "absolute top-[92.5rem] left-[61.5rem] md:left-[81.5rem]"
                    // }
                    className=""
                    image={"/assets/lands/image-16.png"}
                    name={"Pls dont attacc me"}
                    tag={"@wade"}
                    sui={12}
                    token={6}
                    percentage={1.4}
                    imageClassName={"max-w-[200px] lg:max-w-[90px] w-full"}
                    type={"D"}
                    variant={"gold"}
                  />{" "}
                </div>
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center" />
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center" />
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center" />
                {/* row 10 */}
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center" />
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center" />
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center" />
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center" />
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center" />
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center">
                  <LandCard
                    // className={
                    //   "absolute top-[105.5rem] left-[74.5rem] md:left-[94.5rem]"
                    // }
                    className=""
                    image={"/assets/lands/image-17.png"}
                    name={"KungFu Panda"}
                    tag={"0x95cc…1485"}
                    sui={12}
                    token={6}
                    percentage={1.4}
                    imageClassName={"max-w-[200px] lg:max-w-[90px] w-full"}
                    type={"D"}
                    variant={"gold"}
                  />{" "}
                </div>
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center">
                  <LandCard
                    // className={
                    //   "absolute top-[105.5rem] left-[100rem] md:left-[120rem]"
                    // }
                    className=""
                    image={"/assets/lands/image-18.png"}
                    name={"KungFu Panda 2"}
                    tag={"0x95cc…1485"}
                    sui={12}
                    token={6}
                    percentage={1.4}
                    imageClassName={"max-w-[200px] lg:max-w-[90px] w-full"}
                    type={"D"}
                    variant={"gold"}
                  />{" "}
                </div>
              </div>
            </TransformComponent>
          </>
        )}
      </TransformWrapper>
    </div>
  );
};

export default MainGame;
