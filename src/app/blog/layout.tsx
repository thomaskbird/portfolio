import type {Metadata} from "next";
import {ReactNode} from "react";
import config from "@/config/sites";

export const metadata: Metadata = {
  title: 'Blog',
  description: config.meta.pages.blog,
  alternates: { canonical: '/blog' },
};

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
