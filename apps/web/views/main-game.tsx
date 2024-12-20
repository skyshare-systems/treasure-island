"use client";
import React, { useEffect, useRef, useState } from "react";
import WalletHub from "@/components/wallet-hub";
import Loading from "@/components/loading";
import Image from "next/image";
import Marketplace from "@/views/marketplace/page";
import LandCard from "@/components/land-card";
import AttackModal from "./marketplace/attack-modal";
import { useAttackModal } from "@/lib/store/attack-modal-store";
import { useDashboardModal } from "@/lib/store/dashboard-modal-store";

const MainGame = () => {
  const [loading, setLoading] = useState(false);
  const { isShowAttackModal, setIsShowAttackModal } = useAttackModal(
    (state) => state
  );

  const { dashboardCount, setDashboardCount } = useDashboardModal(
    (state) => state
  );

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <div className="flex justify-center items-center bg-[#1c82f7] relative  overflow-y-auto">
        <div className="relative min-h-[2200px] min-w-[100dvw] flex justify-center items-center">
          <Image
            src={"/assets/background/map-v2.png"}
            alt={"map"}
            height={1000}
            width={1000}
            unoptimized
            className="min-h-[1200px] min-w-[1800px] max-h-[2200px] max-w-[1800px] absolute top-5 left-[24rem]"
          />

          <LandCard
            className={
              "absolute top-[1.6%] left-[42.5rem] transform  -translate-y-[1.6%]"
            }
            image={"/assets/lands/image-1.png"}
            name={"Konoha"}
            tag={"@naruto"}
            sui={31}
            token={12}
            percentage={1.4}
            handleAttackModal={() => setIsShowAttackModal(true)}
            handleViewLand={() => setDashboardCount(2)}
            imageClassName={"max-w-[220px] md:max-w-[280px]"}
          />

          <LandCard
            className={
              "absolute top-[1.6%] left-[68.2rem] transform  -translate-y-[1.6%]"
            }
            image={"/assets/lands/image-2.png"}
            name={"Mirai Land"}
            tag={"@studiomirai"}
            sui={80}
            token={47}
            percentage={1.1}
            handleAttackModal={() => setIsShowAttackModal(true)}
            handleViewLand={() => setDashboardCount(2)}
            imageClassName={"max-w-[220px] md:max-w-[280px]"}
          />

          <LandCard
            className={
              "absolute top-[12%] left-[55.3rem] transform  -translate-y-[12%]"
            }
            image={"/assets/lands/image-3.png"}
            name={"Planet Namek"}
            tag={"@suiyan"}
            sui={42}
            token={30}
            percentage={1.8}
            handleAttackModal={() => setIsShowAttackModal(true)}
            handleViewLand={() => setDashboardCount(2)}
            imageClassName={"max-w-[220px] md:max-w-[280px]"}
          />

          <LandCard
            className={
              "absolute top-[23%] left-[42.5rem] transform  -translate-y-[23%]"
            }
            image={"/assets/lands/image-4.png"}
            name={"Pink Panther"}
            tag={"0x1412…4120"}
            sui={37}
            token={22}
            percentage={1.3}
            handleAttackModal={() => setIsShowAttackModal(true)}
            handleViewLand={() => setDashboardCount(2)}
            imageClassName={"max-w-[220px] md:max-w-[280px]"}
          />

          <LandCard
            className={
              "absolute top-[34%] left-[30rem] transform  -translate-y-[34%]"
            }
            image={"/assets/lands/image-5.png"}
            name={"Sacred Land of Japan"}
            tag={"@japanesegovernment"}
            sui={194}
            token={39}
            percentage={2.57}
            handleAttackModal={() => setIsShowAttackModal(true)}
            handleViewLand={() => setDashboardCount(2)}
            imageClassName={"max-w-[220px] md:max-w-[250px]"}
          />
        </div>

        <AttackModal />

        <Marketplace />
        <WalletHub />
      </div>
    );
  }
};

export default MainGame;
