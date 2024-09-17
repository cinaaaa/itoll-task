import { useState, useEffect } from "react";

export default function Search({
  onSearch,
}: {
  onSearch: (query: string) => void;
}) {
  const [searchTerm, setSearchTerm] = useState("");

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
    />
  );
}
