export type GlobalStoreState = {
  format: string;
  theme: string;
}

export type GlobalStoreActions = {
  setListingLayout: (format: string) => void;
  setTheme: (theme: string) => void;
}

export type GlobalStore = GlobalStoreState & GlobalStoreActions;
