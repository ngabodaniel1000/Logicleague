import { Button } from "../components/ui/button"
import Landingnav from "../components/components/landing/landing-nav"
import svg from "../assets/undraw_teamwork.svg"
import aboutus from "../assets/aboutus.webp"
import missionImage from "../assets/missionimage.webp"
import { motion } from "framer-motion"
import Footer from "@/components/components/landing/footer"

const LandingPage = () => {
    return (
        <div className="w-full flex flex-col gap-3 h-auto">
            <Landingnav />
            <div className="w-full flex flex-col md:flex-row gap-5 items-center justify-between h-[500px]">
                <div className="w-full md:w-1/2 p-8 bg-white flex flex-col items-center justify-center rounded-lg max-w-xl mx-auto">
                    <h1 className="text-4xl font-bold text-green-600 mb-4">
                        Welcome to Logic League
                    </h1>
                    <p className="text-lg text-gray-700 mb-6">
                        Dive into a world of engaging debates, thoughtful discussions, and intellectual growth.
                        Whether you're here to share your perspective or learn from others, Logic League is your
                        space to connect and grow.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Button className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition duration-300">
                            Get Started
                        </Button>
                    </div>
                </div>
                <div className="w-full md:w-1/2 flex justify-center items-center">
                    <img
                        src={svg}
                        alt="Banner"
                        className="w-[80%] max-w-[500px] h-auto object-contain"
                    />
                </div>

            </div>

            <div className="w-full mt-20 flex flex-col md:flex-row md:mt-10 gap-10 items-center justify-center h-auto">
                {/* About Us Section with Illustration */}
                <div className="w-full md:w-1/2 flex justify-center items-center">
                    <motion.img
                        src={aboutus}
                        alt="About Us Illustration"
                        className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-lg object-contain"
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 1 }}
                    />
                </div>

                {/* Text and CTA Section */}
                <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left px-4 md:px-0">
                    <h1 className="text-4xl font-bold text-green-600 mb-4">About Us</h1>
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                        Logic League is a space dedicated to fostering meaningful discussions, empowering individuals
                        to share perspectives, and grow through thoughtful debates. Whether you're here to connect,
                        learn, or contribute, we're committed to creating a community that thrives on curiosity and collaboration.
                    </p>

                    {/* Core Values */}
                    <div className="w-full mb-6">
                        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                            <motion.div className="px-4 py-2 bg-green-200 text-green-800 rounded-full shadow-md">
                                Collaboration
                            </motion.div>
                            <motion.div className="px-4 py-2 bg-green-200 text-green-800 rounded-full shadow-md">
                                Innovation
                            </motion.div>
                            <motion.div className="px-4 py-2 bg-green-200 text-green-800 rounded-full shadow-md">
                                Diversity
                            </motion.div>
                            <motion.div className="px-4 py-2 bg-green-200 text-green-800 rounded-full shadow-md">
                                Impact
                            </motion.div>
                        </div>
                    </div>

                    {/* Animated Counter Section */}
                    <div className="w-full flex justify-between items-center mb-6 md:gap-6">
                        <motion.div
                            className="text-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                            <h3 className="text-2xl font-bold text-green-600">5,000+</h3>
                            <p className="text-sm text-gray-600">Members Joined</p>
                        </motion.div>
                        <motion.div
                            className="text-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                            <h3 className="text-2xl font-bold text-green-600">100+</h3>
                            <p className="text-sm text-gray-600">Discussions Started</p>
                        </motion.div>
                        <motion.div
                            className="text-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                            <h3 className="text-2xl font-bold text-green-600">10+</h3>
                            <p className="text-sm text-gray-600">Years of Collaboration</p>
                        </motion.div>
                    </div>

                    {/* CTA Button */}
                    <motion.button
                        className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300 mt-2"
                        initial={{ scale: 0.95 }}
                        whileHover={{ scale: 1.1 }}
                    >
                        Learn More
                    </motion.button>
                </div>
            </div>


            <div className="w-full mt-10 flex flex-col md:flex-row gap-10 items-center justify-center h-auto">
                {/* Mission Text Section */}
                <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left px-6 md:px-8 ml-4 mt-4 transition-transform transform hover:scale-105">
                    {/* Animated Heading */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <h1 className="text-4xl font-bold text-green-600 mb-4">Our Mission</h1>
                    </motion.div>

                    {/* Mission Paragraph */}
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                        At Logic League, our mission is to empower individuals by fostering meaningful connections, encouraging intellectual growth, and promoting curiosity-driven debates.
                        We aim to create a collaborative space where ideas are shared, respected, and built upon, ensuring a community of lifelong learners and thinkers.
                    </p>

                    {/* Progress Bar to Indicate Impact */}
                    <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
                        <div className="h-4 bg-green-600 rounded-full" style={{ width: "80%" }}></div>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">80% of our members report personal growth through shared experiences.</p>

                    {/* Call-To-Action Button */}
                    <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300 mt-2">
                        Join the Community
                    </button>
                </div>

                {/* Visual Representation Section */}
                <div className="w-full mb-5 md:w-1/2 flex justify-center items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2 }}
                    >
                        <img
                            src={missionImage}
                            alt="Mission Illustration"
                            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-lg object-contain"
                        />
                    </motion.div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default LandingPage
