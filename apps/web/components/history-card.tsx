import React from "react";

interface IHistoryCard {
  icon: React.ReactNode;
  title: string;
  tag: string;
  time: string | number;
  textColor: string;
  bgColor: string;
}

const HistoryCard = ({ ...props }: IHistoryCard) => {
  return (
    <div className="flex flex-wrap items-start gap-2 p-2 w-full justify-between">
      <div className="flex flex-wrap items-start gap-2">
        {props.icon}

        <div className="flex flex-wrap items-start gap-1 max-w-[280px]">
          <h1 className={`ty-descriptions ${props.textColor}`}>
            {props.title}
          </h1>
          <div className={`rounded-lg p-1 ${props.bgColor} bg-opacity-[0.08]`}>
            <h1 className={`ty-subtext ${props.textColor}`}>{props.tag}</h1>
          </div>
        </div>
      </div>

      <h1 className="ty-subtext text-neutral-5">{props.time}</h1>
    </div>
  );
};

export default HistoryCard;
