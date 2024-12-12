import DashboardIcon from "@/components/icon/dashboard";
import XIcon from "@/components/icon/x-icon";
import { cn } from "@/lib/utils";
import { fredoka } from "@/public/fonts";
import React, { useState } from "react";
import Dashboard from "./dashboard";
import { useDashboardModal } from "@/lib/store/dashboard-modal-store";

const Marketplace = () => {
  const { dashboardCount, setDashboardCount } = useDashboardModal(
    (state) => state
  );
  return (
    <div className="fixed flex flex-col items-end justify-end md:right-8 gap-2 md:bottom-8 bottom-4 right-0 px-4 z-[3]">
      <Dashboard />

      <button
        onClick={() =>
          dashboardCount >= 1 ? setDashboardCount(0) : setDashboardCount(1)
        }
        className="flex items-center gap-1 p-3 border-2 border-black bg-white rounded-xl z-[3]"
      >
        {dashboardCount >= 1 ? (
          <XIcon />
        ) : (
          <>
            <DashboardIcon />
            <h1 className={cn(fredoka.className, "ty-title text-black")}>
              Marketplace
            </h1>
          </>
        )}
      </button>
    </div>
  );
};

export default Marketplace;
