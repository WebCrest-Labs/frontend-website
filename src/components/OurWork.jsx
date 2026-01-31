import { motion } from "framer-motion";
import assets from "../assets/assets";
import Title from "./Title";

const OurWork = () => {
  const workData = [
    {
      title: "GeoRenus — Financial Intelligence Platform",
      description:
        "An enterprise-grade financial intelligence platform leveraging AI, live economic datasets, and interactive timelines to deliver actionable macro-economic insights for analysts and decision-makers.",
      image: assets.cs_georenus,
      link: "https://georenus.com",
    },
    {
      title: "MotionFly — Video Editing SaaS",
      description:
        "A scalable SaaS platform offering subscription-based video editing, AI-assisted workflows, and creator-centric tooling designed for performance, reliability, and rapid content production.",
      image: assets.cs_motion_fly,
      link: "https://motionfly.vercel.app",
    },
    {
      title: "Japan Meetings — Global MICE Platform",
      description:
        "A high-performance MICE platform connecting international planners with Japanese venues, featuring multilingual support, structured listings, and conversion-focused UX.",
      image: assets.cs_japan_meeting,
      link: "https://japan-meetings.com",
    },
    {
      title: "Summit One Cebu — Travel & Tours Platform",
      description:
        "A Japanese-localized online travel platform for Cebu Island, built with multilingual UX, scalable architecture, and SEO-first content delivery.",
      image: assets.cs_summit_one,
      link: "https://summitone-ota.vercel.app/cebu",
    },
    {
      title: "BRAC Career Hub — Enterprise Career Platform",
      description:
        "A large-scale career platform supporting job matching, assessments, and role-based dashboards, engineered for high traffic and organizational scalability.",
      image: assets.cs_barc,
      link: "https://careerhub.brac.net",
    },
    {
      title: "ZONTRA — Geo-Fencing Workforce System",
      description:
        "A real-time geo-fencing solution that verifies on-field workforce activity, automates attendance, and delivers compliance-grade reporting for enterprises.",
      image: assets.cs_zontra,
      link: "https://zontra-draft.vercel.app/",
    },
  ];


  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
      id="our-work"
      className="relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <img src={assets.bgImage1} alt="" className='absolute -top-110 -right-70 z-1 dark:hidden' />

      <div className="z-10">
        <Title
          title="Our latest work"
          desc="Browse our portfolio of innovative digital projects that showcase creativity, performance, and results."
        />
      </div>

      <div className="relative z-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {workData.map((work, index) => (
          <motion.a
            href={work.link}
            target="_blank"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            key={index}
            className="hover:scale-102 duration-500 transition-all cursor-pointer"
          >
            <img src={work.image} className="w-full rounded-xl" alt="" />
            <h3 className="mt-3 mb-2 text-lg font-semibold">{work.title}</h3>
            <p className="text-sm opacity-60 w-5/6">{work.description}</p>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
};

export default OurWork;
