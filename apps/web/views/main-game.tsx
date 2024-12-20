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
            className="min-h-[1200px] min-w-[1800px] max-h-[2200px] max-w-[1800px] absolute top-5 left-[4rem] md:left-[24rem]"
          />

          <LandCard
            className={
              "absolute top-[2%] left-[23rem] md:left-[43rem] transform  -translate-y-[2%]"
            }
            image={"/assets/lands/image-1.png"}
            name={"Konoha"}
            tag={"@naruto"}
            sui={31}
            token={12}
            percentage={1.4}
            handleAttackModal={() => setIsShowAttackModal(true)}
            handleViewLand={() => setDashboardCount(2)}
            imageClassName={"max-w-[220px]"}
          />

          <LandCard
            className={
              "absolute top-[2%] left-[49rem] md:left-[69rem] transform  -translate-y-[2%]"
            }
            image={"/assets/lands/image-2.png"}
            name={"Mirai Land"}
            tag={"@studiomirai"}
            sui={80}
            token={47}
            percentage={1.1}
            handleAttackModal={() => setIsShowAttackModal(true)}
            handleViewLand={() => setDashboardCount(2)}
            imageClassName={"max-w-[220px]"}
          />

          <LandCard
            className={
              "absolute top-[12%] left-[35.3rem] md:left-[55.8rem] transform  -translate-y-[12%]"
            }
            image={"/assets/lands/image-3.png"}
            name={"Planet Namek"}
            tag={"@suiyan"}
            sui={42}
            token={30}
            percentage={1.8}
            handleAttackModal={() => setIsShowAttackModal(true)}
            handleViewLand={() => setDashboardCount(2)}
            imageClassName={"max-w-[220px]"}
          />

          <LandCard
            className={
              "absolute top-[23%] left-[23rem] md:left-[43rem] transform  -translate-y-[23%]"
            }
            image={"/assets/lands/image-4.png"}
            name={"Pink Panther"}
            tag={"0x1412…4120"}
            sui={37}
            token={22}
            percentage={1.3}
            handleAttackModal={() => setIsShowAttackModal(true)}
            handleViewLand={() => setDashboardCount(2)}
            imageClassName={"max-w-[220px]"}
          />

          <LandCard
            className={
              "absolute top-[34%] left-[10rem] md:left-[30rem] transform  -translate-y-[34%]"
            }
            image={"/assets/lands/image-5.png"}
            name={"Sacred Land of Japan"}
            tag={"@japanesegovernment"}
            sui={194}
            token={39}
            percentage={2.57}
            handleAttackModal={() => setIsShowAttackModal(true)}
            handleViewLand={() => setDashboardCount(2)}
            imageClassName={"max-w-[220px]"}
          />

          <LandCard
            className={
              "absolute top-[44%] left-[22.5rem] md:left-[42.5rem] transform  -translate-y-[44%]"
            }
            image={"/assets/lands/image-6.png"}
            name={"Cherry Land"}
            tag={"@wara"}
            sui={88}
            token={12}
            percentage={1.14}
            handleAttackModal={() => setIsShowAttackModal(true)}
            handleViewLand={() => setDashboardCount(2)}
            imageClassName={"max-w-[220px]"}
          />

          <LandCard
            className={
              "absolute top-[44%] left-[35rem] md:left-[55rem] transform  -translate-y-[44%] hover:z-[2]"
            }
            image={"/assets/lands/image-7.png"}
            name={"AEON Land"}
            tag={"@000"}
            sui={144}
            token={53}
            percentage={2.01}
            handleAttackModal={() => setIsShowAttackModal(true)}
            handleViewLand={() => setDashboardCount(2)}
            imageClassName={"max-w-[220px]"}
          />

          <LandCard
            className={
              "absolute top-[54%] left-[35rem] md:left-[55rem] transform  -translate-y-[54%]"
            }
            image={"/assets/lands/image-8.png"}
            name={"Panda Express"}
            tag={"@chinesekitchen"}
            sui={31}
            token={12}
            percentage={1.1}
            handleAttackModal={() => setIsShowAttackModal(true)}
            handleViewLand={() => setDashboardCount(2)}
            imageClassName={"max-w-[220px] md:max-w-[220px]"}
          />

          <LandCard
            className={
              "absolute top-[64.3%] left-[10rem] md:left-[30rem] transform  -translate-y-[64.3%]"
            }
            image={"/assets/lands/image-9.png"}
            name={"Zen’s Tropics"}
            tag={"@zenfrogs"}
            sui={12}
            token={6}
            percentage={1.4}
            handleAttackModal={() => setIsShowAttackModal(true)}
            handleViewLand={() => setDashboardCount(2)}
            imageClassName={"max-w-[220px] md:max-w-[220px]"}
          />

          <LandCard
            className={
              "absolute top-[64.3%] left-[23rem] md:left-[43rem] transform  -translate-y-[64.3%]"
            }
            image={"/assets/lands/image-10.png"}
            name={"Ancient Egypt"}
            tag={"@adeniyi"}
            sui={12}
            token={6}
            percentage={1.4}
            handleAttackModal={() => setIsShowAttackModal(true)}
            handleViewLand={() => setDashboardCount(2)}
            imageClassName={"max-w-[220px] md:max-w-[220px]"}
          />

          <LandCard
            className={
              "absolute top-[74.5%] left-[36rem] md:left-[56rem] transform  -translate-y-[74.5%]"
            }
            image={"/assets/lands/image-11.png"}
            name={"Zen’s Tropics"}
            tag={"@zenfrogs"}
            sui={12}
            token={6}
            percentage={1.4}
            handleAttackModal={() => setIsShowAttackModal(true)}
            handleViewLand={() => setDashboardCount(2)}
            imageClassName={"max-w-[220px] md:max-w-[220px]"}
          />

          <LandCard
            className={
              "absolute top-[23%] left-[87rem] md:left-[107rem] transform  -translate-y-[23%]"
            }
            image={"/assets/lands/image-12.png"}
            name={"Loki's Hideout"}
            tag={"@wallstreetbets"}
            sui={12}
            token={6}
            percentage={1.4}
            handleAttackModal={() => setIsShowAttackModal(true)}
            handleViewLand={() => setDashboardCount(2)}
            imageClassName={"max-w-[220px] md:max-w-[220px]"}
          />

          <LandCard
            className={
              "absolute top-[33%] left-[75rem] md:left-[95rem] transform  -translate-y-[33%]"
            }
            image={"/assets/lands/image-13.png"}
            name={"Emerald City of Oz"}
            tag={"@mystenlabs"}
            sui={12}
            token={6}
            percentage={1.4}
            handleAttackModal={() => setIsShowAttackModal(true)}
            handleViewLand={() => setDashboardCount(2)}
            imageClassName={"max-w-[220px] md:max-w-[220px]"}
          />

          <LandCard
            className={
              "absolute top-[44%] left-[62rem] md:left-[82rem] transform  -translate-y-[44%]"
            }
            image={"/assets/lands/image-14.png"}
            name={"Shang Chi"}
            tag={"@kotaro"}
            sui={12}
            token={6}
            percentage={1.4}
            handleAttackModal={() => setIsShowAttackModal(true)}
            handleViewLand={() => setDashboardCount(2)}
            imageClassName={"max-w-[220px] md:max-w-[220px]"}
          />

          <LandCard
            className={
              "absolute top-[54%] left-[74.5rem] md:left-[94.5rem] transform  -translate-y-[54%]"
            }
            image={"/assets/lands/image-15.png"}
            name={"Bambooclat"}
            tag={"@suifrens"}
            sui={12}
            token={6}
            percentage={1.4}
            handleAttackModal={() => setIsShowAttackModal(true)}
            handleViewLand={() => setDashboardCount(2)}
            imageClassName={"max-w-[220px] md:max-w-[220px]"}
          />

          <LandCard
            className={
              "absolute top-[75%] left-[61.5rem] md:left-[81.5rem] transform  -translate-y-[75%]"
            }
            image={"/assets/lands/image-15.png"}
            name={"Pls dont attacc me"}
            tag={"@wade"}
            sui={12}
            token={6}
            percentage={1.4}
            handleAttackModal={() => setIsShowAttackModal(true)}
            handleViewLand={() => setDashboardCount(2)}
            imageClassName={"max-w-[220px] md:max-w-[220px]"}
          />

          <LandCard
            className={
              "absolute top-[85.5%] left-[74.5rem] md:left-[94.5rem] transform  -translate-y-[85.5%]"
            }
            image={"/assets/lands/image-15.png"}
            name={"KungFu Panda"}
            tag={"0x95cc…1485"}
            sui={12}
            token={6}
            percentage={1.4}
            handleAttackModal={() => setIsShowAttackModal(true)}
            handleViewLand={() => setDashboardCount(2)}
            imageClassName={"max-w-[220px] md:max-w-[220px]"}
          />

          <LandCard
            className={
              "absolute top-[85.5%] left-[100rem] md:left-[120rem] transform  -translate-y-[85.5%]"
            }
            image={"/assets/lands/image-16.png"}
            name={"KungFu Panda"}
            tag={"0x95cc…1485"}
            sui={12}
            token={6}
            percentage={1.4}
            handleAttackModal={() => setIsShowAttackModal(true)}
            handleViewLand={() => setDashboardCount(2)}
            imageClassName={"max-w-[220px] md:max-w-[220px]"}
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
