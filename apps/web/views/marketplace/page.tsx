import DashboardIcon from "@/components/icon/dashboard";
import XIcon from "@/components/icon/x-icon";
import { cn } from "@/lib/utils";
import { fredoka } from "@/public/fonts";
import React, { useState } from "react";
import Dashboard from "./dashboard";

const Marketplace = () => {
  const [isShowDashboard, setIsShowDashboard] = useState(false);
  return (
    <div className="fixed flex flex-col items-end justify-end md:right-8 gap-2 md:bottom-8 bottom-4 right-0 px-4 z-[3]">
      <Dashboard
        isShowDashboard={isShowDashboard}
        setIsShowDashboard={setIsShowDashboard}
      />
      <button
        onClick={() => setIsShowDashboard(!isShowDashboard)}
        className="flex items-center gap-1 p-3 border-2 border-black bg-white rounded-xl z-[3]"
      >
        {isShowDashboard ? (
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
