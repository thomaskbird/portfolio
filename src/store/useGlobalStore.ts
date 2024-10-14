import {createGlobalStoreSlice} from "@/store/slices/createGlobalStoreSlice";
import {createJSONStorage, persist} from "zustand/middleware";
import {create} from "zustand";
import {immer} from "zustand/middleware/immer";

export const useGlobalStore = create(persist(
  immer(createGlobalStoreSlice),
  {
    name: 'global-storage',
    storage: createJSONStorage(() => sessionStorage),
  }
));
