
import {StateCreator} from 'zustand';
import {GlobalStore} from "@/store/types/globalStore";
import {ListingFormatType} from "@/components/Listings/Listings";

const initialState = {
  isLoading: false,
  theme: 'dark',
}

export const createGlobalStoreSlice: StateCreator<
  GlobalStore,
  [],
  [],
  GlobalStore
> = (set) => ({
  ...initialState,
  setListingLayout: (format: ListingFormatType) => {
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
  }
})
