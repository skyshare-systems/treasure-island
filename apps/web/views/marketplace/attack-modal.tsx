import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import { fredoka } from "@/public/fonts";
import AttackCard from "@/components/attack-card";
import Result from "@/components/result";

interface IAttackModal {
  setIsShowData: any;
  isShowData: boolean;
}

const AttackModal = ({ setIsShowData, isShowData }: IAttackModal) => {
  const [val, setVal] = useState([50]);
  const [result, setResult] = useState(null);

  function determineOutcome() {
    setIsShowData(true);

    const randomNumber = Math.random() * 100;

    if (randomNumber < val[0]) {
      setResult("You Win!");
    } else {
      setResult("You Lose!");
    }

    setIsShowData(true);
  }

  function handleShowResult() {
    setResult(null);
    setIsShowData(false);
  }

  if (isShowData === false) return null;

  return (
    <div className="fixed top-0 left-0 backdrop-blur-lg h-full w-full flex justify-center items-center z-[9999] overflow-hidden">
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
            className="w-full max-w-[380px] pb-[21px] -mt-[4rem]"
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
            />

            <div className="flex flex-wrap justify-evenly items-start gap-2 max-w-[424px] min-h-[230px]">
              <AttackCard
                title={"Island Price"}
                value={"41,859.25"}
                className={"ty-h6"}
              />
              <AttackCard
                title={"Attack Price"}
                value={"39.48"}
                className={"ty-h4"}
              />
              <AttackCard
                title={"Owner Commission"}
                value={"3.94"}
                className={"ty-h6"}
              />
            </div>
            <button
              onClick={() => determineOutcome()}
              className="attack-button py-3 px-8"
            >
              <h1 className={cn(fredoka.className, "ty-h4 attack-text")}>
                Attack!
              </h1>
            </button>
          </div>
        </div>
      )}

      {result && <Result result={result} handleShowResult={handleShowResult} />}
    </div>
  );
};

export default AttackModal;
