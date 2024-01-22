
import {StateCreator} from 'zustand';
import {GlobalStore} from "@/store/types/globalStore";

const initialState = {
  isLoading: false
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
  }
})
