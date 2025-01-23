import { create } from "zustand";
import { persist } from "zustand/middleware";

// Define the Zustand store state
export interface LoadingState {
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
}

// Create the Zustand store with persistence
export const useLoading = create<LoadingState>()(
  // persist(
  (set) => ({
    isLoading: false,
    setIsLoading: (isLoading) => set({ isLoading }),
  })
  //   {
  //     name: "land-store", // Key for localStorage
  //   }
  // )
);
