import React from "react";
import { motion } from "framer-motion";
import Feature1 from "../assets/images/features/map.jpg"; // Replace with actual paths
import Feature2 from "../assets/images/features/membership.jpg";
import Feature3 from "../assets/images/features/social.jpg";
import Feature4 from "../assets/images/features/gamification.jpg";

const ForFans = () => {
    return (
        <motion.div
            className="w-full bg-white-100 py-[50px] px-4 md:px-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
        >
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 min-h-[80vh] items-stretch">
                {/* Column 1 */}
                <motion.div
                    className="space-y-8 flex flex-col md:flex-grow"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <div>
                        <span className="font-bold">FootieTix: For the Fan</span>
                        <h2 className="text-2xl md:text-4xl font-bold leading-snug mb-4">
                            Here at FootieTix, we're bringing football back to the fans: the way it
                            should be.
                        </h2>
                        <p className="md:text-xl text-gray-600 mb-4">
                            Want to help shape FootieTix?
                            <br />
                            Complete our Market Research Survey!
                        </p>
                        <a
                            href="https://forms.gle/7i3mwkgMCdoXwrVT8"
                            className="btn btn-primary w-1/2"
                        >
                            Take the Survey
                        </a>
                    </div>
                    <motion.div
                        className="h-full bg-cover bg-center rounded-lg relative"
                        style={{ backgroundImage: `url(${Feature1})` }}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <div className="md:absolute text-white inset-0 bg-black bg-opacity-40 rounded-lg p-8 flex flex-col justify-end text-left">
                            <h3 className="text-lg md:text-2xl font-bold mb-2">Easy Game Discovery</h3>
                            <p>
                                Search for games by location, date, or team and receive real-time
                                updates for newly available tickets, special offers, or games near
                                you.
                            </p>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Column 2 */}
                <motion.div
                    className="space-y-8 flex flex-col"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.div
                        className="h-full bg-cover bg-center rounded-lg relative"
                        style={{ backgroundImage: `url(${Feature2})` }}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <div className="md:absolute text-white inset-0 bg-black bg-opacity-40 rounded-lg p-8 flex flex-col justify-end text-left">
                            <h3 className="text-lg md:text-2xl font-bold mb-2">Membership-Free Access</h3>
                            <p>
                                Search for games by location, date, or team and receive real-time
                                updates for newly available tickets, special offers, or games near
                                you.
                            </p>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Column 3 */}
                <motion.div
                    className="space-y-8 flex flex-col md:flex-grow"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.div
                        className="h-full bg-cover bg-center rounded-lg relative"
                        style={{ backgroundImage: `url(${Feature3})` }}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <div className="md:absolute text-white inset-0 bg-black bg-opacity-40 rounded-lg p-8 flex flex-col justify-end text-left">
                            <h3 className="text-lg md:text-2xl font-bold mb-2">Social Features</h3>
                            <p>
                                Purchase tickets for friends and family in one transaction and ensure
                                seats are grouped together when possible.
                            </p>
                        </div>
                    </motion.div>
                    <motion.div
                        className="h-full bg-cover bg-center rounded-lg relative"
                        style={{ backgroundImage: `url(${Feature4})` }}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 1.2 }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <div className="md:absolute text-white inset-0 bg-black bg-opacity-40 rounded-lg p-8 flex flex-col justify-end text-left">
                            <h3 className="text-lg md:text-2xl font-bold mb-2">Rewards and Gamification</h3>
                            <p>
                                Participate in giveaways for free tickets and unlock achievements for
                                attending multiple games or completing challenges like visiting all
                                grounds in a league or region.
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default ForFans;