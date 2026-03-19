import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const BASE_URL = 'https://www.webcrestlabs.com/' // Update to actual domain when live

/**
 * useSEO — Dynamic per-page SEO hook
 *
 * @param {object} options
 * @param {string} options.title         - Page title (will be appended with " | WebCrest Labs")
 * @param {string} options.description  - Meta description (keep ≤ 160 chars)
 * @param {string} options.keywords     - Comma-separated keywords
 * @param {string} [options.ogImage]    - Absolute URL to Open Graph image
 * @param {string} [options.ogType]     - OG type, defaults to 'website'
 * @param {object} [options.jsonLd]     - JSON-LD structured data object
 */
const useSEO = ({
  title,
  description,
  keywords,
  ogImage = `${BASE_URL}og-image.png`,
  ogType = 'website',
  jsonLd = null,
}) => {
  const { pathname } = useLocation()
  const canonicalUrl = `${BASE_URL}${pathname}`
  const fullTitle = `${title} | WebCrest Labs`

  useEffect(() => {
    // ── Title ──────────────────────────────────────────────────────────────
    document.title = fullTitle

    // ── Helper: upsert a <meta> tag ────────────────────────────────────────
    const setMeta = (selector, value, attr = 'content') => {
      let el = document.querySelector(selector)
      if (!el) {
        el = document.createElement('meta')
        const [attrName, attrValue] = selector
          .replace(/^\[/, '')
          .replace(/\]$/, '')
          .split('=')
          .map((s) => s.replace(/"/g, ''))
        el.setAttribute(attrName, attrValue)
        document.head.appendChild(el)
      }
      el.setAttribute(attr, value)
    }

    // ── Helper: upsert a <link> tag ────────────────────────────────────────
    const setLink = (rel, href) => {
      let el = document.querySelector(`link[rel="${rel}"]`)
      if (!el) {
        el = document.createElement('link')
        el.setAttribute('rel', rel)
        document.head.appendChild(el)
      }
      el.setAttribute('href', href)
    }

    // ── Basic Meta ─────────────────────────────────────────────────────────
    setMeta('[name="description"]', description)
    setMeta('[name="keywords"]', keywords)
    setMeta('[name="robots"]', 'index, follow')
    setMeta('[name="author"]', 'WebCrest Labs')

    // ── Canonical ──────────────────────────────────────────────────────────
    setLink('canonical', canonicalUrl)

    // ── Open Graph ─────────────────────────────────────────────────────────
    setMeta('[property="og:title"]', fullTitle, 'content')
    setMeta('[property="og:description"]', description, 'content')
    setMeta('[property="og:url"]', canonicalUrl, 'content')
    setMeta('[property="og:type"]', ogType, 'content')
    setMeta('[property="og:image"]', ogImage, 'content')
    setMeta('[property="og:site_name"]', 'WebCrest Labs', 'content')

    // ── Twitter Cards ──────────────────────────────────────────────────────
    setMeta('[name="twitter:card"]', 'summary_large_image')
    setMeta('[name="twitter:title"]', fullTitle)
    setMeta('[name="twitter:description"]', description)
    setMeta('[name="twitter:image"]', ogImage)
    setMeta('[name="twitter:site"]', '@webcrestlabs')

    // ── JSON-LD Structured Data ────────────────────────────────────────────
    const existingLd = document.getElementById('__jsonld__')
    if (existingLd) existingLd.remove()

    if (jsonLd) {
      const script = document.createElement('script')
      script.id = '__jsonld__'
      script.type = 'application/ld+json'
      script.textContent = JSON.stringify(jsonLd)
      document.head.appendChild(script)
    }

    return () => {
      // Cleanup JSON-LD on route change
      const el = document.getElementById('__jsonld__')
      if (el) el.remove()
    }
  }, [fullTitle, description, keywords, canonicalUrl, ogImage, ogType, jsonLd])
}

export default useSEO
