import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface IToken {
  name: string;
  image: string;
  address: string;
}

// Define the Zustand store state
export interface TokenState {
  item: IToken;
  setItem: (isShowAttackModal: IToken) => void;
}

export const useToken0 = create<TokenState>()((set) => ({
  item: {
    name: "SUI",
    image: "/assets/swap/sui-token.png",
    address: "0x1...1",
  },
  setItem: (item) => set({ item }),
}));

export const useToken1 = create<TokenState>()((set) => ({
  item: {
    name: "USDC",
    image: "/assets/swap/usdc-token.png",
    address: "0x1...1",
  },
  setItem: (item) => set({ item }),
}));
