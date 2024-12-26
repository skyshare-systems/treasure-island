import { cn } from "@/lib/utils";
import { fredoka } from "@/public/fonts";
import React, { useState } from "react";
import Image from "next/image";

import { useDashboardModal } from "@/lib/store/dashboard-modal-store";
import ArrowLeft from "@/components/icon/arrow-left";
import { useAttackModal } from "@/lib/store/attack-modal-store";
import SwordIcon from "@/components/icon/sword";
import HistoryCard from "@/components/history-card";
import ShieldIcon from "@/components/icon/shield";
import SunIcon from "@/components/icon/sun";
import { useSelectedLand } from "@/lib/store/selected-land-store";

const SelectedLand = () => {
  const { dashboardCount, setDashboardCount } = useDashboardModal(
    (state) => state
  );
  const { setIsShowAttackModal } = useAttackModal((state) => state);
  const { item, setItem } = useSelectedLand((state) => state);

  const [selectedFilter, setSelectedFilter] = useState("Transaction History");

  const filter = [
    {
      name: "Price and Yield",
    },
    {
      name: "Transaction History",
    },
  ];

  const transaction_history = [
    {
      icon: <SwordIcon />,
      title: "Island successfully captured by",
      tag: "@zenfrogs",
      time: "12:34pm",
      textColor: "text-[#26995E]",
      bgColor: "bg-[#26995E]",
    },
    {
      icon: <ShieldIcon />,
      title: "Attack failed! Attempted by",
      tag: "@000",
      time: "12:34pm",
      textColor: "text-[#BF140A]",
      bgColor: "bg-[#BF140A]",
    },
    {
      icon: <SunIcon />,
      title: "Island Created",
      tag: "",
      time: "12:34pm",
      textColor: "text-[#DE9B0B]",
      bgColor: "bg-[#DE9B0B]",
    },
  ];

  function handleAttack() {
    setIsShowAttackModal(true);
  }

  return (
    <>
      {dashboardCount === 2 && (
        <>
          <div className="w-full">
            <button
              onClick={() => setDashboardCount(1)}
              className={cn(
                fredoka.className,
                "p-2 flex flex-row items-center gap-1 bg-neutral-8 border-2 border-cyan-1 rounded-full ty-descriptions"
              )}
            >
              <ArrowLeft />
              Back
            </button>
          </div>
          <div className="flex gap-4 items-start justify-start rounded-3xl border-4 border-cyan-1 bg-neutral-7 min-h-[581px] max-h-[581px] max-w-[588px] w-full md:min-w-[588px] p-2">
            <div className="bg-white rounded-3xl p-3 flex flex-col lg:flex-row gap-4 items-start justify-start grow self-stretch overflow-y-auto max-h-[581px]">
              {/* Left */}
              <div className="flex flex-col items-start justify-start gap-2 sm:max-w-[144px]">
                <div className="bg-[#489BFA] rounded-xl flex items-center justify-center p-2">
                  <Image
                    src={item.image}
                    alt={item.name}
                    height={144}
                    width={144}
                    className="w-full"
                    unoptimized
                  />
                </div>

                <button
                  onClick={() => handleAttack()}
                  className={cn(
                    fredoka.className,
                    "ty-title text-white font-bold pt-3 pb-3 button-layout rounded-[8px] w-full text-center"
                  )}
                >
                  Attack!
                </button>
                <div className="flex flex-col  w-full">
                  <div className="p-2 flex items-center justify-between gap-2">
                    <h1
                      className={cn(fredoka.className, "ty-subtext text-red-2")}
                    >
                      Attacks Received
                    </h1>
                    <h1
                      className={cn(fredoka.className, "ty-title text-red-5")}
                    >
                      32
                    </h1>
                  </div>

                  <div className="p-2 flex items-center justify-between gap-2 w-full">
                    <h1
                      className={cn(
                        fredoka.className,
                        "ty-subtext text-mint-2"
                      )}
                    >
                      Successful Attacks
                    </h1>
                    <h1
                      className={cn(fredoka.className, "ty-title text-mint-5")}
                    >
                      2
                    </h1>
                  </div>
                </div>
              </div>

              {/* Right */}
              <div className="flex flex-col items-start justify-start gap-4 w-full">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center py-1 px-2 bg-green-3 rounded-full">
                    <h1 className={cn(fredoka.className, "ty-subtitle")}>
                      <span className="text-neutral-8">Tropical Forest • </span>
                      <span className="text-neutral-8">Type A Land • </span>
                      <span className="text-neutral-8/50">2 / 7</span>
                    </h1>
                  </div>

                  <h1 className="ty-h5 text-neutral-1">{item.name}</h1>

                  <div className="flex items-center gap-1">
                    <h1 className="ty-subtext text-neutral-6">Owned by</h1>
                    <h1 className="ty-descriptions text-neutral-1 ty-descriptions">
                      {item.tag}
                    </h1>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="15"
                      viewBox="0 0 14 15"
                      fill="none"
                    >
                      <path
                        d="M5.25 9.25C5.25 7.6001 5.25 6.77515 5.76256 6.26256C6.27515 5.75 7.1001 5.75 8.75 5.75H9.33333C10.9832 5.75 11.8082 5.75 12.3208 6.26256C12.8333 6.77515 12.8333 7.6001 12.8333 9.25V9.83333C12.8333 11.4832 12.8333 12.3082 12.3208 12.8208C11.8082 13.3333 10.9832 13.3333 9.33333 13.3333H8.75C7.1001 13.3333 6.27515 13.3333 5.76256 12.8208C5.25 12.3082 5.25 11.4832 5.25 9.83333V9.25Z"
                        stroke="black"
                        strokeWidth="0.875"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9.91693 5.74984C9.91553 4.02487 9.88946 3.13138 9.38732 2.51959C9.29037 2.40144 9.18205 2.29311 9.06392 2.19615C8.41853 1.6665 7.4597 1.6665 5.54199 1.6665C3.6243 1.6665 2.66545 1.6665 2.02008 2.19615C1.90193 2.2931 1.7936 2.40144 1.69664 2.51959C1.16699 3.16496 1.16699 4.12381 1.16699 6.0415C1.16699 7.95921 1.16699 8.91804 1.69664 9.56344C1.79359 9.68156 1.90193 9.78989 2.02008 9.88684C2.63186 10.389 3.52536 10.415 5.25033 10.4164"
                        stroke="black"
                        strokeWidth="0.875"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  {filter.map((data, index) => {
                    return (
                      <button
                        key={index}
                        onClick={() => setSelectedFilter(data.name)}
                        className={cn(
                          fredoka.className,
                          "py-1 px-2 text-neutral-1 ty-subtitle",
                          "ease-out duration-300  underline-offset-4",
                          `${selectedFilter === data.name ? "underline" : "hover:underline"}`
                        )}
                      >
                        {data.name}
                      </button>
                    );
                  })}
                </div>
                {selectedFilter === "Transaction History" && (
                  <div className="bg-white p-1 flex flex-col gap-1 items-start justify-start border border-neutral-5/15 rounded-lg w-full grow self-stretch min-h-[395px]">
                    {transaction_history.map((data, index) => {
                      return (
                        <HistoryCard
                          icon={data.icon}
                          title={data.title}
                          tag={data.tag}
                          time={data.time}
                          key={index}
                          textColor={data.textColor}
                          bgColor={data.bgColor}
                        />
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default SelectedLand;
