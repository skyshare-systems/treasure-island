"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "@/lib/utils";

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-[24px] w-full grow overflow-hidden rounded-full bg-[#482B16]">
      <SliderPrimitive.Range className="absolute h-full bg-white drop-shadow-xl" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="block h-10 w-10 bg-[url('/assets/panda.png')] bg-center bg-no-repeat bg-cover" />
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
