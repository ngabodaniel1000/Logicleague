
import { Button } from "../components/ui/button"
import Landingnav from "../components/components/landing/landing-nav"
import svg from "../assets/undraw_teamwork.svg"
import { motion } from "framer-motion"

const LandingPage = () => {
    return (
        <div className="w-full flex flex-col h-screen">
            <Landingnav />
            <div className="w-full flex gap-5 items-center justify-between h-[500px]">
                <div className=" w-1/2 p-8 bg-white flex flex-col items-center justify-center  rounded-lg max-w-xl mx-auto">
                    <h1 className="text-4xl font-bold  text-green-600 mb-4">
                        Welcome to Logic League
                    </h1>
                    <p className="text-lg  text-gray-700 mb-6">
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
                <motion.div
                    className="w-1/2 flex justify-center items-center"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{
                        opacity: [2, 3, 2],
                        y: [-50, 0, -50],
                    }}
                    transition={{
                        duration: 7,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    <img src={svg} alt="Banner" className="w-[500px]" />
                </motion.div>
            </div>
            <div className="">

            </div>
        </div>
    )
}

export default LandingPage
