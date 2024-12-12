import { create } from "zustand";
import { persist } from "zustand/middleware";

// Define the Zustand store state
export interface SelectedLandState {
  isShowSelectedLand: boolean;
  setIsShowSelectedLand: (isShowSelectedLand: boolean) => void;
}

// Create the Zustand store with persistence
export const useSelectedLandModal = create<SelectedLandState>()(
  // persist(
  (set) => ({
    isShowSelectedLand: false,
    setIsShowSelectedLand: (isShowSelectedLand) => set({ isShowSelectedLand }),
  })
  //   {
  //     name: "land-store", // Key for localStorage
  //   }
  // )
);
