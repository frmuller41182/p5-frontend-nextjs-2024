import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function NotFound() {
  return (
    <div
      className={cn(
        "h-screen flex flex-col items-center justify-center",
        "text-center p-4"
      )}
    >
      <h1 className="text-7xl font-bold text-stone-500 mb-4">Error 404</h1>
      <p className="text-2xl text-stone-500 mb-8">
        Oops! The page you are looking for does not exist.
      </p>
      <Link href="/">
        <Button className="px-6 py-3 text-lg">Go Back Home</Button>
      </Link>
    </div>
  );
}
