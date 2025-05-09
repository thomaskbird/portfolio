
import {StateCreator} from 'zustand';
import {GlobalStore} from "@/store/types/globalStore";
import {ListingFormatType} from "@/components/Listings/Listings";

const initialState = {
  format: 'list',
  theme: 'dark',
  isMobileOpen: false
}

export const createGlobalStoreSlice: StateCreator<
  GlobalStore,
  [],
  [],
  GlobalStore
> = (set) => ({
  ...initialState,
  setListingLayout: (format: string) => {
    set((state) => {
      state.format = format;
      return state;
    })
  },
  setTheme: (theme: string) => {
    set((state) => {
      state.theme = theme;
      return state;
    })
  },
  setIsMobileOpen: () => {
    set((state) => {
      state.isMobileOpen = !state.isMobileOpen;
      return state;
    })
  }
})
