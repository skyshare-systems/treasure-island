"use client";
import React, { useEffect, useRef, useState } from "react";
import WalletHub from "@/components/wallet-hub";
import Loading from "@/components/loading";
import Image from "next/image";
import Marketplace from "@/views/marketplace/page";
import LandCard from "@/components/land-card";
import AttackModal from "./marketplace/attack-modal";
import { useAttackModal } from "@/lib/store/attack-modal-store";

const MainGame = () => {
  const [loading, setLoading] = useState(false);
  const { isShowAttackModal, setIsShowAttackModal } = useAttackModal(
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
      <div className="flex justify-center items-center bg-[#1c82f7] relative  max-h-[100dvh] max-w-[100dvw]">
        <div className="relative overflow-y-scroll min-h-[2200px] min-w-[100dvw] flex justify-center items-center">
          <Image
            src={"/assets/background/map.png"}
            alt={"map"}
            height={1000}
            width={1000}
            unoptimized
            className="min-h-[2200px] min-w-[1800px] max-h-[2200px] max-w-[1800px] absolute top-0 left-[24rem] 2xl:left-1/2 2xl:transform 2xl:-translate-x-1/2 -translate-y-0"
          />

          <LandCard
            className={
              "absolute top-[49%] left-[55rem] transform  -translate-y-[49%] max-w-[220px] md:max-w-[300px"
            }
            image={"/assets/lands/image-1.png"}
            name={"Konoha"}
            tag={"@naruto"}
            sui={31}
            token={12}
            percentage={1.4}
            handleAttackModal={() => setIsShowAttackModal(true)}
          />

          <LandCard
            className={
              "absolute top-[62%] left-[54.5rem] transform  -translate-y-[62%] max-w-[220px] md:max-w-[240px]"
            }
            image={"/assets/lands/image-2.png"}
            name={"Panda Express"}
            tag={"@chinesekitchen"}
            sui={15}
            token={540}
            percentage={1.6}
            handleAttackModal={() => setIsShowAttackModal(true)}
          />

          <LandCard
            className={
              "absolute top-[50%] left-[81rem] transform  -translate-y-[50%] max-w-[220px] md:max-w-[240px]"
            }
            image={"/assets/lands/image-3.png"}
            name={"Zen's Tropics"}
            tag={"@zenfrogs"}
            sui={12}
            token={6}
            percentage={1.4}
            handleAttackModal={() => setIsShowAttackModal(true)}
          />

          <LandCard
            className={
              "absolute top-[62%] left-[93.5rem] transform  -translate-y-[62%] max-w-[220px] md:max-w-[240px]"
            }
            image={"/assets/lands/image-4.png"}
            name={"Tropical Hut"}
            tag={"0x95ac…135f"}
            sui={69}
            token={15}
            percentage={1.2}
            handleAttackModal={() => setIsShowAttackModal(true)}
          />

          <LandCard
            className={
              "absolute top-[85%] left-[55rem] transform  -translate-y-[85%] max-w-[220px] md:max-w-[230px]"
            }
            image={"/assets/lands/image-5.png"}
            name={"Shang Chi"}
            tag={"@kotaro"}
            sui={48}
            token={26}
            percentage={1.9}
            handleAttackModal={() => setIsShowAttackModal(true)}
          />

          <LandCard
            className={
              "absolute top-[85.5%] left-[80.6rem] transform  -translate-y-[85.5%] max-w-[220px] md:max-w-[230px]"
            }
            image={"/assets/lands/image-6.png"}
            name={"Pls dont attacc me"}
            tag={"@wade"}
            sui={31}
            token={44}
            percentage={1.56}
            handleAttackModal={() => setIsShowAttackModal(true)}
          />

          <LandCard
            className={
              "absolute top-[97.5%] left-[93.5rem] transform  -translate-y-[97.5%] max-w-[220px] md:max-w-[230px]"
            }
            image={"/assets/lands/image-7.png"}
            name={"KungFu Panda"}
            tag={"@0x95cc…1485"}
            sui={56}
            token={43}
            percentage={1.89}
            handleAttackModal={() => setIsShowAttackModal(true)}
          />

          <LandCard
            className={
              "absolute top-[97.5%] left-[119rem] transform  -translate-y-[97.5%] max-w-[220px] md:max-w-[230px]"
            }
            image={"/assets/lands/image-8.png"}
            name={"Planet Namek"}
            tag={"@suiyan"}
            sui={42}
            token={30}
            percentage={1.8}
            handleAttackModal={() => setIsShowAttackModal(true)}
          />
        </div>

        <AttackModal
          setIsShowData={setIsShowAttackModal}
          isShowData={isShowAttackModal}
        />

        <Marketplace />
        <WalletHub />
      </div>
    );
  }
};

export default MainGame;
