import { useEffect } from 'react'
import { useRouter } from 'next/router'

const SELECTOR = '.card, .team-card, .day-card, .board-card, .gallery-item, .sport-card, .news-card'

export function useScrollReveal() {
  const router = useRouter()

  useEffect(() => {
    function init() {
      const els = document.querySelectorAll(SELECTOR)
      const vh = window.innerHeight

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('revealed')
            observer.unobserve(e.target)
          }
        })
      }, { threshold: 0.08 })

      els.forEach(el => {
        if (el.classList.contains('revealed')) return
        const rect = el.getBoundingClientRect()
        if (rect.top > vh) {
          el.classList.add('pre-reveal')
          observer.observe(el)
        }
      })

      return () => observer.disconnect()
    }

    const cleanup = init()
    return cleanup
  }, [router.pathname])
}
