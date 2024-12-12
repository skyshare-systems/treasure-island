import { create } from "zustand";
import { persist } from "zustand/middleware";

// Define the Zustand store state
export interface AttackState {
  dashboardCount: number;
  setDashboardCount: (dashboardCount: number) => void;
}

// Create the Zustand store with persistence
export const useDashboardModal = create<AttackState>()(
  // persist(
  (set) => ({
    dashboardCount: 0,
    setDashboardCount: (dashboardCount) => set({ dashboardCount }),
  })
  //   {
  //     name: "land-store", // Key for localStorage
  //   }
  // )
);
