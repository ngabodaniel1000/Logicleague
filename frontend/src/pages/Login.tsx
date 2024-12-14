import { Link } from "react-router-dom";
import LoginForm from "../components/components/auth/LoginForm";

const Login = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-green-100 via-green-50 to-green-200">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-green-700">Logic League</h1>
          <p className="text-sm text-green-600">Empowering Your Journey</p>
        </div>

        <h2 className="mb-6 text-2xl font-semibold text-green-800 text-center">
          Welcome Back!
        </h2>

        <LoginForm />
        <div className="flex items-center justify-center mt-3">
          <p>Don't have an account?</p>
          <Link to="/signup" className="text-sm text-green-600 hover:underline">
            SignUp
          </Link>
        </div>
      </div>
    </div>

  );
};

export default Login;
