import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { fredoka } from "@/public/fonts";

interface IAttackCard {
  title: string;
  value: number | string;
  className: string;
}

const AttackCard = ({ title, value, className }: IAttackCard) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className={cn("ty-descriptions text-neutral-8", fredoka.className)}>
        {title}
      </h1>
      <div className="flex items-center gap-1 p-2">
        <Image src={"/icons/sui.png"} alt={"sui"} height={14} width={14} />
        <p className={cn(className, "attack-value", fredoka.className)}>
          {value}
        </p>
      </div>
    </div>
  );
};

export default AttackCard;
