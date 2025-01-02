import { create } from "zustand";
import { persist } from "zustand/middleware";

//* STATE NG ZUSTAND
export interface ISelectedLand {
  item: SelectedItem | null;
  setItem: (item: SelectedItem) => void;
}

interface SelectedItem {
  name: string;
  tag: string;
  type: string;
  variant: string;
  image: string;
  sui: number | string;
  token: number | string;
  percentage: number | string;
}

export const useSelectedLand = create<ISelectedLand>()(
  persist(
    (set) => ({
      item: null,
      setItem: (item) => set({ item }),
    }),
    {
      name: "selected-land-store",
    }
  )
);
