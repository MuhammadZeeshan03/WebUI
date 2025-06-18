import { useState } from "react"
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"
import { motion } from "framer-motion"

const Navbar = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex justify-between items-center h-24 mx-auto max-w-[1240px] px-4 text-white relative z-50"
    >
      <motion.h1
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full text-3xl font-bold text-[#00df9a]"
      >
        REACT.
      </motion.h1>

      <motion.ul
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="hidden md:flex"
      >
        {["Home", "Company", "Resources", "About", "Contact"].map((item, index) => (
          <motion.li
            key={item}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
            className="p-4 hover:text-[#00df9a] transition-colors cursor-pointer"
          >
            {item}
          </motion.li>
        ))}
      </motion.ul>

      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <motion.div
        initial={false}
        animate={{ x: nav ? 0 : "-100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] z-40"
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">REACT.</h1>
        <ul className="p-4 uppercase">
          {["Home", "Company", "Resources", "About", "Contact"].map((item, index) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: nav ? 1 : 0, x: nav ? 0 : -20 }}
              transition={{ duration: 0.3, delay: nav ? index * 0.1 : 0 }}
              className="p-4 border-b border-gray-600 hover:text-[#00df9a] transition-colors cursor-pointer"
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  )
}

export default Navbar
