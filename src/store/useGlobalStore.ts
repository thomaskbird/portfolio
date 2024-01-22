import {createGlobalStoreSlice} from "@/store/slices/createGlobalStoreSlice";
import {immer} from "zustand/middleware/immer";
import {create} from "zustand";

export const useGlobalStore = create(immer(createGlobalStoreSlice));
