export type GlobalStoreState = {
  format: string;
  theme: string;
  isMobileOpen: boolean;
}

export type GlobalStoreActions = {
  setListingLayout: (format: string) => void;
  setTheme: (theme: string) => void;
  setIsMobileOpen: () => void;
}

export type GlobalStore = GlobalStoreState & GlobalStoreActions;
