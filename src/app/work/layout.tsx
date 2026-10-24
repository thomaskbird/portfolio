import type {Metadata} from "next";
import {ReactNode} from "react";
import config from "@/config/sites";

export const metadata: Metadata = {
  title: 'Work',
  description: config.meta.pages.work,
  alternates: { canonical: '/work' },
};

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
