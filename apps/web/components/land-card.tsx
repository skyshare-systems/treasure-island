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
    setDashboardCount(4);
  }
  return (
    <button
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
        "relative flex flex-col items-center max-w-[200px] hover:brightness-125 hover:scale-105 active:scale-100 cursor-pointer duration-300 ease-out"
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
