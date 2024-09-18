"use client";
import { useRouter } from "next/navigation";
import { Text } from "@/app/components/common";

interface HeaderProps {
  children?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  const router = useRouter();

  const handleBack = () => {
    router.back(); // Navigate back in the browser history
  };

  return (
    <header className="w-full h-[80px] border-b-2 border-black mb-10">
      <div className="w-5/6 mx-auto flex flex-row justify-between items-center px-4">
        <button onClick={handleBack}>
          <Text size="md">Back</Text>
        </button>
        {children}
      </div>
    </header>
  );
};

export default Header;
