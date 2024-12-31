import { create } from "zustand";

interface SideBarState {
  isOpenSidebar: boolean;
  setOpenSideBar: (isOpenSidebar: boolean) => void;
}

export const useSideBarStore = create<SideBarState>((set) => ({
  isOpenSidebar: false,
  setOpenSideBar: (isOpenSidebar) => set(() => ({ isOpenSidebar })),
}));
