'use client';

import { Inter } from 'next/font/google'
import './globals.css'
import 'animate.css'
import {Backdrop, CircularProgress, Container, ThemeProvider} from "@mui/material";
import theme from "@/app/theme";
import styles from "@/app/page.module.scss";
import Hero from "@/components/Hero/Hero";
import Footer from "@/components/Footer/Footer";
import {useGlobalStore} from "@/store/useGlobalStore";
import {selectIsLoading} from "@/store/selectors/globalStore";

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const isLoading = useGlobalStore(selectIsLoading);

  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider theme={theme}>
          <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={isLoading}
          >
            <CircularProgress color="inherit" />
          </Backdrop>

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
