import type {Metadata} from "next";
import {ReactNode} from "react";
import config from "@/config/sites";

export const metadata: Metadata = {
  title: 'Search',
  description: config.meta.pages.search,
  alternates: { canonical: '/search' },
  robots: { index: false, follow: true },
};

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
