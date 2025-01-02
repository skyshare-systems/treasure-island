"use client";
import React, { useEffect, useRef, useState } from "react";
import Loading from "@/components/loading";
import LandCard from "@/components/land-card";
import {
  TransformWrapper,
  TransformComponent,
  useControls,
} from "react-zoom-pan-pinch";
import WalletHub from "@/components/wallet-hub";
import Marketplace from "./marketplace/page";

const MainGame = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative flex justify-center items-center">
      {loading && <Loading />}

      <TransformWrapper
        initialScale={2}
        initialPositionX={0}
        initialPositionY={0}
        centerOnInit
      >
        {({ zoomIn, zoomOut, resetTransform, centerView, ...rest }) => (
          <>
            <WalletHub />
            <Marketplace />

            <TransformComponent>
              <div className="grid grid-cols-8 h-screen w-screen lg:w-[100dvw] max-w-[1600px] px-[5rem]">
                {/* row 1  */}
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full  flex justify-center items-center" />
                <div className=" max-w-[200px] max-h-[200px]  bg-[#1c82f7] flex justify-center items-center">
                  <LandCard
                    // className={"absolute top-[2.5rem] left-[23rem] md:left-[43rem]"}
                    className=""
                    image={"/assets/lands/image-1.png"}
                    name={"Konoha"}
                    tag={"@naruto"}
                    sui={31}
                    token={12}
                    percentage={1.4}
                    imageClassName={
                      "max-w-[200px] lg:max-w-[90px] w-full flex justify-center items-center"
                    }
                    allign={"right-top"}
                    dialogPosition={"top-[1rem] -left-[8rem]"}
                    type={"A"}
                    variant={"platinum"}
                  />
                </div>
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] flex justify-center items-center"></div>
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center">
                  <LandCard
                    className={""}
                    image={"/assets/lands/image-3.png"}
                    name={"Planet Namek"}
                    tag={"@suiyan"}
                    sui={42}
                    token={30}
                    percentage={1.8}
                    imageClassName={
                      "max-w-[200px] lg:max-w-[90px] w-full flex justify-center items-center"
                    }
                    allign={"left-top"}
                    dialogPosition={"top-[1rem] left-[4rem]"}
                    type={"A"}
                    variant={"platinum"}
                  />
                </div>
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center" />
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full  flex justify-center items-center" />
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full  flex justify-center items-center" />
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full  flex justify-center items-center" />
                {/* row 2  */}
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full  flex justify-center items-center" />
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full  flex justify-center items-center"></div>
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] flex justify-center items-center">
                  <LandCard
                    // className={"absolute top-[2.5rem] left-[49rem] md:left-[69rem]"}
                    className="max-w-[220px] flex justify-center items-center"
                    image={"/assets/lands/image-2.png"}
                    name={"Mirai Land"}
                    tag={"@studiomirai"}
                    sui={80}
                    token={47}
                    percentage={1.1}
                    imageClassName={
                      "max-w-[200px] lg:max-w-[90px] w-full flex justify-center items-center"
                    }
                    allign={"left-top"}
                    dialogPosition={"top-[1rem] left-[4rem]"}
                    type={"A"}
                    variant={"platinum"}
                  />
                </div>
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full  flex justify-center items-center" />
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full  flex justify-center items-center" />
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full  flex justify-center items-center" />
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full  flex justify-center items-center" />
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full  flex justify-center items-center" />
                {/* row 3  */}
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full  flex justify-center items-center" />
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full  flex justify-center items-center">
                  <LandCard
                    className={""}
                    image={"/assets/lands/image-4.png"}
                    name={"Pink Panther"}
                    tag={"0x1412…4120"}
                    sui={37}
                    token={22}
                    percentage={1.3}
                    imageClassName={"max-w-[200px] lg:max-w-[90px] w-full"}
                    allign={"left-top"}
                    dialogPosition={"top-[1rem] left-[4rem]"}
                    type={"A"}
                    variant={"platinum"}
                  />{" "}
                </div>
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center" />
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center" />
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center" />
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center" />
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center">
                  <LandCard
                    // className={"absolute top-[28.4rem] left-[87rem] md:left-[107rem]"}
                    className=""
                    image={"/assets/lands/image-12.png"}
                    name={"Loki's Hideout"}
                    tag={"@wallstreetbets"}
                    sui={12}
                    token={6}
                    percentage={1.4}
                    imageClassName={"max-w-[200px] lg:max-w-[90px] w-full"}
                    allign={"top"}
                    dialogPosition={"top-[3rem]"}
                    type={"C"}
                    variant={"emerald"}
                  />{" "}
                </div>
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center" />
                {/* row 4 */}
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center">
                  <LandCard
                    // className={"absolute top-[42rem] left-[10rem] md:left-[30rem]"}
                    className="hover:z-[3]"
                    image={"/assets/lands/image-5.png"}
                    name={"Sacred Land of Japan"}
                    tag={"@japanesegovernment"}
                    sui={194}
                    token={39}
                    percentage={2.57}
                    imageClassName={"max-w-[200px] lg:max-w-[90px] w-full"}
                    allign={"left-top"}
                    dialogPosition={"top-[1rem] left-[4rem]"}
                    type={"A"}
                    variant={"platinum"}
                  />{" "}
                </div>
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center" />
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center" />
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center" />
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center" />
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center">
                  <LandCard
                    // className={"absolute top-[40.5rem] left-[75rem] md:left-[95rem]"}
                    className=""
                    image={"/assets/lands/image-13.png"}
                    name={"Emerald City of Oz"}
                    tag={"@mystenlabs"}
                    sui={12}
                    token={6}
                    percentage={1.4}
                    imageClassName={"max-w-[200px] lg:max-w-[90px] w-full"}
                    allign={"top"}
                    dialogPosition={"top-[3rem]"}
                    type={"C"}
                    variant={"emerald"}
                  />{" "}
                </div>
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center" />
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center" />
                {/* row 5 */}
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center" />
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center">
                  <LandCard
                    // className={"absolute top-[54rem] left-[23rem] md:left-[43rem]"}
                    className="hover:z-[2]"
                    image={"/assets/lands/image-6.png"}
                    name={"Cherry Land"}
                    tag={"@wara"}
                    sui={88}
                    token={12}
                    percentage={1.14}
                    imageClassName={"max-w-[200px] lg:max-w-[90px] w-full"}
                    allign={"right-top"}
                    dialogPosition={"top-[1rem] -left-[8rem]"}
                    type={"A"}
                    variant={"platinum"}
                  />{" "}
                </div>
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center">
                  <LandCard
                    // className={
                    //   "absolute top-[54rem] left-[36rem] md:left-[56rem] hover:z-[2]"
                    // }
                    className="hover:z-[2]"
                    image={"/assets/lands/image-7.png"}
                    name={"AEON land"}
                    tag={"@000"}
                    sui={144}
                    token={53}
                    percentage={2.01}
                    imageClassName={"max-w-[200px] lg:max-w-[90px] w-full"}
                    allign={"bottom"}
                    dialogPosition={"-top-[8rem]"}
                    type={"A"}
                    variant={"platinum"}
                  />{" "}
                </div>
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center" />
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center">
                  <LandCard
                    // className={"absolute top-[54rem] left-[62rem] md:left-[82rem]"}
                    className=""
                    image={"/assets/lands/image-14.png"}
                    name={"Shang Chi"}
                    tag={"@kotaro"}
                    sui={12}
                    token={6}
                    percentage={1.4}
                    imageClassName={"max-w-[200px] lg:max-w-[90px] w-full"}
                    allign={"top"}
                    dialogPosition={"top-[3rem]"}
                    type={"D"}
                    variant={"gold"}
                  />{" "}
                </div>
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center" />
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center" />
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center" />
                {/* row 6 */}
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center" />
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center" />
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center">
                  <LandCard
                    // className={
                    //   "absolute top-[67rem] left-[36rem] md:left-[56rem]"
                    // }
                    className=""
                    image={"/assets/lands/image-8.png"}
                    name={"Panda Express"}
                    tag={"@chinesekitchen"}
                    sui={31}
                    token={12}
                    percentage={1.1}
                    imageClassName={"max-w-[200px] lg:max-w-[90px] w-full"}
                    allign={"top"}
                    dialogPosition={"top-[3rem]"}
                    type={"D"}
                    variant={"gold"}
                  />{" "}
                </div>
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center" />
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center" />
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center">
                  <LandCard
                    // className={
                    //   "absolute top-[67rem] left-[74.5rem] md:left-[94.5rem]"
                    // }
                    className=""
                    image={"/assets/lands/image-15.png"}
                    name={"Bambooman"}
                    tag={"@suifrens"}
                    sui={12}
                    token={6}
                    percentage={1.4}
                    imageClassName={"max-w-[200px] lg:max-w-[90px] w-full"}
                    allign={"top"}
                    dialogPosition={"top-[3rem]"}
                    type={"D"}
                    variant={"gold"}
                  />{" "}
                </div>
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center" />
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center" />
                {/* row 7 */}
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center">
                  <LandCard
                    // className={
                    //   "absolute top-[79.7rem] left-[10rem] md:left-[30rem]"
                    // }
                    className=""
                    image={"/assets/lands/image-9.png"}
                    name={"Zen's Tropics V2"}
                    tag={"@zenfrogs"}
                    sui={12}
                    token={6}
                    percentage={1.4}
                    imageClassName={"max-w-[200px] lg:max-w-[90px] w-full"}
                    allign={"top"}
                    dialogPosition={"top-[3rem]"}
                    type={"B"}
                    variant={"diamond"}
                  />{" "}
                </div>
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center">
                  <LandCard
                    // className={
                    //   "absolute top-[79.7rem] left-[23rem] md:left-[43rem]"
                    // }
                    className=""
                    image={"/assets/lands/image-10.png"}
                    name={"Ancient Egypt V2"}
                    tag={"@adeniyi"}
                    sui={12}
                    token={6}
                    percentage={1.4}
                    imageClassName={"max-w-[200px] lg:max-w-[90px] w-full"}
                    allign={"top"}
                    dialogPosition={"top-[3rem]"}
                    type={"B"}
                    variant={"diamond"}
                  />{" "}
                </div>
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center" />
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center" />
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center" />
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center" />
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center" />
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center" />
                {/* row 8  */}
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center" />
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center" />
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center">
                  <LandCard
                    // className={
                    //   "absolute top-[92.3rem] left-[36rem] md:left-[56rem]"
                    // }
                    className=""
                    image={"/assets/lands/image-11.png"}
                    name={"Zen's Tropics"}
                    tag={"@zenfrogs"}
                    sui={12}
                    token={6}
                    percentage={1.4}
                    imageClassName={"max-w-[200px] lg:max-w-[90px] w-full"}
                    allign={"top"}
                    dialogPosition={"top-[3rem]"}
                    type={"D"}
                    variant={"gold"}
                  />{" "}
                </div>
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center" />
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center" />
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center" />
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center" />
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center" />
                {/* row 9  */}
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center" />
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center" />
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center" />
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center" />
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center">
                  <LandCard
                    // className={
                    //   "absolute top-[92.5rem] left-[61.5rem] md:left-[81.5rem]"
                    // }
                    className=""
                    image={"/assets/lands/image-16.png"}
                    name={"Pls dont attacc me"}
                    tag={"@wade"}
                    sui={12}
                    token={6}
                    percentage={1.4}
                    imageClassName={"max-w-[200px] lg:max-w-[90px] w-full"}
                    allign={"top"}
                    dialogPosition={"top-[3rem]"}
                    type={"D"}
                    variant={"gold"}
                  />{" "}
                </div>
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center" />
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center" />
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center" />
                {/* row 10 */}
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center" />
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center" />
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center" />
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center" />
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center" />
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center">
                  <LandCard
                    // className={
                    //   "absolute top-[105.5rem] left-[74.5rem] md:left-[94.5rem]"
                    // }
                    className=""
                    image={"/assets/lands/image-17.png"}
                    name={"KungFu Panda"}
                    tag={"0x95cc…1485"}
                    sui={12}
                    token={6}
                    percentage={1.4}
                    imageClassName={"max-w-[200px] lg:max-w-[90px] w-full"}
                    allign={"bottom"}
                    dialogPosition={"-top-[5rem]"}
                    type={"D"}
                    variant={"gold"}
                  />{" "}
                </div>
                <div className="max-w-[200px] max-h-[200px]  bg-[#1c82f7] h-full w-full flex justify-center items-center">
                  <LandCard
                    // className={
                    //   "absolute top-[105.5rem] left-[100rem] md:left-[120rem]"
                    // }
                    className=""
                    image={"/assets/lands/image-18.png"}
                    name={"KungFu Panda 2"}
                    tag={"0x95cc…1485"}
                    sui={12}
                    token={6}
                    percentage={1.4}
                    imageClassName={"max-w-[200px] lg:max-w-[90px] w-full"}
                    allign={"bottom"}
                    dialogPosition={"-top-[5rem]"}
                    type={"D"}
                    variant={"gold"}
                  />{" "}
                </div>
              </div>
            </TransformComponent>
          </>
        )}
      </TransformWrapper>
    </div>
  );
};

export default MainGame;
