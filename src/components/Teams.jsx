import { motion } from 'framer-motion';
import { teamData } from '../assets/assets';
import Title from './Title';

const Teams = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-800 dark:text-white"
    >
      <Title
        title="Meet the Team"
        desc="A focused group of builders, engineers, and strategists driving WebCrest Labs forward."
      />

      {/* Fully center-aligned grid and cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 gap-8 justify-items-center w-full">
        {teamData.map((team, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            viewport={{ once: true }}
            whileHover={{
              y: -10,
              transition: { duration: 0.3 },
            }}
            className="relative group w-full max-w-xs"
          >
            {/* Animated gradient border effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-indigo-500 to-sky-500 dark:from-amber-400 dark:via-orange-400 dark:to-yellow-500 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500 animate-gradient bg-[length:200%_auto]"></div>

            {/* Main card */}
            <div className="relative flex flex-col items-center text-center gap-5 p-8 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 bg-gradient-to-br from-white via-gray-50/50 to-white dark:from-gray-900 dark:via-gray-800/50 dark:to-gray-900 backdrop-blur-xl shadow-2xl shadow-gray-200/50 dark:shadow-black/30 overflow-hidden">
              {/* Shimmer effect overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 dark:via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>

              {/* Floating orb background effect */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-indigo-500/20 dark:from-amber-400/10 dark:to-orange-400/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Profile image with ring animation */}
              <div className="relative z-10">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-indigo-500 dark:from-amber-400 dark:to-orange-500 opacity-0 group-hover:opacity-100 blur-md transition-all duration-500 scale-110"></div>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="relative"
                >
                  <img
                    src={team.image}
                    alt={team.name}
                    className="w-20 h-20 rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-xl relative z-10"
                  />
                  {/* Animated ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-primary/50 dark:border-amber-400/50 scale-110 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500"></div>
                </motion.div>
              </div>

              {/* Text content */}
              <div className="relative z-10 space-y-2">
                <motion.h3
                  className="font-bold text-lg bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent group-hover:from-primary group-hover:to-indigo-600 dark:group-hover:from-amber-400 dark:group-hover:to-orange-400 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  {team.name}
                </motion.h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 font-medium group-hover:text-gray-900 dark:group-hover:text-gray-200 transition-colors duration-300">
                  {team.title}
                </p>

                {/* Decorative line */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '60%' }}
                  transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
                  className="h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent dark:via-amber-400/50 mx-auto mt-3"
                />
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-indigo-500 to-sky-500 dark:from-amber-400 dark:via-orange-400 dark:to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Teams;
