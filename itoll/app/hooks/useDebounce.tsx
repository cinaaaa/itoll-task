import { useState, useEffect } from "react";

// Custom hook to handle debouncing
const useDebounce = (value: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Cleanup timeout if value changes before the delay ends
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;
