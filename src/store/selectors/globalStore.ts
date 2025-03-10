import {GlobalStore} from "@/store/types/globalStore";

export const selectListingFormat = (store: GlobalStore) => store.format;

export const selectSetListingLayout = (store: GlobalStore) => store.setListingLayout;

export const selectTheme = (store: GlobalStore) => store.theme;

export const selectSetTheme = (store: GlobalStore) => store.setTheme;

export const selectIsMobileOpen = (store: GlobalStore) => store.isMobileOpen;

export const selectSetIsMobileOpen = (store: GlobalStore) => store.setIsMobileOpen;
