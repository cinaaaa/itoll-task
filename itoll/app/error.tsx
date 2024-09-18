"use client";
import Link from "next/link";

export default function Error() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-[100vh] text-black">
      <p className="text-xl">
        Something happened wrong within us, please come back later!
      </p>
      <Link href="/" className="mt-4 text-blue-700">
        Return Home
      </Link>
    </div>
  );
}
