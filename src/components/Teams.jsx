import { motion } from "framer-motion";
import { teamData } from "../assets/assets";
import Title from "./Title";

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
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 gap-5 justify-items-center w-full">
        {teamData.map((team, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center gap-4 p-6 rounded-xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-xl shadow-gray-100 dark:shadow-white/5 hover:scale-105 transition-all duration-300 w-full max-w-xs"
          >
            <img
              src={team.image}
              alt={team.name}
              className="w-14 h-14 rounded-full object-cover"
            />
            <div>
              <h3 className="font-bold text-sm">{team.name}</h3>
              <p className="text-xs opacity-60 mt-1">{team.title}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Teams;
