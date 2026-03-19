import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import assets from '../assets/assets'
import useSEO from '../hooks/useSEO'

const AboutUs = () => {
  useSEO({
    title: 'About Us — Our Mission, Vision & Story',
    description:
      'Learn about WebCrest Labs — our mission to empower businesses with digital solutions, our core values of innovation and quality, and the story behind our growing team.',
    keywords:
      'about WebCrest Labs, digital agency team, our mission, our vision, core values, company story',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      name: 'About WebCrest Labs',
      url: 'https://webcrestlabs.com/about-us',
      description:
        'WebCrest Labs is a team of passionate innovators dedicated to crafting exceptional digital experiences.',
      publisher: {
        '@type': 'Organization',
        name: 'WebCrest Labs',
        url: 'https://webcrestlabs.com',
      },
    },
  })

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white"
    >
      {/* Hero Section */}
      <section className="relative px-4 sm:px-12 lg:px-24 xl:px-40 py-20 sm:py-32">
        <img src={assets.bgImage2} alt="" className='absolute -top-110 -left-70 z-1 dark:hidden' />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative z-10 text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            About{' '}
            <span className="bg-gradient-to-r from-primary via-indigo-500 to-sky-500 dark:from-amber-400 dark:via-orange-400 dark:to-yellow-500 bg-clip-text text-transparent">
              WebCrest Labs
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            We are a team of passionate innovators dedicated to crafting exceptional digital experiences 
            that transform ideas into reality.
          </p>
        </motion.div>
      </section>

      {/* Mission & Vision Section */}
      <section className="px-4 sm:px-12 lg:px-24 xl:px-40 py-16 bg-gray-50 dark:bg-gray-900/50">
        <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="inline-block p-3 bg-primary/10 dark:bg-amber-400/10 rounded-lg">
              <svg className="w-8 h-8 text-primary dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold">Our Mission</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              To empower businesses with cutting-edge digital solutions that drive growth, 
              enhance user experiences, and create lasting impact in the digital landscape.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="inline-block p-3 bg-primary/10 dark:bg-amber-400/10 rounded-lg">
              <svg className="w-8 h-8 text-primary dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold">Our Vision</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              To be the leading force in digital innovation, recognized globally for our 
              commitment to excellence, creativity, and transformative technology solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative px-4 sm:px-12 lg:px-24 xl:px-40 py-20">
        <img src={assets.bgImage1} alt="" className='absolute -top-110 -right-70 z-1 dark:hidden' />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Core Values</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            The principles that guide everything we do
          </p>
        </motion.div>

        <div className="relative z-10 max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              ),
              title: 'Innovation',
              description: 'Constantly pushing boundaries and exploring new technologies to deliver cutting-edge solutions.'
            },
            {
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              ),
              title: 'Quality',
              description: 'Maintaining the highest standards in every project, ensuring excellence in execution and delivery.'
            },
            {
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              ),
              title: 'Collaboration',
              description: 'Working closely with clients as partners to understand and achieve their unique goals.'
            },
            {
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              ),
              title: 'Agility',
              description: 'Adapting quickly to changing needs and market dynamics with flexible, responsive approaches.'
            },
            {
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              ),
              title: 'Transparency',
              description: 'Building trust through open communication and honest, straightforward relationships.'
            },
            {
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ),
              title: 'Passion',
              description: 'Bringing enthusiasm and dedication to every project, treating each as our own.'
            }
          ].map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 rounded-2xl bg-gray-50 dark:bg-gray-900/50 hover:bg-gradient-to-br hover:from-primary/5 hover:to-indigo-500/5 dark:hover:from-amber-400/5 dark:hover:to-orange-500/5 transition-all duration-300 hover:shadow-lg"
            >
              <div className="inline-flex p-3 rounded-lg bg-primary/10 dark:bg-amber-400/10 text-primary dark:text-amber-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{value.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Story Section */}
      <section className="px-4 sm:px-12 lg:px-24 xl:px-40 py-20 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">Our Story</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
              Founded with a vision to bridge the gap between innovative technology and business needs, 
              WebCrest Labs has grown from a small team of passionate developers into a full-service 
              digital agency trusted by clients worldwide.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
              Our journey began with a simple belief: that exceptional digital experiences are built 
              on a foundation of creativity, technical excellence, and genuine partnership. Today, we 
              continue to uphold these principles while expanding our capabilities to meet the evolving 
              demands of the digital age.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
              From web and mobile applications to comprehensive digital strategies, we bring together 
              diverse expertise and cutting-edge technologies to deliver solutions that not only meet 
              expectations but exceed them.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-12 lg:px-24 xl:px-40 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
            Let's collaborate to bring your vision to life with innovative digital solutions.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-indigo-600 dark:from-amber-500 dark:to-orange-500 text-white px-8 py-3 rounded-full font-medium hover:scale-105 hover:shadow-lg hover:shadow-primary/50 dark:hover:shadow-amber-500/50 transition-all duration-300"
          >
            Get in Touch
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </section>
    </motion.div>
  )
}

export default AboutUs
