import { cn } from "@/lib/utils";
import { fredoka } from "@/public/fonts";
import React from "react";

interface IFilter {
  filterData: any;
  setSelectedFilter: any;
  selectedFilter: string;
}

const Filter = ({ filterData, selectedFilter, setSelectedFilter }: IFilter) => {
  return (
    <div className="p-1 flex flex-wrap items-center gap-2">
      {filterData.map((data, index) => {
        return (
          <button
            onClick={() => setSelectedFilter(data.name)}
            key={index}
            className={cn(
              fredoka.className,
              "flex items-center gap-2 p-2 hover:bg-blue-1 text-blue-1 hover:text-white ty-title",
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
