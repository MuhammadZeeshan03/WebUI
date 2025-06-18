import AnimatedSection from "./AnimatedSection"
import { motion } from "framer-motion"

const Cards = () => {
  const cardData = [
    {
      title: "Single User",
      price: "$149",
      image: "/placeholder.svg?height=80&width=80",
      features: ["500 GB Storage", "1 Granted User", "Send up to 2 GB"],
      buttonStyle: "bg-[#00df9a] text-black",
      cardStyle: "bg-white",
    },
    {
      title: "Partnership",
      price: "$199",
      image: "/placeholder.svg?height=80&width=80",
      features: ["1 TB Storage", "3 Granted Users", "Send up to 10 GB"],
      buttonStyle: "text-[#00df9a] bg-black",
      cardStyle: "bg-gray-100",
    },
    {
      title: "Group Account",
      price: "$299",
      image: "/placeholder.svg?height=80&width=80",
      features: ["5 TB Storage", "10 Granted Users", "Send up to 20 GB"],
      buttonStyle: "bg-[#00df9a] text-black",
      cardStyle: "bg-white",
    },
  ]

  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <AnimatedSection animation="fadeIn">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
          {cardData.map((card, index) => (
            <AnimatedSection key={index} animation="slideUp" delay={index * 0.2}>
              <motion.div
                className={`w-full shadow-xl flex flex-col p-4 my-4 rounded-lg ${card.cardStyle} ${index === 1 ? "md:my-0" : ""}`}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.img
                  src={card.image}
                  alt={card.title}
                  className="w-20 mx-auto mt-[-3rem] bg-white rounded-full p-2"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                />

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-2xl font-bold text-center py-8"
                >
                  {card.title}
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-center text-4xl font-bold"
                >
                  {card.price}
                </motion.p>

                <div className="text-center font-medium">
                  {card.features.map((feature, featureIndex) => (
                    <motion.p
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.5 + featureIndex * 0.1 }}
                      className="py-2 border-b mx-8 mt-8"
                    >
                      {feature}
                    </motion.p>
                  ))}
                </div>

                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`${card.buttonStyle} w-[200px] rounded-md font-medium my-6 mx-auto py-3 transition-all duration-300`}
                >
                  Start Trial
                </motion.button>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </AnimatedSection>
    </div>
  )
}

export default Cards
