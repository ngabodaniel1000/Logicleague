import { Input } from "../../ui/input"; 
import { Button } from "../../ui/button";

const LoginForm = () => {
    return (
        <form className="space-y-4">
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
            <div className="flex items-center justify-between">
                <a
                    href="/forgot-password"
                    className="text-sm text-green-600 hover:underline"
                >
                    Forgot Password?
                </a>
            </div>
            <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                Log In
            </Button>
        </form>
    );
};

export default LoginForm;
