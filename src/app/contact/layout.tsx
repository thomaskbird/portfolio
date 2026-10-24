import type {Metadata} from "next";
import {ReactNode} from "react";
import config from "@/config/sites";

export const metadata: Metadata = {
  title: 'Contact',
  description: config.meta.pages.contact,
  alternates: { canonical: '/contact' },
};

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
