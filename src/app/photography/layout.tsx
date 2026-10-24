import type {Metadata} from "next";
import {ReactNode} from "react";
import config from "@/config/sites";

export const metadata: Metadata = {
  title: 'Photography',
  description: config.meta.pages.photography,
  alternates: { canonical: '/photography' },
};

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
