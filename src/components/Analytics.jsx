import AnimatedSection from "./animated-section"
import { motion } from "framer-motion"

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8 items-center">
        <AnimatedSection animation="slideLeft" delay={0.2}>
          <motion.img
            src="/placeholder.svg?height=400&width=500"
            alt="Analytics Dashboard"
            className="w-[500px] mx-auto my-4 rounded-lg shadow-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          />
        </AnimatedSection>

        <AnimatedSection animation="slideRight" delay={0.4}>
          <div className="flex flex-col justify-center">
            <motion.p
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[#00df9a] font-bold"
            >
              DATA ANALYTICS DASHBOARD
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="md:text-4xl sm:text-3xl text-2xl font-bold py-2"
            >
              Manage Data Analytics Centrally
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam architecto veritatis facere sapiente,
              placeat non culpa omnis incidunt esse odio nobis quidem magnam aspernatur quaerat voluptates minima
              adipisci error autem.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 bg-black hover:bg-gray-800 transition-colors"
            >
              Get Started
            </motion.button>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}

export default Analytics
