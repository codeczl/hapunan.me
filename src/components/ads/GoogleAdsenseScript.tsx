"use client";

import Script from 'next/script'

const googleAdsenseId = process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_ID!;

const GoogleAdsenseScript = () => {
  return (
    <Script
      async 
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8919061004428483"
      crossorigin="anonymous"
    />
  )
}

export default GoogleAdsenseScript
