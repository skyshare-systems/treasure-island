"use client";
import React, { useEffect, useRef, useState } from "react";
import WalletHub from "@/components/wallet-hub";
import Loading from "@/components/loading";
import Image from "next/image";
import Marketplace from "@/views/marketplace/page";

const MainGame = () => {
  const [loading, setLoading] = useState(false);

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
      <div className="flex justify-center items-center ">
        <WalletHub />
        <Image
          src={"/assets/map_export.svg"}
          alt={"map"}
          height={1000}
          width={1000}
          unoptimized
          className="w-full"
        />
        <Marketplace />
      </div>
    );
  }
};

export default MainGame;
