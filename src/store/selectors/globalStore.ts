import {GlobalStore} from "@/store/types/globalStore";

export const selectIsLoading = (store: GlobalStore) => store.isLoading;

export const selectSetIsLoading = (store: GlobalStore) => store.setIsLoading;

export const selectTheme = (store: GlobalStore) => store.theme;

export const selectSetTheme = (store: GlobalStore) => store.setTheme;
