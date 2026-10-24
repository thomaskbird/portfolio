import type {Metadata} from "next";
import {ReactNode} from "react";
import config from "@/config/sites";

export const metadata: Metadata = {
  title: 'Resume',
  description: config.meta.pages.resume,
  alternates: { canonical: '/resume' },
};

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
