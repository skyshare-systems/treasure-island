"use client";
import ZoomIn from "@/components/icon/zoom-in";
import ZoomOut from "@/components/icon/zoom-out";
import { items } from "@/components/items";
import { useDashboardModal } from "@/lib/store/dashboard-modal-store";
import { useSelectedLand } from "@/lib/store/selected-land-store";
import { cn } from "@/lib/utils";
import { fredoka } from "@/public/fonts";
import { XIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useControls } from "react-zoom-pan-pinch";
import dynamic from "next/dynamic";

const MinimapGame = () => {
  const [isShowMap, setIsShowMap] = useState(false);
  const { zoomIn, zoomOut, zoomToElement } = useControls();
  const { setItem, item } = useSelectedLand((state) => state);
  const { setDashboardCount } = useDashboardModal((state) => state);

  const gridContainerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)", // 13 columns
    gridTemplateRows: "repeat(12, 1fr)", // 12 rows
    gap: "2px", // Space between grid items
  };

  const gridItems = Array.from({ length: 12 }, (_, index) => index);

  function handleViewData(
    name,
    tag,
    type,
    variant,
    image,
    sui,
    token,
    percentage
  ) {
    setItem({
      name,
      tag,
      type,
      variant,
      image,
      sui,
      token,
      percentage,
    });
    zoomToElement(name);
    if (name !== "") {
      setDashboardCount(4);
    }
  }

  return (
    <>
      {isShowMap ? (
        <button
          onClick={() => setIsShowMap(!isShowMap)}
          className={cn(
            "fixed top-3 left-3  flex items-center gap-1 p-3 border-2 border-black bg-white rounded-xl z-[3]"
          )}
        >
          <h1 className={cn(fredoka.className, "ty-title text-black")}>Map</h1>
        </button>
      ) : (
        <div className="fixed top-3 left-3 flex justify-center items-center z-[9999] p-2 bg-[#1c82f7] rounded-2xl">
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
                  onClick={() =>
                    handleViewData(
                      item.name,
                      item.tag,
                      item.type,
                      item.variant,
                      item.image,
                      item.sui,
                      item.token,
                      item.percentage
                    )
                  }
                ></div>
              ))}
            </div>

            <h1 className="map-text absolute top-2 left-2">MAP</h1>
            <h1 className="map-text absolute bottom-2 left-2">{item?.name}</h1>
            <div className="absolute top-2 right-2 cursor-pointer rounded-lg  flex items-center justify-center gap-1">
              <button
                onClick={() => zoomIn()}
                className="flex justify-center items-center gap-1 p-2 border bg-white rounded-lg h-5 w-5"
              >
                <ZoomIn />
              </button>
              <button
                onClick={() => zoomOut()}
                className="flex justify-center items-center gap-1 p-2 border bg-white rounded-lg h-5 w-5"
              >
                <ZoomOut />
              </button>

              <button
                onClick={() => setIsShowMap(!isShowMap)}
                className="flex justify-center items-center gap-1 p-2 border bg-white rounded-lg h-5 w-5"
              >
                <XIcon className="min-w-[12px]" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MinimapGame;
