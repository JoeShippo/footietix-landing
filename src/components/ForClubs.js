import React from "react";
import { motion } from "framer-motion";
import ClubBG from "../assets/images/ClubsBG.jpg";

const ForClubs = () => {
  return (
    <div className="w-full bg-gray-100 md:h-[90vh] py-[100px] px-8 md:px-0">
      <div className="container mx-auto h-full">
        {/* Content */}
        <div className="h-full grid grid-cols-12 gap-4">
          {/* Left Column */}
          <motion.div
            className="col-span-12 md:col-span-4 flex flex-col justify-start"
            initial={{ opacity: 0, x: -50 }} // Slide in from the left
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: 0, // First to animate
            }}
            viewport={{
              once: true,
              amount: 0.1, // Trigger when 60% of the element is visible
            }}
          >
            <span className="font-bold">FootieTix: For the Club</span>
            <h2 className="text-2xl md:text-4xl font-bold leading-snug mb-4">
              Enhancing the relationship between clubs and fans: existing or new.
            </h2>
            <p className="text-gray-600 mb-4 md:mb-8">
              FootieTix is designed to help football clubs grow their fanbase,
              increase ticket sales, and enhance match-day experiences through
              powerful analytics and new marketing streams.
            </p>
          </motion.div>

          {/* Center Column (Image) */}
          <motion.div
            className="col-span-4 flex flex-col justify-start h-full hidden md:block"
            initial={{ opacity: 0, scale: 0.9 }} // Subtle zoom-in effect
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: 0.3, // Second to animate
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
          >
            <img
              src={ClubBG}
              alt="Football Excellence"
              className="w-full h-full object-cover rounded-xl shadow-lg"
            />
          </motion.div>

          {/* Right Column */}
          <div className="col-span-12 md:col-span-4 flex flex-col justify-end space-y-6">
            {[
              {
                title: "Real-Time Analytics",
                content:
                  "Get a clear picture of your club's performance with powerful, real-time insights. Monitor ticket sales trends, fan demographics, and match-day behavior to make data-driven decisions that enhance revenue and fan engagement.",
              },
              {
                title: "Additional Revenue Streams",
                content:
                  "Highlight exclusive offers on food, beverages, and merchandise directly through FootieTix to boost sales and create a more memorable match-day for your fans.",
              },
              {
                title: "Enhanced Marketing Tools",
                content:
                  "Target casual fans with personalized campaigns and special offers, turning them into lifelong supporters. Maximize ticket sales through smarter, data-backed promotions.",
              },
              {
                title: "Fanbase Expansion",
                content:
                  "With FootieTix, you can attract non-members and occasional fans by simplifying ticket access, especially for under-attended games. Build a stronger community around your club.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="feature"
                initial={{ opacity: 0, x: 50 }} // Slide in from the right
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.6 + index * 0.2, // Third to animate, features stagger sequentially
                  duration: 0.5,
                  ease: "easeOut",
                }}
                viewport={{
                  once: true,
                  amount: 0.4, // Trigger when 60% of the element is visible
                }}
              >
                <h3 className="text-lg md:text-2xl  font-bold">{feature.title}</h3>
                <p
                  className="text-gray-600"
                  dangerouslySetInnerHTML={{ __html: feature.content }}
                ></p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForClubs;