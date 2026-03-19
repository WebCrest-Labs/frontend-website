import Hero from '../components/Hero'
import useSEO from '../hooks/useSEO'

const Home = () => {
  useSEO({
    title: 'Engineering Digital Excellence',
    description:
      'WebCrest Labs crafts cutting-edge digital experiences — from web and mobile apps to comprehensive digital strategies. We turn big ideas into interactive realities.',
    keywords:
      'WebCrest Labs, digital agency, web development, mobile apps, UI/UX design, digital solutions',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'WebCrest Labs',
      url: 'https://webcrestlabs.com',
      logo: 'https://webcrestlabs.com/favicon.ico',
      description:
        'WebCrest Labs crafts cutting-edge digital experiences — web apps, mobile apps, and digital strategies.',
      sameAs: [
        'https://www.instagram.com/webcrestlabs',
        'https://www.linkedin.com/company/webcrest-labs',
      ],
    },
  })

  return (
    <div>
      <Hero />
    </div>
  )
}

export default Home
