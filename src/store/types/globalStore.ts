import {ListingFormatType} from "@/components/Listings/Listings";

export type GlobalStoreState = {
  format: ListingFormatType;
  theme: string;
}

export type GlobalStoreActions = {
  setListingLayout: (format: ListingFormatType) => void;
  setTheme: (theme: string) => void;
}

export type GlobalStore = GlobalStoreState & GlobalStoreActions;
