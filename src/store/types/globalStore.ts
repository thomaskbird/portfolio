export type GlobalStoreState = {
  isLoading: boolean;
  theme: string;
}

export type GlobalStoreActions = {
  setIsLoading: (isLoading: boolean) => void;
  setTheme: (theme: string) => void;
}

export type GlobalStore = GlobalStoreState & GlobalStoreActions;
