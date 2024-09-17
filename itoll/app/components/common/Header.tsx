"use client";
import Search from "../Product/Search";

export default function Header() {
  return (
    <div className="w-2/12 h-[60px] my-20 flex flex-row justify-between px-5 items-center py-5 rounded-full border shadow-xl mx-auto">
      <Search onSearch={() => {}} />
    </div>
  );
}
