import type { AppProps } from 'next/app'\nimport '../styles/globals.css'\n\nconst MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />\n}\
\nexport default MyApp