
import {StateCreator} from 'zustand';
import {GlobalStore} from "@/store/types/globalStore";

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
  setIsLoading: (isLoading: boolean) => {
    set((state) => {
      state.isLoading = isLoading;
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
