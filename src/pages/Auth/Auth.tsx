import { FaGoogle } from "react-icons/fa";

const Auth = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Recommendable</h1>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center gap-2">
        <FaGoogle size={24} />
        <span>Login with Google</span>
      </button>
      <button className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
        Logout
      </button>
    </div>
  );
};

export default Auth;
