"use client";
import MusicIcon from "@/components/icon/music";
import MuteMusicIcon from "@/components/icon/mute-music";
import ZoomIn from "@/components/icon/zoom-in";
import ZoomOut from "@/components/icon/zoom-out";
import { items } from "@/components/items";
import useMusic from "@/hooks/useMusic";
import { useAttackModal } from "@/lib/store/attack-modal-store";
import { useDashboardModal } from "@/lib/store/dashboard-modal-store";
import { useSelectedLand } from "@/lib/store/selected-land-store";
import { cn } from "@/lib/utils";
import { fredoka_moto } from "@/public/fonts";
import { XIcon } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { useControls } from "react-zoom-pan-pinch";

const MinimapGame = () => {
  const [isShowMap, setIsShowMap] = useState(false);
  const { zoomIn, zoomOut, zoomToElement } = useControls();
  const { setItem, item } = useSelectedLand((state) => state);
  const { setDashboardCount } = useDashboardModal((state) => state);
  const { isShowAttackModal, setIsShowAttackModal } = useAttackModal(
    (state) => state
  );

  const {
    isPlaying,
    audioBgMusic,
    audioBgMusicAttack,

    setIsPlaying,
    landHover,
    landClick,
  } = useMusic();

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
      landClick();
      setDashboardCount(4);
    }
  }

  function musicOn() {
    setIsPlaying(true);
    audioBgMusic?.current?.play();
  }

  function musicOff() {
    setIsPlaying(false);
    audioBgMusic?.current?.pause();
  }

  function handleClick() {
    var audio = new Audio("/music/modal-open.mp3");
    audio.play();
    setIsShowMap(!isShowMap);
  }

  function handleClose() {
    var audio = new Audio("/music/modal-close.mp3");
    audio.play();
    setIsShowMap(!isShowMap);
  }

  useEffect(() => {
    if (isShowAttackModal === true) {
      audioBgMusic?.current?.pause();
      setIsPlaying(false);
    }
  }, [isShowAttackModal]);

  return (
    <>
      {isShowMap ? (
        <button
          onClick={handleClick}
          onMouseEnter={() => landHover()}
          onMouseDown={() => landClick()}
          className={cn(
            "fixed top-3 left-3  flex items-center gap-1 p-3 border-2 border-black bg-white rounded-xl z-[3]"
          )}
        >
          <h1 className={cn(fredoka_moto.className, "ty-title text-black")}>
            Map
          </h1>
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
                  onMouseEnter={() => item?.name !== "" && landHover()}
                ></div>
              ))}
            </div>

            <h1 className={cn("map-text absolute top-2 left-2")}>MAP</h1>
            <h1 className="map-text absolute bottom-2 left-2">{item?.name}</h1>
            <div className="absolute top-2 right-2 cursor-pointer rounded-lg  flex items-center justify-center gap-1">
              <button
                onClick={() => zoomIn()}
                onMouseEnter={() => landHover()}
                onMouseDown={() => landClick()}
                className="flex justify-center items-center gap-1 p-2 border bg-white rounded-lg h-5 w-5"
              >
                <ZoomIn />
              </button>
              <button
                onClick={() => zoomOut()}
                onMouseEnter={() => landHover()}
                onMouseDown={() => landClick()}
                className="flex justify-center items-center gap-1 p-2 border bg-white rounded-lg h-5 w-5"
              >
                <ZoomOut />
              </button>
              {isPlaying ? (
                <button
                  className="flex justify-center items-center gap-1 p-2 border bg-white rounded-lg h-5 w-5"
                  onClick={() => musicOff()}
                  onMouseEnter={() => landHover()}
                  onMouseDown={() => landClick()}
                >
                  <MusicIcon className="min-w-[12px]" />
                </button>
              ) : (
                <button
                  className="flex justify-center items-center gap-1 p-2 border bg-white rounded-lg h-5 w-5"
                  onClick={() => musicOn()}
                  onMouseEnter={() => landHover()}
                  onMouseDown={() => landClick()}
                >
                  <MuteMusicIcon className="min-w-[12px]" />
                </button>
              )}

              <button
                onClick={() => handleClose()}
                onMouseEnter={() => landHover()}
                onMouseDown={() => landClick()}
                className="flex justify-center items-center gap-1 p-2 border bg-white rounded-lg h-5 w-5"
              >
                <XIcon className="min-w-[12px]" />
              </button>
            </div>
          </div>

          <audio ref={audioBgMusic} src="/music/in-game-bg-music.mp3" />
        </div>
      )}
    </>
  );
};

export default MinimapGame;
