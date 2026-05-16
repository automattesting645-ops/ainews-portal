type EventName = 'page_view' | 'search' | 'newsletter_signup' | 'tool_click' | 'video_click' | 'guide_read' | 'course_interest'

interface AnalyticsEvent {
  name: EventName
  properties?: Record<string, string | number | boolean>
}

const ANALYTICS_KEY = 'ainews_analytics_events'

export function trackEvent(name: EventName, properties?: Record<string, string | number | boolean>) {
  const event: AnalyticsEvent = { name, properties }

  if (typeof window !== 'undefined') {
    try {
      const stored = localStorage.getItem(ANALYTICS_KEY)
      const events: AnalyticsEvent[] = stored ? JSON.parse(stored) : []
      events.push({ ...event, properties: { ...properties, timestamp: Date.now() } })
      localStorage.setItem(ANALYTICS_KEY, JSON.stringify(events.slice(-100)))
    } catch {}

    if (typeof (window as any).gtag === 'function') {
      ;(window as any).gtag('event', name, properties)
    }
  }
}

export function getStoredEvents(): AnalyticsEvent[] {
  if (typeof window === 'undefined') return []
  try {
    const stored = localStorage.getItem(ANALYTICS_KEY)
    return stored ? JSON.parse(stored) : []
  } catch { return [] }
}

export function clearStoredEvents() {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(ANALYTICS_KEY)
  }
}