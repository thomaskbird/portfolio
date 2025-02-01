'use client';

import '@/app/globals.css'
import 'animate.css'
import {Backdrop, CircularProgress, Container, Fab, ThemeProvider} from "@mui/material";
import {themeDark, themeLight} from "@/app/theme";
import styles from "@/app/page.module.scss";
import Hero from "@/components/Hero/Hero";
import Footer from "@/components/Footer/Footer";
import {useGlobalStore} from "@/store/useGlobalStore";
import {selectIsLoading, selectTheme} from "@/store/selectors/globalStore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import {usePathname} from "next/navigation";
import GlobalCssPriority from "@/components/GlobalCssPriority/GlobalCssPriority";
import { source_sans } from "@/app/fonts";
import cn from "classnames";
import { GoogleAnalytics } from '@next/third-parties/google'
import {ReactNode, Suspense} from "react";

const pagesWithScrollToTop = ['/', '/work', '/blog', '/resume'];

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  const isLoading = useGlobalStore(selectIsLoading);
  const theme = useGlobalStore(selectTheme);

  const path = usePathname();
  const hasScrollTop = pagesWithScrollToTop.includes(path);

  const backToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  return (
    <html lang="en">
      <body className={cn(source_sans.variable, theme)} suppressHydrationWarning={true}>
        <Suspense>
          <GlobalCssPriority>
            <ThemeProvider theme={theme === 'dark' ? themeDark : themeLight}>
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
                <Fab color="primary" className="backToTop" onClick={backToTop}>
                  <ExpandLessIcon/>
                </Fab>
              )}
            </ThemeProvider>
          </GlobalCssPriority>
        </Suspense>
      </body>
      <GoogleAnalytics gaId="G-B75MXB0NDX" />
    </html>
  )
}
