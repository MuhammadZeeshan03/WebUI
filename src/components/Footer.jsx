import { FaDribbbleSquare, FaFacebookSquare, FaGithubSquare, FaInstagram, FaTwitterSquare } from "react-icons/fa"
import AnimatedSection from "./animated-section"
import { motion } from "framer-motion"

const Footer = () => {
  const socialIcons = [
    { Icon: FaFacebookSquare, name: "Facebook" },
    { Icon: FaInstagram, name: "Instagram" },
    { Icon: FaTwitterSquare, name: "Twitter" },
    { Icon: FaGithubSquare, name: "GitHub" },
    { Icon: FaDribbbleSquare, name: "Dribbble" },
  ]

  const footerSections = [
    {
      title: "Solutions",
      links: ["Analytics", "Marketing", "Commerce", "Insights"],
    },
    {
      title: "Support",
      links: ["Pricing", "Documentation", "Guides", "API Status"],
    },
    {
      title: "Company",
      links: ["About", "Blog", "Jobs", "Press", "Careers"],
    },
    {
      title: "Legal",
      links: ["Claim", "Policy", "Terms"],
    },
  ]

  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300 bg-black">
      <AnimatedSection animation="slideUp" delay={0.2}>
        <div>
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="w-full text-3xl font-bold text-[#00df9a]"
          >
            REACT.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="py-4"
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit ullam iste repellat consequatur libero
            reiciendis, blanditiis accusantium.
          </motion.p>

          <div className="flex justify-between md:w-[75%] my-6">
            {socialIcons.map(({ Icon, name }, index) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.2, color: "#00df9a" }}
                className="cursor-pointer"
              >
                <Icon size={30} />
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <div className="lg:col-span-2 flex justify-between mt-6">
        {footerSections.map((section, sectionIndex) => (
          <AnimatedSection key={section.title} animation="slideUp" delay={0.4 + sectionIndex * 0.1}>
            <div>
              <motion.h6
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="font-medium text-gray-400"
              >
                {section.title}
              </motion.h6>

              <ul>
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={link}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 + linkIndex * 0.05 }}
                    whileHover={{ color: "#00df9a", x: 5 }}
                    className="py-2 text-sm cursor-pointer transition-colors"
                  >
                    {link}
                  </motion.li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  )
}

export default Footer
