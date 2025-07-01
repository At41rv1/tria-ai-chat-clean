import React from "react";
import { User } from "lucide-react";
import { useAuth } from "../contexts/HybridAuthContext";

const UserButton = () => {
  const { currentUser, signIn, signOut } = useAuth();

  return (
    <button
      onClick={currentUser ? signOut : signIn}
      className="flex items-center space-x-2 px-4 py-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors"
    >
      <User size={18} />
      <span className="hidden sm:inline">
        {currentUser ? "Sign Out" : "Sign In"}
      </span>
    </button>
  );
};

export default UserButton;
