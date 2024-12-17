import DashboardIcon from "@/components/icon/dashboard";
import XIcon from "@/components/icon/x-icon";
import { cn } from "@/lib/utils";
import { fredoka } from "@/public/fonts";
import React, { useState } from "react";
import { useDashboardModal } from "@/lib/store/dashboard-modal-store";
import CoinSwap from "@/components/icon/coin-swap";

const Swap = () => {
  const [swap, setSwap] = useState(false);
  const { dashboardCount, setDashboardCount } = useDashboardModal(
    (state) => state
  );

  return (
    <button
      onClick={() =>
        dashboardCount >= 3 ? setDashboardCount(0) : setDashboardCount(3)
      }
      className="flex items-center gap-1 p-3 border-2 border-cyan-1 bg-neutral-1 rounded-xl z-[3]"
    >
      {dashboardCount === 3 ? (
        <XIcon className="invert grayscale-0" />
      ) : (
        <>
          <CoinSwap />
          <h1 className={cn(fredoka.className, "ty-title text-neutral-8")}>
            Swap
          </h1>
        </>
      )}
    </button>
  );
};

export default Swap;
