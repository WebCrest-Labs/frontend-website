import ContactUs from '../components/ContactUs'
import useSEO from '../hooks/useSEO'

const ContactPage = () => {
  useSEO({
    title: 'Contact Us — Get in Touch',
    description:
      'Ready to start your next digital project? Contact WebCrest Labs today to discuss your goals and discover how we can help you build something remarkable.',
    keywords:
      'contact WebCrest Labs, hire digital agency, get in touch, project inquiry, digital agency contact',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: 'Contact WebCrest Labs',
      url: 'https://webcrestlabs.com/contact',
      description:
        'Get in touch with WebCrest Labs to start your digital transformation.',
      publisher: {
        '@type': 'Organization',
        name: 'WebCrest Labs',
        url: 'https://webcrestlabs.com',
      },
    },
  })

  return (
    <div>
      <ContactUs />
    </div>
  )
}

export default ContactPage
