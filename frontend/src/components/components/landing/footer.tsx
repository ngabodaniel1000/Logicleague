import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8">
                    <div>
                        <h5 className="text-xl font-bold mb-4">About Logic League</h5>
                        <p className="text-gray-400">
                            Logic League is a platform dedicated to fostering meaningful discussions, empowering individuals to share perspectives, and grow through thoughtful debates.
                        </p>
                    </div>

                    <div>
                        <h5 className="text-xl font-bold mb-4">Quick Links</h5>
                        <ul className="space-y-2">
                            <li><a href="/" className="text-gray-400 hover:text-white">Home</a></li>
                            <li><a href="/about" className="text-gray-400 hover:text-white">About Us</a></li>
                            <li><a href="/contact" className="text-gray-400 hover:text-white">Contact</a></li>
                            <li><a href="/blog" className="text-gray-400 hover:text-white">Blog</a></li>
                        </ul>
                    </div>

                    <div>
                        <h5 className="text-xl font-bold mb-4">Contact Us</h5>
                        <ul className="space-y-2">
                            <li>Email: <a href="mailto:support@logicleague.com" className="text-gray-400 hover:text-white">support@logicleague.com</a></li>
                            <li>Phone: <a href="tel:+1234567890" className="text-gray-400 hover:text-white">+1 234-567-890</a></li>
                        </ul>
                        <div className="mt-4 flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white">
                                <FaFacebookF />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <FaTwitter />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <FaInstagram />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <FaLinkedinIn />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-8 border-t border-gray-700 pt-4">
                    <p className="text-center text-gray-400">
                        &copy; {new Date().getFullYear()} Logic League. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
