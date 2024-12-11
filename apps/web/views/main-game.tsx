"use client";
import React, { useEffect, useRef, useState } from "react";
import WalletHub from "@/components/wallet-hub";
import Loading from "@/components/loading";
import Image from "next/image";
import Marketplace from "@/views/marketplace/page";
import LandCard from "@/components/land-card";
import AttackModal from "./marketplace/attack-modal";

const MainGame = () => {
  const [loading, setLoading] = useState(false);
  const [isShowAttackModal, setIsShowAttackModal] = useState(false);

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
        <WalletHub />

        <div className="relative overflow-y-scroll min-h-[2200px] min-w-[100dvw]">
          <Image
            src={"/assets/background/map.png"}
            alt={"map"}
            height={1000}
            width={1000}
            unoptimized
            className="min-h-[2200px] min-w-[1800px] max-h-[2200px] max-w-[1800px] absolute top-0 left-0"
          />
          <LandCard
            className={
              "absolute top-[49%] left-[28rem] transform  -translate-y-[49%] max-w-[220px] md:max-w-[300px"
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
              "absolute top-[62%] left-[31rem] transform  -translate-y-[62%] max-w-[220px] md:max-w-[240px]"
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
              "absolute top-[50%] left-[57rem] transform  -translate-y-[50%] max-w-[220px] md:max-w-[240px]"
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
              "absolute top-[62%] left-[70rem] transform  -translate-y-[62%] max-w-[220px] md:max-w-[240px]"
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
              "absolute top-[85%] left-[31.5rem] transform  -translate-y-[85%] max-w-[220px] md:max-w-[230px]"
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
              "absolute top-[85.5%] left-[57.2rem] transform  -translate-y-[85.5%] max-w-[220px] md:max-w-[230px]"
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
              "absolute top-[97.5%] left-[70rem] transform  -translate-y-[97.5%] max-w-[220px] md:max-w-[230px]"
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
              "absolute top-[97.5%] left-[95.6rem] transform  -translate-y-[97.5%] max-w-[220px] md:max-w-[230px]"
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
      </div>
    );
  }
};

export default MainGame;
