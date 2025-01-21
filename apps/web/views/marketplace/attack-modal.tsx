"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import { fredoka } from "@/public/fonts";
import AttackCard from "@/components/attack-card";
import Result from "@/components/result";
import { useAttackModal } from "@/lib/store/attack-modal-store";
import Loading from "@/components/loading";
import { useDashboardModal } from "@/lib/store/dashboard-modal-store";
import { useSelectedLand } from "@/lib/store/selected-land-store";
import useMusic from "@/hooks/useMusic";

const AttackModal = () => {
  const [val, setVal] = useState([50]);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const { setDashboardCount } = useDashboardModal((state) => state);
  const [muteMusic, setMuteMusic] = useState(false);

  const { isShowAttackModal, setIsShowAttackModal } = useAttackModal(
    (state) => state
  );
  const { item } = useSelectedLand((state) => state);
  const { audioBgMusicAttack } = useMusic();

  function determineOutcome() {
    setIsShowAttackModal(true);
    setLoading(true);
    setMuteMusic(false);
    const randomNumber = Math.random() * 100;

    setTimeout(() => {
      setIsShowAttackModal(false);

      setLoading(false);
      if (randomNumber < val[0]) {
        setResult("You Win!");
        audioBgMusicAttack?.current?.pause();
        var audio = new Audio("/music/you-win.mp3");
        audio.play();
      } else {
        setResult("You Lose!");
        audioBgMusicAttack?.current?.pause();
        var audio = new Audio("/music/you-lost.mp3");
        audio.play();
      }

      setIsShowAttackModal(true);
    }, 2400);
  }

  function handleShowResult() {
    setResult(null);
    setIsShowAttackModal(false);
    setDashboardCount(2);
  }

  function handleCancel() {
    setIsShowAttackModal(false);
  }

  function handleSlide() {
    var audio = new Audio("/music/slider.mp3");
    audio.play();
  }

  if (isShowAttackModal === false) return null;

  return (
    <>
      {loading && <Loading />}
      <audio ref={audioBgMusicAttack} src="/music/on-attack-island-music.mp3" />

      <div className="fixed top-0 left-0 backdrop-blur-lg h-full w-full flex justify-center items-center z-[999999] overflow-hidden">
        {result === null && (
          <div className="flex flex-col items-center justify-center relative w-full max-w-[600px]">
            <Image
              src={"/assets/background/attack-the-island-bg.png"}
              alt={"island"}
              height={1000}
              width={1000}
              className="min-w-[536px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-[1]"
            />
            <Image
              src={"/assets/dashboard/attack-text.png"}
              alt={"Attack The Island"}
              height={154}
              width={380}
              className="w-full max-w-[380px] pb-[21px] -mt-[2rem]"
            />

            <div className="flex flex-col justify-center items-center w-full max-w-[424px] gap-4">
              <div className="rounded-2xl border-2 border-[#482B16] bg-yellow-5 attack-chance p-2 flex flex-col items-center justify-center">
                <h1
                  className={cn(
                    fredoka.className,
                    "ty-descriptions text-blue-1/50"
                  )}
                >
                  Attack Chance
                </h1>
                <h1 className={cn(fredoka.className, "ty-h4 text-blue-1")}>
                  {val}%
                </h1>
              </div>
              <Slider
                defaultValue={val}
                max={100}
                step={1}
                onValueChange={(i) => setVal(i)}
                onClick={handleSlide}
              />

              <div className="flex flex-wrap justify-evenly items-start gap-2 max-w-[424px] min-h-[180px]">
                <AttackCard
                  title={"Island Price"}
                  value={item.sui}
                  className={"ty-h6"}
                />
                <AttackCard
                  title={"Attack Price"}
                  value={item.token}
                  className={"ty-h4"}
                />
                <AttackCard
                  title={"Owner Commission"}
                  value={item.percentage}
                  className={"ty-h6"}
                />
              </div>

              <div className="flex flex-col gap-4 items-center justify-center">
                <button
                  onClick={() => determineOutcome()}
                  className={cn(
                    fredoka.className,
                    "ty-h4 font-bold text-white pt-3 pb-4 px-4 button-layout rounded-[16px] w-full text-center border-4 border-[#000]"
                  )}
                >
                  Attack!
                </button>

                <button
                  onClick={handleCancel}
                  className={cn(
                    fredoka.className,
                    "ty-title pt-3 pb-4 px-4 cancel-layout bg-[#de2800] rounded-[16px] border-4 border-[#000]"
                  )}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {result && (
          <Result
            result={result}
            handleShowResult={handleShowResult}
            attackPercentage={val}
          />
        )}
      </div>
    </>
  );
};

export default AttackModal;
