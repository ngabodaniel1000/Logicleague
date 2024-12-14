import { Input } from "../../ui/input";
import { Button } from "../../ui/button";

const SignupForm = () => {
    return (
        <form className="space-y-4">
            <div>
                <label htmlFor="Username" className="text-sm font-medium text-green-700">
                    Username
                </label>
                <Input
                    id="Username"
                    type="Username"
                    placeholder="Enter your Username"
                    className="mt-1"
                />
            </div>
            <div>
                <label htmlFor="email" className="text-sm font-medium text-green-700">
                    Email Address
                </label>
                <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="mt-1"
                />
            </div>
            <div>
                <label htmlFor="password" className="text-sm font-medium text-green-700">
                    Password
                </label>
                <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    className="mt-1"
                />
            </div>
            <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                SignUp
            </Button>
        </form>
        
    );
};

export default SignupForm;
