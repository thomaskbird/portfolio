import type {Metadata} from "next";
import {ReactNode} from "react";
import config from "@/config/sites";

export const metadata: Metadata = {
  title: 'Privacy',
  description: config.meta.pages.privacy,
  alternates: { canonical: '/privacy' },
};

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
