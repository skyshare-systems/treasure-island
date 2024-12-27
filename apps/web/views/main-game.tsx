"use client";
import React, { useEffect, useRef, useState } from "react";
import WalletHub from "@/components/wallet-hub";
import Loading from "@/components/loading";
import Image from "next/image";
import Marketplace from "@/views/marketplace/page";
import LandCard from "@/components/land-card";
import AttackModal from "./marketplace/attack-modal";
import { useDashboardModal } from "@/lib/store/dashboard-modal-store";
import { useDraggable } from "react-use-draggable-scroll";

const MainGame = () => {
  const [loading, setLoading] = useState(false);
  const ref =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  const { events } = useDraggable(ref, {
    applyRubberBandEffect: true,
    isMounted: true,
    decayRate: 0.96,
  });

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      {...events}
      ref={ref}
      className="relative min-h-[100dvh] min-w-[100dvw] flex justify-center items-center overflow-auto scrollbar-hide"
    >
      <Image
        src={"/assets/background/map-v2.png"}
        alt={"map"}
        height={1000}
        width={1000}
        unoptimized
        className="min-h-[1200px] min-w-[1800px] max-h-[2200px] max-w-[1800px] absolute top-5 left-[4rem] md:left-[24rem]"
      />
      {loading && <Loading />}

      {/* type a  */}

      <LandCard
        className={"absolute top-[2.5rem] left-[23rem] md:left-[43rem]"}
        image={"/assets/lands/image-1.png"}
        name={"Konoha"}
        tag={"@naruto"}
        sui={31}
        token={12}
        percentage={1.4}
        imageClassName={"max-w-[220px]"}
      />

      <LandCard
        className={"absolute top-[2.5rem] left-[49rem] md:left-[69rem]"}
        image={"/assets/lands/image-2.png"}
        name={"Mirai Land"}
        tag={"@studiomirai"}
        sui={80}
        token={47}
        percentage={1.1}
        imageClassName={"max-w-[220px]"}
      />

      <LandCard
        className={"absolute top-[15rem] left-[35.3rem] md:left-[55.8rem]"}
        image={"/assets/lands/image-3.png"}
        name={"Planet Namek"}
        tag={"@suiyan"}
        sui={42}
        token={30}
        percentage={1.8}
        imageClassName={"max-w-[220px]"}
      />

      <LandCard
        className={"absolute top-[28rem] left-[23rem] md:left-[43rem]"}
        image={"/assets/lands/image-4.png"}
        name={"Pink Panther"}
        tag={"0x1412…4120"}
        sui={37}
        token={22}
        percentage={1.3}
        imageClassName={"max-w-[220px]"}
      />

      <LandCard
        className={"absolute top-[42rem] left-[10rem] md:left-[30rem]"}
        image={"/assets/lands/image-5.png"}
        name={"Sacred Land of Japan"}
        tag={"@japanesegovernment"}
        sui={194}
        token={39}
        percentage={2.57}
        imageClassName={"max-w-[220px]"}
      />

      <LandCard
        className={"absolute top-[54rem] left-[23rem] md:left-[43rem]"}
        image={"/assets/lands/image-6.png"}
        name={"Cherry Land"}
        tag={"@wara"}
        sui={88}
        token={12}
        percentage={1.14}
        imageClassName={"max-w-[220px]"}
      />

      <LandCard
        className={
          "absolute top-[54rem] left-[36rem] md:left-[56rem] hover:z-[2]"
        }
        image={"/assets/lands/image-7.png"}
        name={"AEON Land"}
        tag={"@000"}
        sui={144}
        token={53}
        percentage={2.01}
        imageClassName={"max-w-[220px]"}
      />

      {/* type b */}

      <LandCard
        className={"absolute top-[67rem] left-[36rem] md:left-[56rem]"}
        image={"/assets/lands/image-8.png"}
        name={"Panda Express"}
        tag={"@chinesekitchen"}
        sui={31}
        token={12}
        percentage={1.1}
        imageClassName={"max-w-[220px] md:max-w-[220px]"}
      />

      {/* Mangrove */}
      <LandCard
        className={"absolute top-[79.7rem] left-[10rem] md:left-[30rem]"}
        image={"/assets/lands/image-9.png"}
        name={"Zen’s Tropics"}
        tag={"@zenfrogs"}
        sui={12}
        token={6}
        percentage={1.4}
        imageClassName={"max-w-[220px] md:max-w-[220px]"}
      />

      <LandCard
        className={"absolute top-[79.7rem] left-[23rem] md:left-[43rem]"}
        image={"/assets/lands/image-10.png"}
        name={"Ancient Egypt"}
        tag={"@adeniyi"}
        sui={12}
        token={6}
        percentage={1.4}
        imageClassName={"max-w-[220px] md:max-w-[220px]"}
      />

      <LandCard
        className={"absolute top-[92.3rem] left-[36rem] md:left-[56rem]"}
        image={"/assets/lands/image-11.png"}
        name={"Zen’s Tropics"}
        tag={"@zenfrogs"}
        sui={12}
        token={6}
        percentage={1.4}
        imageClassName={"max-w-[220px] md:max-w-[220px]"}
      />

      {/* Diamond Ice */}

      <LandCard
        className={"absolute top-[28.4rem] left-[87rem] md:left-[107rem]"}
        image={"/assets/lands/image-12.png"}
        name={"Loki's Hideout"}
        tag={"@wallstreetbets"}
        sui={12}
        token={6}
        percentage={1.4}
        imageClassName={"max-w-[220px] md:max-w-[220px]"}
      />

      <LandCard
        className={"absolute top-[40.5rem] left-[75rem] md:left-[95rem]"}
        image={"/assets/lands/image-13.png"}
        name={"Emerald City of Oz"}
        tag={"@mystenlabs"}
        sui={12}
        token={6}
        percentage={1.4}
        imageClassName={"max-w-[220px] md:max-w-[220px]"}
      />

      <LandCard
        className={"absolute top-[54rem] left-[62rem] md:left-[82rem]"}
        image={"/assets/lands/image-14.png"}
        name={"Shang Chi"}
        tag={"@kotaro"}
        sui={12}
        token={6}
        percentage={1.4}
        imageClassName={"max-w-[220px] md:max-w-[220px]"}
      />

      <LandCard
        className={"absolute top-[67rem] left-[74.5rem] md:left-[94.5rem]"}
        image={"/assets/lands/image-15.png"}
        name={"Bambooclat"}
        tag={"@suifrens"}
        sui={12}
        token={6}
        percentage={1.4}
        imageClassName={"max-w-[220px] md:max-w-[220px]"}
      />

      <LandCard
        className={"absolute top-[92.5rem] left-[61.5rem] md:left-[81.5rem]"}
        image={"/assets/lands/image-16.png"}
        name={"Pls dont attacc me"}
        tag={"@wade"}
        sui={12}
        token={6}
        percentage={1.4}
        imageClassName={"max-w-[220px] md:max-w-[220px]"}
      />

      <LandCard
        className={"absolute top-[105.5rem] left-[74.5rem] md:left-[94.5rem]"}
        image={"/assets/lands/image-17.png"}
        name={"KungFu Panda"}
        tag={"0x95cc…1485"}
        sui={12}
        token={6}
        percentage={1.4}
        imageClassName={"max-w-[220px] md:max-w-[220px]"}
      />

      <LandCard
        className={"absolute top-[105.5rem] left-[100rem] md:left-[120rem]"}
        image={"/assets/lands/image-18.png"}
        name={"KungFu Panda 2"}
        tag={"0x95cc…1485"}
        sui={12}
        token={6}
        percentage={1.4}
        imageClassName={"max-w-[220px] md:max-w-[220px]"}
      />
    </div>
  );
};

export default MainGame;
