import { Link } from "react-router-dom";
import { Button } from "../../ui/button";

const Landingnav = () => {
    return (
        <div className="w-full flex justify-between items-center px-6 py-4 bg-gray-50 shadow-md">
            <div className="flex items-center space-x-2">
                <span className="text-green-600 font-bold text-2xl">🏆</span>
                <h2 className="text-green-700 font-extrabold text-xl">Logic League</h2>
            </div>

            <div className="space-x-4">
                <Link to="/login">
                    <Button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300">
                        Login
                    </Button>
                </Link>
                <Link to="/signup">
                    <Button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300">
                        Sign Up
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default Landingnav;
