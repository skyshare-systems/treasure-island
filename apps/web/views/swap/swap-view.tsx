import ArrowSwap from "@/components/icon/arrow-swap";
import WalletIcon from "@/components/icon/wallet-icon";
import { Input } from "@/components/ui/input";
import { useDashboardModal } from "@/lib/store/dashboard-modal-store";
import { cn } from "@/lib/utils";
import { fredoka } from "@/public/fonts";
import React from "react";

const SwapView = () => {
  const { dashboardCount, setDashboardCount } = useDashboardModal(
    (state) => state
  );
  return (
    <>
      {dashboardCount === 3 && (
        <div className="flex flex-col gap-2 items-start justify-start min-w-[288px] max-w-[288px] min-h-[266px] pt-2 pb-3 px-2 rounded-3xl border-4 border-cyan-1 bg-neutral-7">
          <div className="flex flex-col items-start justify-start gap-[3px] w-full relative">
            <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-neutral-7 p-1 rounded-lg">
              <ArrowSwap />
            </button>
            {/* you pay  */}
            <div className="flex flex-col gap-2 p-3 self-stretch bg-neutral-8 rounded-2xl ">
              <div className="flex flex-row justify-between items-center w-full">
                <h1
                  className={cn(fredoka.className, "ty-title text-neutral-1")}
                >
                  You pay
                </h1>

                <div className="flex items-center gap-1">
                  <WalletIcon />
                  <h1 className="ty-subtext text-neutral-5">499 $BUCK</h1>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="p-2 flex items-center gap-2 rounded-lg border border-neutral-7 bg-neutral-8">
                  <Input
                    className={cn(
                      fredoka.className,
                      "ty-subheading text-blue-1"
                    )}
                    placeholder="Ex. 15"
                  />
                </div>
                <div className="flex flex-wrap justify-between gap-2 items-center">
                  <h1
                    className={cn(
                      fredoka.className,
                      "p-1 ty-subtext text-neutral-5"
                    )}
                  >
                    ~$10
                  </h1>

                  <div className="flex flex-wrap items-center gap-1">
                    <button
                      className={cn(
                        fredoka.className,
                        "p-1 ty-subtext text-neutral-5"
                      )}
                    >
                      10%
                    </button>
                    <button
                      className={cn(
                        fredoka.className,
                        "p-1 ty-subtext text-neutral-5"
                      )}
                    >
                      50%
                    </button>
                    <button
                      className={cn(
                        fredoka.className,
                        "p-1 ty-subtext text-neutral-5"
                      )}
                    >
                      MAX
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* you receive  */}
            <div className="flex flex-col gap-2 p-3 self-stretch bg-neutral-8 rounded-2xl ">
              <div className="flex flex-row justify-between items-center w-full">
                <h1
                  className={cn(fredoka.className, "ty-title text-neutral-1")}
                >
                  You Receive
                </h1>

                <div className="flex items-center gap-1">
                  <WalletIcon />
                  <h1 className="ty-subtext text-neutral-5">499 $BUCK</h1>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="p-2 flex items-center gap-2 rounded-lg border border-neutral-7 bg-neutral-8">
                  <Input
                    className={cn(
                      fredoka.className,
                      "ty-subheading text-blue-1"
                    )}
                    placeholder="Ex. 15"
                  />
                </div>
                <div className="flex flex-wrap justify-between gap-2 items-center">
                  <h1
                    className={cn(
                      fredoka.className,
                      "p-1 ty-subtext text-neutral-5"
                    )}
                  >
                    ~$10
                  </h1>

                  <div className="flex flex-wrap items-center gap-1">
                    <button
                      className={cn(
                        fredoka.className,
                        "p-1 ty-subtext text-neutral-5"
                      )}
                    >
                      10%
                    </button>
                    <button
                      className={cn(
                        fredoka.className,
                        "p-1 ty-subtext text-neutral-5"
                      )}
                    >
                      50%
                    </button>
                    <button
                      className={cn(
                        fredoka.className,
                        "p-1 ty-subtext text-neutral-5"
                      )}
                    >
                      MAX
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="swap-button w-full py-3 px-2 rounded-full">
            <h1 className={cn(fredoka.className, "ty-title text-neutral-1")}>
              Swap
            </h1>
          </button>
        </div>
      )}
    </>
  );
};

export default SwapView;
