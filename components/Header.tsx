import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center shadow-md">
      <div className="flex items-center space-x-4">
        <img src="/logo.png" alt="Logo" className="h-16 w-16" />
        <Link href="/" className="text-xl font-bold">
          WealthWave
        </Link>
      </div>
      <nav className="flex-grow flex justify-center items-center space-x-8">
        <Link href="/" className="text-white hover:text-gray-300">
          Home
        </Link>
        <Link href="/stocks" className="text-white hover:text-gray-300">
          Stock Offering
        </Link>
        <Link href="/portfolio" className="text-white hover:text-gray-300">
          User Portfolio
        </Link>
      </nav>
      <div className="flex items-center space-x-4">
        <Avatar className="h-8 w-8 rounded-full">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
};

export default Header;
