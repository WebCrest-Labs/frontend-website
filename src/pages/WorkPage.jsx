import OurWork from '../components/OurWork'
import useSEO from '../hooks/useSEO'

const WorkPage = () => {
  useSEO({
    title: 'Our Work — Portfolio & Case Studies',
    description:
      'Browse WebCrest Labs portfolio — see the impactful digital products, web apps, and mobile solutions we have built for clients across industries.',
    keywords:
      'portfolio, case studies, web app projects, mobile app projects, WebCrest Labs work, digital projects',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Our Work — WebCrest Labs Portfolio',
      url: 'https://webcrestlabs.com/work',
      description:
        'A portfolio of digital products and solutions crafted by WebCrest Labs.',
      publisher: {
        '@type': 'Organization',
        name: 'WebCrest Labs',
        url: 'https://webcrestlabs.com',
      },
    },
  })

  return (
    <div>
      <OurWork />
    </div>
  )
}

export default WorkPage
