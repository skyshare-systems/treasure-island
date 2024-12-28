import ArrowUpRight from "@/components/icon/arrow-up-right";
import LocationIcon from "@/components/icon/location";
import { cn } from "@/lib/utils";
import { fredoka } from "@/public/fonts";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import TokenIcon from "@/components/icon/token";
import PercentageIcon from "@/components/icon/percentage";
import Filter from "@/components/filter";
import AttackModal from "./attack-modal";
import { useAttackModal } from "@/lib/store/attack-modal-store";
import { useDashboardModal } from "@/lib/store/dashboard-modal-store";
import ArrowLeft from "@/components/icon/arrow-left";
import { useSelectedLand } from "@/lib/store/selected-land-store";

const LandList = () => {
  const [selectedFilter, setSelectedFilter] = useState("Tropical Forest");
  const { isShowAttackModal, setIsShowAttackModal } = useAttackModal(
    (state) => state
  );

  const { dashboardCount, setDashboardCount } = useDashboardModal(
    (state) => state
  );

  const tropical_forest = [
    {
      name: "Konoha",
      tag: "@naruto",
      type: "A",
      image: "/assets/lands/image-1.png",
      sui: 31,
      token: 12,
      percentage: 1.4,
    },

    {
      name: "Mirai Land",
      tag: "studiomirai",
      type: "A",
      image: "/assets/lands/image-2.png",
      sui: 80,
      token: 47,
      percentage: 1.1,
    },
    {
      name: "Planet Namek",
      tag: "@suiyan",
      type: "A",
      image: "/assets/lands/image-3.png",
      sui: 42,
      token: 30,
      percentage: 1.8,
    },
    {
      name: "Pink Panther",
      tag: "0x1412…4120",
      type: "A",
      image: "/assets/lands/image-4.png",
      sui: 37,
      token: 22,
      percentage: 1.3,
    },
    {
      name: "Sacred Land of Japan",
      tag: "@japanesegovernment",
      type: "A",
      image: "/assets/lands/image-5.png",
      sui: 194,
      token: 39,
      percentage: 2.57,
    },
    {
      name: "Cherry Land",
      tag: "@wara",
      type: "A",
      image: "/assets/lands/image-6.png",
      sui: 88,
      token: 12,
      percentage: 1.14,
    },

    {
      name: "AEON land",
      tag: "@000",
      type: "A",
      image: "/assets/lands/image-7.png",
      sui: 144,
      token: 53,
      percentage: 2.01,
    },
  ];

  const mangrove_land = [
    {
      name: "Zen's Tropics",
      tag: "@zenfrogs",
      type: "B",
      image: "/assets/lands/image-9.png",
      sui: 12,
      token: 6,
      percentage: 1.4,
    },

    {
      name: "Ancien Egypt",
      tag: "@adeniyi",
      type: "B",
      image: "/assets/lands/image-10.png",
      sui: 12,
      token: 6,
      percentage: 1.4,
    },
  ];

  const diamond_ice = [
    {
      name: "Loki's Hideout",
      tag: "@wallstreetbets",
      type: "C",
      image: "/assets/lands/image-12.png",
      sui: 12,
      token: 6,
      percentage: 1.4,
    },

    {
      name: "Ancien Egypt",
      tag: "@adeniyi",
      type: "C",
      image: "/assets/lands/image-13.png",
      sui: 12,
      token: 6,
      percentage: 1.4,
    },
  ];

  const bamboo_gold = [
    {
      name: "Panda Express",
      tag: "@chinesekitchen",
      type: "D",
      image: "/assets/lands/image-8.png",
      sui: 31,
      token: 12,
      percentage: 1.1,
    },
    {
      name: "Shang Chi",
      tag: "@kotaro",
      type: "D",
      image: "/assets/lands/image-14.png",
      sui: 12,
      token: 6,
      percentage: 1.4,
    },

    {
      name: "Bambooclat",
      tag: "@suifrens",
      type: "D",
      image: "/assets/lands/image-15.png",
      sui: 12,
      token: 6,
      percentage: 1.4,
    },
    {
      name: "Zen's Tropics",
      tag: "@zenfrogs",
      type: "D",
      image: "/assets/lands/image-11.png",
      sui: 12,
      token: 6,
      percentage: 1.4,
    },
    {
      name: "Pls dont attacc me",
      tag: "@wade",
      type: "D",
      image: "/assets/lands/image-16.png",
      sui: 12,
      token: 6,
      percentage: 1.4,
    },
    {
      name: "KungFu Panda",
      tag: "0x95cc…1485",
      type: "D",
      image: "/assets/lands/image-17.png",
      sui: 12,
      token: 6,
      percentage: 1.4,
    },
    {
      name: "KungFu Panda 2",
      tag: "0x95cc…1485",
      type: "D",
      image: "/assets/lands/image-18.png",
      sui: 12,
      token: 6,
      percentage: 1.4,
    },
  ];

  const filter = [
    {
      name: "Gold",
      quantity: tropical_forest.length,
    },
    {
      name: "Platinum",
      quantity: mangrove_land.length,
    },
    {
      name: "Diamond",
      quantity: diamond_ice.length,
    },
    {
      name: "Emerald",
      quantity: bamboo_gold.length,
    },
  ];
  const { setItem } = useSelectedLand((state) => state);

  function handleAttack(name, image, tag, sui, token, percentage) {
    setItem({
      name: name,
      image: image,
      tag: tag,
      sui: sui,
      token: token,
      percentage: percentage,
    });

    setIsShowAttackModal(true);
  }

  return (
    <>
      {dashboardCount === 1 && (
        <div className="flex flex-col gap-2 items-start justify-start rounded-3xl border-4 border-cyan-1 bg-neutral-7 min-h-[581px] max-h-[581px] max-w-[588px] md:min-w-[588px] p-2">
          <Filter
            filterData={filter}
            setSelectedFilter={setSelectedFilter}
            selectedFilter={selectedFilter}
          />

          <div className="flex flex-wrap items-start justify-start  gap-2 overflow-y-scroll max-h-[510px]">
            {/* Tropical Forest */}
            {selectedFilter === "Tropical Forest" && (
              <>
                {tropical_forest.map((data, index) => {
                  return (
                    <div
                      key={index}
                      className="min-h-[254px] min-w-[274px] bg-neutral-8 pb-5 p-3 flex flex-col gap-2 rounded-2xl"
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
                          <button>
                            <LocationIcon />
                          </button>
                          <button
                            onClick={() =>
                              dashboardCount === 1 &&
                              setDashboardCount(dashboardCount + 1)
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
                            data.image,
                            data.tag,
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

            {selectedFilter === "Diamond Ice" && (
              <>
                {diamond_ice.map((data, index) => {
                  return (
                    <div
                      key={index}
                      className="min-h-[254px] min-w-[274px] bg-neutral-8 pb-5 p-3 flex flex-col gap-2 rounded-2xl"
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
                          <button>
                            <LocationIcon />
                          </button>
                          <button
                            onClick={() =>
                              dashboardCount === 1 &&
                              setDashboardCount(dashboardCount + 1)
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
                            data.image,
                            data.tag,
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

            {selectedFilter === "Mangrove Land" && (
              <>
                {mangrove_land.map((data, index) => {
                  return (
                    <div
                      key={index}
                      className="min-h-[254px] min-w-[274px] bg-neutral-8 pb-5 p-3 flex flex-col gap-2 rounded-2xl"
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
                          <button>
                            <LocationIcon />
                          </button>
                          <button>
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
                            data.image,
                            data.tag,
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

            {selectedFilter === "Bamboo Gold" && (
              <>
                {bamboo_gold.map((data, index) => {
                  return (
                    <div
                      key={index}
                      className="min-h-[254px] min-w-[274px] bg-neutral-8 pb-5 p-3 flex flex-col gap-2 rounded-2xl"
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
                          <button>
                            <LocationIcon />
                          </button>
                          <button>
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
                            data.image,
                            data.tag,
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
