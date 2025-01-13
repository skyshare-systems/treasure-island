import { items } from "@/components/items";
import React from "react";

const MinimapGame = () => {
  const gridContainerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)", // 13 columns
    gridTemplateRows: "repeat(12, 1fr)", // 12 rows
    gap: "2px", // Space between grid items
  };

  const gridItems = Array.from({ length: 12 }, (_, index) => index);
  return (
    <div className=" fixed top-4 left-4 hidden lg:flex justify-center items-center z-[9999] p-2 bg-[#1c82f7] rounded-2xl">
      <div className="border-4 border-cyan-1 bg-[#489BFA] min-h-[222px] min-w-[222px] rounded-2xl overflow-hidden relative">
        <div style={gridContainerStyle}>
          {gridItems.map((item) => (
            <div
              key={item}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#f9f9f9",
                height: "16px",
                width: "16px",
                borderRadius: "4px",
                border: "1px solid rgba(255, 255, 255, 0.50)",
                opacity: "0.16",
              }}
            ></div>
          ))}
          {items.map((item) => (
            <div
              key={item.id}
              className={`${item.color !== "#f9f9f9" ? "cursor-pointer ease-out duration-300 hover:scale-125 hover:brightness-150" : ""}`}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: item.color,
                height: "16px",
                width: "16px",
                borderRadius: "4px",
                border:
                  item.color !== "#f9f9f9"
                    ? "1px solid rgba(0, 0, 0, 1)"
                    : "1px solid rgba(255, 255, 255, 0.50)",
                opacity: item.color !== "#f9f9f9" ? "1" : "0.16",
              }}
            ></div>
          ))}
        </div>
        <h1 className="map-text absolute top-2 left-2">MAP</h1>
      </div>
    </div>
  );
};

export default MinimapGame;
