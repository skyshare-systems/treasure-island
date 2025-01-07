import ArrowUpRight from "@/components/icon/arrow-up-right";
import LocationIcon from "@/components/icon/location";
import { cn } from "@/lib/utils";
import { fredoka } from "@/public/fonts";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import TokenIcon from "@/components/icon/token";
import PercentageIcon from "@/components/icon/percentage";
import Filter from "@/components/filter";
import { useAttackModal } from "@/lib/store/attack-modal-store";
import { useDashboardModal } from "@/lib/store/dashboard-modal-store";
import { useSelectedLand } from "@/lib/store/selected-land-store";
import { useControls } from "react-zoom-pan-pinch";

const LandList = () => {
  const { zoomToElement } = useControls();
  const [selectedFilter, setSelectedFilter] = useState("Gold");
  const { isShowAttackModal, setIsShowAttackModal } = useAttackModal(
    (state) => state
  );

  const { dashboardCount, setDashboardCount } = useDashboardModal(
    (state) => state
  );

  const platinum = [
    {
      name: "Konoha",
      tag: "@naruto",
      type: "A",
      variant: "platinum",
      image: "/assets/lands/image-1.png",
      sui: 31,
      token: 12,
      percentage: 1.4,
    },

    {
      name: "Mirai Land",
      tag: "studiomirai",
      type: "A",
      variant: "platinum",
      image: "/assets/lands/image-2.png",
      sui: 80,
      token: 47,
      percentage: 1.1,
    },
    {
      name: "Planet Namek",
      tag: "@suiyan",
      type: "A",
      variant: "platinum",
      image: "/assets/lands/image-3.png",
      sui: 42,
      token: 30,
      percentage: 1.8,
    },
    {
      name: "Pink Panther",
      tag: "0x1412…4120",
      type: "A",
      variant: "platinum",
      image: "/assets/lands/image-4.png",
      sui: 37,
      token: 22,
      percentage: 1.3,
    },
    {
      name: "Sacred Land of Japan",
      tag: "@pandagovernment",
      type: "A",
      variant: "platinum",
      image: "/assets/lands/image-5.png",
      sui: 194,
      token: 39,
      percentage: 2.57,
    },
    {
      name: "Cherry Land",
      tag: "@wara",
      type: "A",
      variant: "platinum",
      image: "/assets/lands/image-6.png",
      sui: 88,
      token: 12,
      percentage: 1.14,
    },

    {
      name: "AEON land",
      tag: "@000",
      type: "A",
      variant: "platinum",
      image: "/assets/lands/image-7.png",
      sui: 144,
      token: 53,
      percentage: 2.01,
    },
  ];

  const diamond = [
    {
      name: "Zen's Tropics V2",
      tag: "@zenfrogs",
      type: "B",
      variant: "diamond",

      image: "/assets/lands/image-9.png",
      sui: 12,
      token: 6,
      percentage: 1.4,
    },

    {
      name: "Ancient Egypt V2",
      tag: "@adeniyi",
      type: "B",
      variant: "diamond",
      image: "/assets/lands/image-10.png",
      sui: 12,
      token: 6,
      percentage: 1.4,
    },
  ];

  const emerald = [
    {
      name: "Loki's Hideout",
      tag: "@wallstreetbets",
      type: "C",
      variant: "emerald",
      image: "/assets/lands/image-12.png",
      sui: 12,
      token: 6,
      percentage: 1.4,
    },

    {
      name: "Emerald City of Oz",
      tag: "@mystenlabs",
      type: "C",
      variant: "emerald",
      image: "/assets/lands/image-13.png",
      sui: 12,
      token: 6,
      percentage: 1.4,
    },
  ];

  const gold = [
    {
      name: "Panda Express",
      tag: "@pandakitchen",
      type: "D",
      variant: "gold",
      image: "/assets/lands/image-8.png",
      sui: 31,
      token: 12,
      percentage: 1.1,
    },
    {
      name: "Shang Chi",
      tag: "@kotaro",
      type: "D",
      variant: "gold",
      image: "/assets/lands/image-14.png",
      sui: 12,
      token: 6,
      percentage: 1.4,
    },

    {
      name: "Bambooman",
      tag: "@suifrens",
      type: "D",
      variant: "gold",
      image: "/assets/lands/image-15.png",
      sui: 12,
      token: 6,
      percentage: 1.4,
    },
    {
      name: "Zen's Tropics",
      tag: "@zenfrogs",
      type: "D",
      variant: "gold",
      image: "/assets/lands/image-11.png",
      sui: 12,
      token: 6,
      percentage: 1.4,
    },
    {
      name: "Pls dont attacc me",
      tag: "@wade",
      type: "D",
      variant: "gold",
      image: "/assets/lands/image-16.png",
      sui: 12,
      token: 6,
      percentage: 1.4,
    },
    {
      name: "KungFu Panda",
      tag: "0x95cc…1485",
      type: "D",
      variant: "gold",
      image: "/assets/lands/image-17.png",
      sui: 12,
      token: 6,
      percentage: 1.4,
    },
    {
      name: "KungFu Panda 2",
      tag: "0x95cc…1485",
      type: "D",
      variant: "gold",
      image: "/assets/lands/image-18.png",
      sui: 12,
      token: 6,
      percentage: 1.4,
    },
  ];

  const filter = [
    {
      name: "Gold",
      quantity: gold.length,
    },
    {
      name: "Platinum",
      quantity: platinum.length,
    },
    {
      name: "Diamond",
      quantity: diamond.length,
    },
    {
      name: "Emerald",
      quantity: emerald.length,
    },
  ];
  const { setItem } = useSelectedLand((state) => state);

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

  return (
    <>
      {dashboardCount === 1 && (
        <div className="flex flex-col gap-2 items-start justify-start rounded-3xl border-4 border-cyan-1 bg-neutral-7 min-h-[400px] max-h-[400px] md:min-h-[581px] md:max-h-[581px] max-w-[588px] md:min-w-[588px] p-2">
          <Filter
            filterData={filter}
            setSelectedFilter={setSelectedFilter}
            selectedFilter={selectedFilter}
          />

          <div className="flex flex-wrap items-start justify-start  gap-2 overflow-y-scroll max-h-[510px]">
            {/* Tropical Forest */}
            {selectedFilter === "Gold" && (
              <>
                {gold.map((data, index) => {
                  return (
                    <div
                      key={index}
                      className="w-full min-h-[254px] sm:max-w-[274px] bg-neutral-8 pb-5 p-3 flex flex-col gap-2 rounded-2xl"
                    >
                      <div className="flex justify-between items-start">
                        <div className="flex flex-col">
                          <h1
                            className={cn(
                              fredoka.className,
                              "ty-title text-neutral-1"
                            )}
                          >
                            {data.name}
                          </h1>
                          <h1
                            className={cn(
                              fredoka.className,
                              "ty-subtitle text-neutral-3"
                            )}
                          >
                            {data.tag}
                          </h1>
                        </div>
                        <div className="p-4 flex items-center gap-2">
                          <button onClick={() => zoomToElement(data.name)}>
                            <LocationIcon />
                          </button>
                          <button
                            onClick={() =>
                              handleViewData(
                                data.name,
                                data.tag,
                                data.type,
                                data.variant,
                                data.image,
                                data.sui,
                                data.token,
                                data.percentage
                              )
                            }
                          >
                            <ArrowUpRight />
                          </button>
                        </div>
                      </div>

                      <div className="bg-[#489BFA] w-full  min-h-[112px] rounded-xl flex justify-center items-center relative">
                        <Image
                          src={data.image}
                          alt={data.name}
                          height={96}
                          width={105.781}
                          unoptimized
                          className="w-full max-w-[105.781px]"
                        />
                      </div>

                      <div className="flex flex-wrap items-center gap-1">
                        <div className="flex items-center gap-1 p-1  bg-[#0000000A] rounded-lg relative group/sui">
                          <Image
                            src={"/icons/sui.png"}
                            alt={"sui"}
                            height={14}
                            width={14}
                          />
                          <h1
                            className={cn(
                              fredoka.className,
                              "ty-title text-blue-1"
                            )}
                          >
                            {data.sui}
                          </h1>

                          <div className="group-hover/sui:block hidden absolute top-5 left-5 bg-white rounded-lg p-2 max-w-[248px] min-w-[248px]">
                            <div className="flex flex-col gap-1 items-start bg-[#0000000A] p-2 rounded-lg">
                              <h1 className="ty-subtitle text-black">
                                Island Price
                              </h1>
                              <p className="text-neutral-1 ty-subtext">
                                Value of the island in $BUCK if you want a 100%
                                winrate in attacking this island.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 p-1  bg-[#0000000A] rounded-lg group/token relative">
                          <TokenIcon />

                          <h1
                            className={cn(
                              fredoka.className,
                              "ty-title text-blue-1"
                            )}
                          >
                            {data.token}
                          </h1>

                          <div className="group-hover/token:block hidden absolute top-5 left-5 bg-white rounded-lg p-2 max-w-[248px] min-w-[248px]">
                            <div className="flex flex-col gap-1 items-start bg-[#0000000A] p-2 rounded-lg">
                              <h1 className="ty-subtitle text-black">
                                BUT Rewards
                              </h1>
                              <p className="text-neutral-1 ty-subtext">
                                Value of total BUT rewards this island is
                                currently generating.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 p-1  bg-[#0000000A] rounded-lg group/apr relative">
                          <PercentageIcon />

                          <h1
                            className={cn(
                              fredoka.className,
                              "ty-title text-blue-1"
                            )}
                          >
                            {data.percentage}
                          </h1>
                          <div className="group-hover/apr:block hidden absolute top-5 left-5 bg-white rounded-lg p-2 max-w-[248px] min-w-[248px]">
                            <div className="flex flex-col gap-1 items-start bg-[#0000000A] p-2 rounded-lg">
                              <h1 className="ty-subtitle text-black">APR</h1>
                              <p className="text-neutral-1 ty-subtext">
                                Annual percentage return of BUT being generated
                                on this island
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={() =>
                          handleAttack(
                            data.name,
                            data.tag,
                            data.type,
                            data.variant,
                            data.image,
                            data.sui,
                            data.token,
                            data.percentage
                          )
                        }
                        className={cn(
                          fredoka.className,
                          "ty-title text-white font-bold pt-3 pb-3 button-layout rounded-[8px] w-full text-center"
                        )}
                      >
                        Attack!
                      </button>
                    </div>
                  );
                })}
              </>
            )}

            {selectedFilter === "Platinum" && (
              <>
                {platinum.map((data, index) => {
                  return (
                    <div
                      key={index}
                      className="w-full min-h-[254px] sm:max-w-[274px] bg-neutral-8 pb-5 p-3 flex flex-col gap-2 rounded-2xl"
                    >
                      <div className="flex justify-between items-start">
                        <div className="flex flex-col">
                          <h1
                            className={cn(
                              fredoka.className,
                              "ty-title text-neutral-1"
                            )}
                          >
                            {data.name}
                          </h1>
                          <h1
                            className={cn(
                              fredoka.className,
                              "ty-subtitle text-neutral-3"
                            )}
                          >
                            {data.tag}
                          </h1>
                        </div>
                        <div className="p-4 flex items-center gap-2">
                          <button onClick={() => zoomToElement(data.name)}>
                            <LocationIcon />
                          </button>
                          <button
                            onClick={() =>
                              handleViewData(
                                data.name,
                                data.tag,
                                data.type,
                                data.variant,
                                data.image,
                                data.sui,
                                data.token,
                                data.percentage
                              )
                            }
                          >
                            <ArrowUpRight />
                          </button>
                        </div>
                      </div>

                      <div className="bg-[#489BFA] w-full  min-h-[112px] rounded-xl flex justify-center items-center relative">
                        <Image
                          src={data.image}
                          alt={data.name}
                          height={96}
                          width={105.781}
                          unoptimized
                          className="w-full max-w-[105.781px]"
                        />
                      </div>

                      <div className="flex flex-wrap items-center gap-1">
                        <div className="flex items-center gap-1 p-1  bg-[#0000000A] rounded-lg">
                          <Image
                            src={"/icons/sui.png"}
                            alt={"sui"}
                            height={14}
                            width={14}
                          />
                          <h1
                            className={cn(
                              fredoka.className,
                              "ty-title text-blue-1"
                            )}
                          >
                            {data.sui}
                          </h1>
                        </div>
                        <div className="flex items-center gap-1 p-1  bg-[#0000000A] rounded-lg">
                          <TokenIcon />

                          <h1
                            className={cn(
                              fredoka.className,
                              "ty-title text-blue-1"
                            )}
                          >
                            {data.token}
                          </h1>
                        </div>
                        <div className="flex items-center gap-1 p-1  bg-[#0000000A] rounded-lg">
                          <PercentageIcon />

                          <h1
                            className={cn(
                              fredoka.className,
                              "ty-title text-blue-1"
                            )}
                          >
                            {data.percentage}
                          </h1>
                        </div>
                      </div>

                      <button
                        onClick={() =>
                          handleAttack(
                            data.name,
                            data.tag,
                            data.type,
                            data.variant,
                            data.image,
                            data.sui,
                            data.token,
                            data.percentage
                          )
                        }
                        className={cn(
                          fredoka.className,
                          "ty-title text-white font-bold pt-3 pb-3 button-layout rounded-[8px] w-full text-center"
                        )}
                      >
                        Attack!
                      </button>
                    </div>
                  );
                })}
              </>
            )}

            {selectedFilter === "Diamond" && (
              <>
                {diamond.map((data, index) => {
                  return (
                    <div
                      key={index}
                      className="w-full min-h-[254px] sm:max-w-[274px] bg-neutral-8 pb-5 p-3 flex flex-col gap-2 rounded-2xl"
                    >
                      <div className="flex justify-between items-start">
                        <div className="flex flex-col">
                          <h1
                            className={cn(
                              fredoka.className,
                              "ty-title text-neutral-1"
                            )}
                          >
                            {data.name}
                          </h1>
                          <h1
                            className={cn(
                              fredoka.className,
                              "ty-subtitle text-neutral-3"
                            )}
                          >
                            {data.tag}
                          </h1>
                        </div>
                        <div className="p-4 flex items-center gap-2">
                          <button onClick={() => zoomToElement(data.name)}>
                            <LocationIcon />
                          </button>
                          <button
                            onClick={() =>
                              handleViewData(
                                data.name,
                                data.tag,
                                data.type,
                                data.variant,
                                data.image,
                                data.sui,
                                data.token,
                                data.percentage
                              )
                            }
                          >
                            <ArrowUpRight />
                          </button>
                        </div>
                      </div>

                      <div className="bg-[#489BFA] w-full  min-h-[112px] rounded-xl flex justify-center items-center relative">
                        <Image
                          src={data.image}
                          alt={data.name}
                          height={96}
                          width={105.781}
                          unoptimized
                          className="w-full max-w-[105.781px]"
                        />
                      </div>

                      <div className="flex flex-wrap items-center gap-1">
                        <div className="flex items-center gap-1 p-1  bg-[#0000000A] rounded-lg">
                          <Image
                            src={"/icons/sui.png"}
                            alt={"sui"}
                            height={14}
                            width={14}
                          />
                          <h1
                            className={cn(
                              fredoka.className,
                              "ty-title text-blue-1"
                            )}
                          >
                            {data.sui}
                          </h1>
                        </div>
                        <div className="flex items-center gap-1 p-1  bg-[#0000000A] rounded-lg">
                          <TokenIcon />

                          <h1
                            className={cn(
                              fredoka.className,
                              "ty-title text-blue-1"
                            )}
                          >
                            {data.token}
                          </h1>
                        </div>
                        <div className="flex items-center gap-1 p-1  bg-[#0000000A] rounded-lg">
                          <PercentageIcon />

                          <h1
                            className={cn(
                              fredoka.className,
                              "ty-title text-blue-1"
                            )}
                          >
                            {data.percentage}
                          </h1>
                        </div>
                      </div>

                      <button
                        onClick={() =>
                          handleAttack(
                            data.name,
                            data.tag,
                            data.type,
                            data.variant,
                            data.image,
                            data.sui,
                            data.token,
                            data.percentage
                          )
                        }
                        className={cn(
                          fredoka.className,
                          "ty-title text-white font-bold pt-3 pb-3 button-layout rounded-[8px] w-full text-center"
                        )}
                      >
                        Attack!
                      </button>
                    </div>
                  );
                })}
              </>
            )}

            {selectedFilter === "Emerald" && (
              <>
                {emerald.map((data, index) => {
                  return (
                    <div
                      key={index}
                      className="w-full min-h-[254px] sm:max-w-[274px] bg-neutral-8 pb-5 p-3 flex flex-col gap-2 rounded-2xl"
                    >
                      <div className="flex justify-between items-start">
                        <div className="flex flex-col">
                          <h1
                            className={cn(
                              fredoka.className,
                              "ty-title text-neutral-1"
                            )}
                          >
                            {data.name}
                          </h1>
                          <h1
                            className={cn(
                              fredoka.className,
                              "ty-subtitle text-neutral-3"
                            )}
                          >
                            {data.tag}
                          </h1>
                        </div>
                        <div className="p-4 flex items-center gap-2">
                          <button onClick={() => zoomToElement(data.name)}>
                            <LocationIcon />
                          </button>
                          <button
                            onClick={() =>
                              handleViewData(
                                data.name,
                                data.tag,
                                data.type,
                                data.variant,
                                data.image,
                                data.sui,
                                data.token,
                                data.percentage
                              )
                            }
                          >
                            <ArrowUpRight />
                          </button>
                        </div>
                      </div>

                      <div className="bg-[#489BFA] w-full  min-h-[112px] rounded-xl flex justify-center items-center relative">
                        <Image
                          src={data.image}
                          alt={data.name}
                          height={96}
                          width={105.781}
                          unoptimized
                          className="w-full max-w-[105.781px]"
                        />
                      </div>

                      <div className="flex flex-wrap items-center gap-1">
                        <div className="flex items-center gap-1 p-1  bg-[#0000000A] rounded-lg">
                          <Image
                            src={"/icons/sui.png"}
                            alt={"sui"}
                            height={14}
                            width={14}
                          />
                          <h1
                            className={cn(
                              fredoka.className,
                              "ty-title text-blue-1"
                            )}
                          >
                            {data.sui}
                          </h1>
                        </div>
                        <div className="flex items-center gap-1 p-1  bg-[#0000000A] rounded-lg">
                          <TokenIcon />

                          <h1
                            className={cn(
                              fredoka.className,
                              "ty-title text-blue-1"
                            )}
                          >
                            {data.token}
                          </h1>
                        </div>
                        <div className="flex items-center gap-1 p-1  bg-[#0000000A] rounded-lg">
                          <PercentageIcon />

                          <h1
                            className={cn(
                              fredoka.className,
                              "ty-title text-blue-1"
                            )}
                          >
                            {data.percentage}
                          </h1>
                        </div>
                      </div>

                      <button
                        onClick={() =>
                          handleAttack(
                            data.name,
                            data.tag,
                            data.type,
                            data.variant,
                            data.image,
                            data.sui,
                            data.token,
                            data.percentage
                          )
                        }
                        className={cn(
                          fredoka.className,
                          "ty-title text-white font-bold pt-3 pb-3 button-layout rounded-[8px] w-full text-center"
                        )}
                      >
                        Attack!
                      </button>
                    </div>
                  );
                })}
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default LandList;
