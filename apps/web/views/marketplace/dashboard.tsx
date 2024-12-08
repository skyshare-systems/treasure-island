import ArrowUpRight from "@/components/icon/arrow-up-right";
import LocationIcon from "@/components/icon/location";
import { cn } from "@/lib/utils";
import { fredoka } from "@/public/fonts";
import React, { useState } from "react";
import Image from "next/image";
import TokenIcon from "@/components/icon/token";
import PercentageIcon from "@/components/icon/percentage";

interface IDashboard {
  isShowDashboard: boolean;
  setIsShowDashboard: any;
}

const Dashboard = ({ isShowDashboard, setIsShowDashboard }: IDashboard) => {
  const [selectedFilter, setSelectedFilter] = useState("Tropical Forest");

  const filter = [
    {
      name: "Tropical Forest",
      quantity: 7,
    },
    {
      name: "Mangrove Land",
      quantity: 2,
    },
    {
      name: "Diamond Ice",
      quantity: 7,
    },
    {
      name: "Bamboo Gold",
      quantity: 2,
    },
  ];

  if (!isShowDashboard) return null;
  return (
    <div className="flex flex-col gap-2 items-start justify-start rounded-3xl border-4 border-cyan-1 bg-neutral-7 min-h-[581px] min-w-[536px] p-2">
      <div className="p-1 flex flex-wrap items-center gap-2">
        {filter.map((data, index) => {
          return (
            <button
              onClick={() => setSelectedFilter(data.name)}
              key={index}
              className={cn(
                fredoka.className,
                "flex items-center gap-2 p-2 hover:bg-blue-1 text-blue-1 hover:text-white ty-title",
                "ease-out duration-300 rounded-lg",
                `${selectedFilter === data.name ? "bg-blue-1 text-white" : "bg-transparent"}`
              )}
            >
              {data.name} {data.quantity}
            </button>
          );
        })}
      </div>

      <div className="flex flex-wrap items-start justify-start growself-stretch">
        <div className="min-h-[254px] min-w-[256px] bg-neutral-8 p-3 flex flex-col gap-2 rounded-2xl">
          <div className="flex justify-between items-start">
            <div className="flex flex-col">
              <h1 className={cn(fredoka.className, "ty-title text-neutral-1")}>
                Zen's Tropics
              </h1>
              <h1
                className={cn(fredoka.className, "ty-subtitle text-neutral-3")}
              >
                @zenfrogs
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
              src={"/assets/dashboard/zen-tropics.png"}
              alt={"zen's tropics"}
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
              <h1 className={cn(fredoka.className, "ty-title text-blue-1")}>
                15
              </h1>
            </div>
            <div className="flex items-center gap-1 p-1  bg-[#0000000A] rounded-lg">
              <TokenIcon />

              <h1 className={cn(fredoka.className, "ty-title text-blue-1")}>
                450
              </h1>
            </div>
            <div className="flex items-center gap-1 p-1  bg-[#0000000A] rounded-lg">
              <PercentageIcon />

              <h1 className={cn(fredoka.className, "ty-title text-blue-1")}>
                1.6
              </h1>
            </div>
          </div>

          <button
            className={cn(
              fredoka.className,
              "ty-title text-white font-bold pt-3 pb-3 button-layout rounded-[8px] w-full text-center"
            )}
          >
            Attack!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
