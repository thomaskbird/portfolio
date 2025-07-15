'use client';

import '@/app/globals.css'
import 'animate.css'
import {Backdrop, CircularProgress, Container, Fab, ThemeProvider} from "@mui/material";
import {themeDark, themeLight} from "@/app/theme";
import styles from "@/app/page.module.scss";
import Hero from "@/components/Hero/Hero";
import Footer from "@/components/Footer/Footer";
import {useGlobalStore} from "@/store/useGlobalStore";
import {selectIsMobileOpen, selectTheme} from "@/store/selectors/globalStore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import {usePathname} from "next/navigation";
import GlobalCssPriority from "@/components/GlobalCssPriority/GlobalCssPriority";
import { source_sans } from "@/app/fonts";
import cn from "classnames";
import {ReactNode, Suspense} from "react";
import MobileNav from "@/components/MobileNav/MobileNav";
import Script from "next/script";

const pagesWithScrollToTop = ['/', '/work', '/blog', '/resume'];

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  const theme = useGlobalStore(selectTheme);
  const isMobileOpen = useGlobalStore(selectIsMobileOpen);

  const path = usePathname();
  const hasScrollTop = pagesWithScrollToTop.includes(path);

  return (
    <html lang="en">
      <body className={cn(source_sans.variable, theme, isMobileOpen ? styles.locked : '')} suppressHydrationWarning={true}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-B75MXB0NDX"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
        >
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)}
          gtag('js', new Date());
  
          gtag('config', 'G-B75MXB0NDX');
          `}
        </Script>
        <Suspense>
          <GlobalCssPriority>
            <ThemeProvider theme={theme === 'dark' ? themeDark : themeLight}>
              <MobileNav />

              <div
                className={
                cn(
                  styles.contentWrap,
                  theme === 'dark' ? styles.contentWrapDark : styles.contentWrapLight,
                  isMobileOpen ? styles.contentWrapOpen : ''
                )
              }>
                <Backdrop
                  sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                  open={false}
                >
                  <CircularProgress color="inherit" />
                </Backdrop>

                <Container className={styles.overallWrapper} maxWidth={false} disableGutters>
                  <Hero navOnly={true} />
                  {children}
                </Container>

                <Footer />

                {hasScrollTop && (
                  <Fab color="primary" className="backToTop" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
                    <ExpandLessIcon/>
                  </Fab>
                )}
              </div>
            </ThemeProvider>
          </GlobalCssPriority>
        </Suspense>
      </body>
    </html>
  )
}
