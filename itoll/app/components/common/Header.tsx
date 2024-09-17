"use client";
import { useRouter } from "next/navigation";

const Header = ({ children }: { children?: React.ReactNode }) => {
  const router = useRouter();

  const handleBack = () => {
    router.back(); // Navigate back in the browser history
  };

  return (
    <header className="w-full h-[80px] border-b-2 border-black flex flex-row justify-between items-center px-4 mb-10">
      <button onClick={handleBack} className="text-gray-700">
        <p className="text-lg">Back</p>
      </button>
      {children || ""}
    </header>
  );
};

export default Header;
