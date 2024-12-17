import React from "react";
import footballImage from "../assets/images/pexels-bohlemedia-1884574.webp";

const IntroSection = () => {
    return (
        <div className="w-full bg-gray-50 h-[70vh] py-8">
            <div className="container mx-auto h-full">

                {/* Content */}
                <div className=" h-full grid grid-cols-12 gap-4">
                    {/* Left Column */}
                    <div className="col-span-4 flex flex-col justify-start">
                        <h2 className="text-4xl font-bold leading-snug">
                            Here at FootieTix, we're bringing football back to the fans: the way it should be.
                        </h2>
                    </div>

                    <div className="col-span-4 flex flex-col justify-start h-full">

                            <img
                                src={footballImage}
                                alt="Football Excellence"
                                className="w-full h-full object-cover rounded-xl"
                            />

                    </div>

                    {/* Right Column */}
                    <div className="col-span-4 flex flex-col justify-end">
                        <h3 className="text-2xl font-bold">Membership-Free Access</h3>
                        <p className="mb-6 text-gray-600">
                            Purchase tickets without needing a paid club membership, making football more accessible to everyone. 
                        </p>
                        <h3 className="text-2xl font-bold">Easy Game Discovery</h3>
                        <p className="mb-6 text-gray-600">
                        Search for games by location, date, or team and receive real-time updates for newly available tickets, special offers, or games near you.
                        </p>
                        <h3 className="text-2xl font-bold">Social Features</h3>
                        <p className="mb-6 text-gray-600">
                        Purchase tickets for friends and family in one transaction and ensure seats are grouped together when possible.
                        </p>
                        <h3 className="text-2xl font-bold">Rewards and Gamification</h3>
                        <p className="text-gray-600">
                        Participate in giveaways for free tickets and unlock achievements for attending multiple games or completing challenges like visiting all grounds in a league or region.
                        </p>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default IntroSection;