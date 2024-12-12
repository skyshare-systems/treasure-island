import { cn } from "@/lib/utils";
import { fredoka } from "@/public/fonts";
import React, { useEffect } from "react";
import Image from "next/image";
import AttackModal from "./attack-modal";
import { useAttackModal } from "@/lib/store/attack-modal-store";
import { useDashboardModal } from "@/lib/store/dashboard-modal-store";
import ArrowLeft from "@/components/icon/arrow-left";
import LandList from "./landlist";
import SelectedLand from "./selected-land";

const Dashboard = () => {
  const { isShowAttackModal, setIsShowAttackModal } = useAttackModal(
    (state) => state
  );

  const { dashboardCount } = useDashboardModal((state) => state);

  useEffect(() => {
    console.log(dashboardCount);
  }, [dashboardCount]);

  if (dashboardCount <= 0) return null;
  return (
    <>
      <LandList />
      <SelectedLand />
      <AttackModal />
    </>
  );
};

export default Dashboard;
