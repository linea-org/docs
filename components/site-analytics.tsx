"use client"

import { GoogleAnalytics } from "@next/third-parties/google"
import { useSyncExternalStore } from "react"

const GA_ID = process.env.NEXT_PUBLIC_GA_ID

const subscribe = () => () => {}
const onLiveHost = () =>
  window.location.hostname === "getlinea.app" ||
  window.location.hostname.endsWith(".getlinea.app")

/** Google Analytics only loads on getlinea.app, so localhost and preview builds stay out of the numbers. */
export function SiteAnalytics() {
  const isLiveHost = useSyncExternalStore(subscribe, onLiveHost, () => false)

  return GA_ID && isLiveHost ? <GoogleAnalytics gaId={GA_ID} /> : null
}
