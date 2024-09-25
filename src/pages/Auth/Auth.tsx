import { useEffect } from "react";

import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/Button/Button";
import Heading from "@/components/ui/Heading/Heading";
import useUser from "@/hooks/user/useUser";

import LocalForm from "./Components/LocalForm/LocalForm";
import OrDivider from "./Components/OrDivider/OrDivider";

const Auth = () => {
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      return navigate("/films");
    }
  }, [user, navigate]);
  const handleGoogleLogin = () => {
    window.location.href = `${import.meta.env.VITE_API_URL}/auth/google`;
  };
  return (
    <div className="flex items-center justify-center h-screen rounded-md">
      <div className="flex flex-col items-center justify-center border rounded-sm p-8">
        <Heading type="h1" fontWeight="font-semibold" className="mb-4">
          Login to Recommendable
        </Heading>

        {/* Google Login Button */}
        <Button onClick={handleGoogleLogin} className="w-full gap-3">
          <FaGoogle size={24} />
          <span className="text-lg">Login with Google</span>
        </Button>

        <OrDivider />

        {/* Form goes here */}
        <div className="w-full space-y-4">
          <LocalForm />
        </div>
      </div>
    </div>
  );
};

export default Auth;
