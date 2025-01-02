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
import { CheckIcon, CopyIcon } from "lucide-react";
import Graph from "./graph";
import YieldGraph from "./yield-graph";
import TokenIcon from "@/components/icon/token";

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

  const [isCopy, setIsCopy] = useState(false);

  function copyClipBoard() {
    navigator.clipboard.writeText(item.tag);
    setIsCopy(true);
    const timerId = setTimeout(() => {
      setIsCopy(false);
    }, 2000); // Set the delay in milliseconds (1 seconds in this case)

    return () => clearTimeout(timerId);
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
                      className={cn(
                        fredoka.className,
                        "ty-subtitle text-red-2"
                      )}
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
                        "ty-subtitle text-mint-2"
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
                <div className="flex flex-col gap-1 items-start">
                  <div className="flex items-center py-1 px-2 bg-green-3 rounded-full">
                    <h1 className={cn(fredoka.className, "ty-subtitle")}>
                      <span className="text-neutral-8 capitalize">
                        {item.variant} •{" "}
                      </span>
                      <span className="text-neutral-8">
                        Type {item.type} Land
                      </span>
                    </h1>
                  </div>
                  <h1 className="ty-h5 text-neutral-1">{item.name}</h1>
                  <button
                    onClick={() => copyClipBoard()}
                    className="flex items-center gap-1"
                  >
                    <h1 className="ty-subtext text-neutral-6">Owned by</h1>
                    <h1 className="ty-descriptions text-neutral-1 ty-descriptions flex items-center">
                      {item.tag}
                    </h1>
                    {!isCopy ? (
                      <CopyIcon width={14} />
                    ) : (
                      <>
                        <CheckIcon width={14} />
                        <h1 className="ty-subtext text-neutral-6">copied</h1>
                      </>
                    )}
                  </button>
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

                {selectedFilter === "Price and Yield" && (
                  <>
                    <div className="flex flex-col gap-1 items-start relative overflow-hidden w-full">
                      <h1
                        className={cn(
                          fredoka.className,
                          "ty-subtext text-neutral-6"
                        )}
                      >
                        Current Price
                      </h1>
                      <div className="rounded-2xl border border-[#2E394D]/[0.16] bg-[#4997FD]/[0.04] flex flex-col p-1">
                        <div className="flex flex-wrap justify-between items-center gap-1">
                          <div className="flex items-center gap-1 p-2">
                            <Image
                              src={"/icons/sui.png"}
                              alt={"sui"}
                              height={14}
                              width={14}
                            />
                            <h1
                              className={cn(
                                fredoka.className,
                                "ty-subtitle text-black"
                              )}
                            >
                              41,859.25
                            </h1>
                          </div>
                          <div className="flex items-center gap-1 p-2 bg-[#26995E14] rounded-full">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="14"
                              height="15"
                              viewBox="0 0 14 15"
                              fill="none"
                            >
                              <path
                                d="M7 2.8335V12.1668"
                                stroke="#26995E"
                                stroke-width="0.875"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M9.91633 5.75014C9.91633 5.75014 7.76826 2.8335 6.99966 2.8335C6.23106 2.83349 4.08301 5.75016 4.08301 5.75016"
                                stroke="#26995E"
                                stroke-width="0.875"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                            <h1
                              className={cn(
                                fredoka.className,
                                "ty-subtitle text-green-3"
                              )}
                            >
                              +3.54%
                            </h1>
                          </div>
                        </div>
                        <Graph />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1 items-start relative overflow-hidden w-full">
                      <h1
                        className={cn(
                          fredoka.className,
                          "ty-subtext text-neutral-6"
                        )}
                      >
                        Yield Progress
                      </h1>
                      <div className="rounded-2xl border border-[#2E394D]/[0.16] bg-[#4997FD]/[0.04] p-1">
                        <div className="flex flex-wrap justify-between items-center gap-1">
                          <div className="flex items-center gap-1 p-2">
                            <TokenIcon />

                            <h1
                              className={cn(
                                fredoka.className,
                                "ty-subtitle text-black"
                              )}
                            >
                              65.88
                            </h1>
                          </div>
                          <div className="flex items-center gap-1 p-2 bg-[#26995E14] rounded-full">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="14"
                              height="15"
                              viewBox="0 0 14 15"
                              fill="none"
                            >
                              <path
                                d="M7 2.8335V12.1668"
                                stroke="#26995E"
                                stroke-width="0.875"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M9.91633 5.75014C9.91633 5.75014 7.76826 2.8335 6.99966 2.8335C6.23106 2.83349 4.08301 5.75016 4.08301 5.75016"
                                stroke="#26995E"
                                stroke-width="0.875"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                            <h1
                              className={cn(
                                fredoka.className,
                                "ty-subtitle text-green-3"
                              )}
                            >
                              +3.54%
                            </h1>
                          </div>
                        </div>
                        <YieldGraph />
                        <div className="absolute bottom-1 flex flex-wrap justify-between items-center gap-1 w-[83%]">
                          <div className="flex items-center gap-1 p-2">
                            <h1 className="ty-title text-yellow-4">APR</h1>
                            <h1
                              className={cn(
                                fredoka.className,
                                "ty-subtitle text-black"
                              )}
                            >
                              59.32%
                            </h1>
                          </div>
                          <div className="flex items-center gap-1 p-2  rounded-full">
                            <h1 className="ty-title text-yellow-4">P&L</h1>

                            <Image
                              src={"/icons/sui.png"}
                              alt={"sui"}
                              height={14}
                              width={14}
                            />

                            <h1
                              className={cn(
                                fredoka.className,
                                "ty-subtitle text-green-3"
                              )}
                            >
                              3.21
                            </h1>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}

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
