import { motion } from "framer-motion";
import assets from '../assets/assets';
import ServicesCard from './ServicesCard';
import Title from './Title';

const Services = () => {

  const servicesData = [
    {
      title: 'Growth, Social & Video Marketing',
      description: 'Data-driven growth strategies, social media management, and high-impact short-form video content.',
      icon: assets.ads_icon
    },
    {
      title: 'Digital Product Engineering',
      description: 'End-to-end product engineering for web and mobile—from architecture to scalable, production-ready builds.',
      icon: assets.marketing_icon
    },
    {
      title: 'UI/UX & Frontend Architecture',
      description: 'Design-led frontend systems with strong UX principles, atomic architecture, and scalable theming.',
      icon: assets.content_icon
    },
    {
      title: 'Growth, Social & Video Marketing',
      description: 'Data-driven growth strategies, social media management, and high-impact short-form video content.',
      icon: assets.social_icon
    }
  ]

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}

      id='services' className='relative  flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
      <img src={assets.bgImage2} alt="" className='absolute -top-110 -left-70 z-1 dark:hidden' />

      <div className="z-10">
        <Title title='How can we help?' desc='From strategy to execution, we craft digital solutions that move your business forward.' />
      </div>
      <div className="flex flex-col md:grid grid-cols-2">
        {servicesData.map((service, index) => (
          <ServicesCard key={index} service={service} index={index} />
        ))}
      </div>
    </motion.div>
  )
}

export default Services
