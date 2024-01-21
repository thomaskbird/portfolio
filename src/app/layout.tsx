'use client';

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import 'animate.css'
import {Container, ThemeProvider} from "@mui/material";
import theme from "@/app/theme";
import styles from "@/app/page.module.scss";
import Hero from "@/components/Hero/Hero";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider theme={theme}>
          <Container className={styles.overallWrapper} maxWidth={false} disableGutters>
            <Hero navOnly={true} />
            {children}
          </Container>
          
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
