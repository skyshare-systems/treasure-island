import ArrowUpRight from "@/components/icon/arrow-up-right";
import LocationIcon from "@/components/icon/location";
import { cn } from "@/lib/utils";
import { fredoka } from "@/public/fonts";
import React, { useState } from "react";
import Image from "next/image";
import TokenIcon from "@/components/icon/token";
import PercentageIcon from "@/components/icon/percentage";
import Filter from "@/components/filter";
import AttackModal from "./attack-modal";

interface IDashboard {
  isShowDashboard: boolean;
  setIsShowDashboard: any;
}

const Dashboard = ({ isShowDashboard, setIsShowDashboard }: IDashboard) => {
  const [selectedFilter, setSelectedFilter] = useState("Tropical Forest");
  const [isShowData, setIsShowData] = useState(false);
  const [isShowAttackModal, setIsShowAttackModal] = useState(false);

  const tropical_forest = [
    {
      name: "Zen's Tropics",
      tag: "@zenfrogs",
      type: "A",
      image: "/assets/dashboard/zen-tropics.png",
      sui: 15,
      token: 450,
      percentage: 1.6,
    },

    {
      name: "Bambooclat",
      tag: "@suilend",
      type: "A",
      image: "/assets/dashboard/bambooclat.png",
      sui: 15,
      token: 450,
      percentage: 1.6,
    },

    {
      name: "Tropical Hut",
      tag: "@fudthepug",
      type: "A",
      image: "/assets/dashboard/tropical-hut.png",
      sui: 15,
      token: 450,
      percentage: 1.6,
    },
  ];

  const mangrove_land = [
    {
      name: "Zen's Tropics",
      tag: "@zenfrogs",
      type: "A",
      image: "/assets/dashboard/zen-tropics.png",
      sui: 15,
      token: 450,
      percentage: 1.6,
    },

    {
      name: "Bambooclat",
      tag: "@suilend",
      type: "A",
      image: "/assets/dashboard/bambooclat.png",
      sui: 15,
      token: 450,
      percentage: 1.6,
    },
  ];

  const filter = [
    {
      name: "Tropical Forest",
      quantity: tropical_forest.length,
    },
    {
      name: "Mangrove Land",
      quantity: mangrove_land.length,
    },
    {
      name: "Diamond Ice",
      quantity: tropical_forest.length,
    },
    {
      name: "Bamboo Gold",
      quantity: mangrove_land.length,
    },
  ];

  if (!isShowDashboard) return null;
  return (
    <>
      {!isShowData ? (
        <div className="flex flex-col gap-2 items-start justify-start rounded-3xl border-4 border-cyan-1 bg-neutral-7 min-h-[581px] max-h-[581px] max-w-[588px] min-w-[588px] p-2">
          <Filter
            filterData={filter}
            setSelectedFilter={setSelectedFilter}
            selectedFilter={selectedFilter}
          />

          <div className="flex flex-wrap items-start justify-start  gap-2 overflow-y-scroll max-h-[510px]">
            {/* Tropical Forest */}
            {(selectedFilter === "Tropical Forest" ||
              selectedFilter === "Diamond Ice") && (
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
                        onClick={() => setIsShowAttackModal(true)}
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

            {(selectedFilter === "Mangrove Land" ||
              selectedFilter === "Bamboo Gold") && (
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
                        onClick={() => setIsShowAttackModal(true)}
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
      ) : (
        ""
      )}

      <AttackModal
        setIsShowData={setIsShowAttackModal}
        isShowData={isShowAttackModal}
      />
    </>
  );
};

export default Dashboard;
