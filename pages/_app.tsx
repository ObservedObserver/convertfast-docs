import { Analytics } from "@vercel/analytics/react";
import "@/global.css"
export default function MyApp({ Component, pageProps }) {
  return <>
    <Component {...pageProps} />
    <Analytics />
  </>
}