import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useSelectedLand } from "@/lib/store/selected-land-store";
import { useDashboardModal } from "@/lib/store/dashboard-modal-store";
import { useControls } from "react-zoom-pan-pinch";

interface ILandCard {
  className: string;
  imageClassName: string;
  image: string;
  name: string;
  type: string;
  variant: string;
  tag: string;
  sui: string | number;
  token: string | number;
  percentage: string | number;
}

const LandCard = ({ ...props }: ILandCard) => {
  const { setDashboardCount } = useDashboardModal((state) => state);
  const { setItem } = useSelectedLand((state) => state);
  const { zoomToElement } = useControls();

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
    landClick();
    setDashboardCount(4);
  }

  function landHover() {
    var audio = new Audio("/music/land-hover.mp3");
    audio.play();
  }

  function landClick() {
    var audio = new Audio("/music/land-click.mp3");
    audio.play();
  }
  return (
    <button
      onMouseEnter={landHover}
      id={props.name}
      onClick={() =>
        handleViewData(
          props.name,
          props.tag,
          props.type,
          props.variant,
          props.image,
          props.sui,
          props.token,
          props.percentage
        )
      }
      className={cn(
        props.className,
        "relative flex flex-col items-center max-w-[200px]  cursor-pointer duration-300 ease-out"
      )}
    >
      <Image
        src={props.image}
        alt={props.name}
        height={70}
        width={70}
        className={cn(props.imageClassName)}
        unoptimized
      />
    </button>
  );
};

export default LandCard;
