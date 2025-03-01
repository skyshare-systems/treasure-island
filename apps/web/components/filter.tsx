import useMusic from "@/hooks/useMusic";
import { cn } from "@/lib/utils";
import { fredoka_moto } from "@/public/fonts";
import React from "react";

interface IFilter {
  filterData: any;
  setSelectedFilter: any;
  selectedFilter: string;
}

const Filter = ({ filterData, selectedFilter, setSelectedFilter }: IFilter) => {
  const { landHover, landClick } = useMusic();
  return (
    <div className="p-1 flex flex-wrap justify-center md:justify-between items-center gap-2 w-full bg-white rounded-lg">
      {filterData.map((data, index) => {
        return (
          <button
            onMouseEnter={() => landHover()}
            onMouseDown={() => landClick()}
            onClick={() => setSelectedFilter(data.name)}
            key={index}
            className={cn(
              fredoka_moto.className,
              "flex items-center gap-2 p-2 hover:bg-blue-1 text-blue-1 hover:text-white ty-title self-stretch grow",
              "ease-out duration-300 rounded-lg",
              `${selectedFilter === data.name ? "bg-blue-1 text-white" : "bg-transparent"}`
            )}
          >
            {data.name} {data.quantity}
          </button>
        );
      })}
    </div>
  );
};

export default Filter;
