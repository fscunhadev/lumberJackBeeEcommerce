import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Script from 'next/script'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Basic client-side initialization (analytics etc.)
    // placeholder: initialize GA if present
    const ga = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
    if (ga) {
      // dynamic script injection if required
    }
  }, [])

  return (
    <>
      <Head>
        <meta name="theme-color" content="#0F1A04" />
      </Head>

      {/* Google Tag (GA4) - load only if set */}
      {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`} strategy="afterInteractive" />
          <Script id="ga-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', { page_path: window.location.pathname });
            `}
          </Script>
        </>
      )}

      <Component {...pageProps} />
    </>
  )
}

export default MyApp