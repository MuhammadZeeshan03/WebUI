import { motion } from "framer-motion"

const Hero = () => {
  return (
    <div className="text-white bg-black">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[#00df9a] font-bold p-2"
        >
          GROWING WITH DATA ANALYTICS
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6"
        >
          Grow with data.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex justify-center items-center"
        >
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">Fast, flexible financing for BTB</p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="md:text-2xl text-xl font-bold text-gray-500"
        >
          Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black hover:bg-[#00df9a]/90 transition-colors"
        >
          Get Started
        </motion.button>
      </div>
    </div>
  )
}

export default Hero
