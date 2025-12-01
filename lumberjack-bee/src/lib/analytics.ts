// Helper to track events (GA + Pixel)
export function trackEvent(name: string, params?: Record<string, any>) {
  try {
    if (typeof window !== 'undefined') {
      // GA4
      // @ts-ignore
      if (window.gtag) {
        // @ts-ignore
        window.gtag('event', name, params || {})
      }
      // Pixel via fbq
      // @ts-ignore
      if (window.fbq) {
        // @ts-ignore
        window.fbq('trackCustom', name, params || {})
      }
    }
  } catch (e) {
    console.warn('Track event error', e)
  }
}