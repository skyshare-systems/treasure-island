import React, { useEffect } from "react";
import AttackModal from "./attack-modal";
import { useDashboardModal } from "@/lib/store/dashboard-modal-store";
import LandList from "./landlist";
import SelectedLand from "./selected-land";
import SwapView from "../swap/swap-view";

const Dashboard = () => {
  const { dashboardCount } = useDashboardModal((state) => state);

  useEffect(() => {
    console.log(dashboardCount);
  }, [dashboardCount]);

  if (dashboardCount <= 0) return null;
  return (
    <>
      <LandList />
      <SwapView />
      <SelectedLand />
      <AttackModal />
    </>
  );
};

export default Dashboard;
