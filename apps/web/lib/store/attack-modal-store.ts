import { create } from "zustand";
import { persist } from "zustand/middleware";

// Define the Zustand store state
export interface AttackState {
  isShowAttackModal: boolean;
  setIsShowAttackModal: (isShowAttackModal: boolean) => void;
}

// Create the Zustand store with persistence
export const useAttackModal = create<AttackState>()(
  // persist(
  (set) => ({
    isShowAttackModal: false,
    setIsShowAttackModal: (isShowAttackModal) => set({ isShowAttackModal }),
  })
  //   {
  //     name: "land-store", // Key for localStorage
  //   }
  // )
);
