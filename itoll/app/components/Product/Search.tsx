import { useState, useEffect } from "react";

export default function Search({ onSearch }: { onSearch: () => void }) {
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      onSearch(searchTerm);
    }, 300); // Debouncing

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  return (
    <input
      type="text"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Search products..."
      className="bg-gray-50 border border-gray-300 text-md text-black rounded-full block w-full p-2.5 focus:outline-gray-400"
    />
  );
}
