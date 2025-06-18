import AnimatedSection from "./animated-section"
import { motion } from "framer-motion"

const Newsletter = () => {
  return (
    <div className="w-full py-16 px-4 text-white bg-black">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-8 items-center">
        <AnimatedSection animation="slideLeft" delay={0.2} className="lg:col-span-2 my-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="md:text-5xl sm:text-4xl text-2xl font-bold py-2"
          >
            Want tips & tricks to optimize your flow?
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Sign up to our newsletter and stay up to date.
          </motion.p>
        </AnimatedSection>

        <AnimatedSection animation="slideRight" delay={0.4} className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-4">
            <motion.input
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              whileFocus={{ scale: 1.02 }}
              className="p-3 flex w-full rounded-md text-black focus:outline-none focus:ring-2 focus:ring-[#00df9a]"
              type="email"
              placeholder="Enter Email"
            />

            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#00df9a] w-[200px] rounded-md font-medium px-6 py-3 text-black hover:bg-[#00df9a]/90 transition-colors whitespace-nowrap"
            >
              Notify Me
            </motion.button>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-white mt-4 text-sm"
          >
            We care about the protection of your data. Read our{" "}
            <span className="text-[#00df9a] hover:underline cursor-pointer">Privacy Policy</span>
          </motion.p>
        </AnimatedSection>
      </div>
    </div>
  )
}

export default Newsletter
