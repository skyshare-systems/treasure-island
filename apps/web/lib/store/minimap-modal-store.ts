import { create } from "zustand";
import { persist } from "zustand/middleware";

// Define the Zustand store state
export interface MinimapState {
  isShowMap: boolean;
  setIsShowMap: (isShowMap: boolean) => void;
}

// Create the Zustand store with persistence
export const useShowMap = create<MinimapState>()(
  // persist(
  (set) => ({
    isShowMap: true,
    setIsShowMap: (isShowMap) => set({ isShowMap }),
  })
  //   {
  //     name: "land-store", // Key for localStorage
  //   }
  // )
);
