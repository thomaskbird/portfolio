import {createGlobalStoreSlice} from "@/store/slices/createGlobalStoreSlice";
import {createJSONStorage, persist} from "zustand/middleware";
import {create} from "zustand";

export const useGlobalStore = create(persist(
  createGlobalStoreSlice,
  {
    name: 'global-storage',
    storage: createJSONStorage(() => sessionStorage),
  }
));
