import Services from '../components/Services'
import useSEO from '../hooks/useSEO'

const ServicesPage = () => {
  useSEO({
    title: 'Our Services — Web, Mobile & Digital Solutions',
    description:
      "Explore WebCrest Labs' full range of services: custom web development, mobile app development, UI/UX design, and end-to-end digital strategy solutions.",
    keywords:
      'web development services, mobile app development, UI UX design, digital strategy, software development agency',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      provider: {
        '@type': 'Organization',
        name: 'WebCrest Labs',
        url: 'https://webcrestlabs.com',
      },
      name: 'Digital Development Services',
      description:
        'Custom web development, mobile app development, UI/UX design, and comprehensive digital strategy.',
      url: 'https://webcrestlabs.com/services',
    },
  })

  return (
    <div>
      <Services />
    </div>
  )
}

export default ServicesPage
