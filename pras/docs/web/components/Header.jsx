import Link from "next/link";
import React from "react";

const Header = ({ link, name }) => {
  return (
    <div className="flex justify-center items-center bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] p-0.5 rounded-xl w-full max-w-7xl">
      <div className="bg-[#111827] w-full rounded-xl flex items-center p-2 text-white">
        <Link href={link} passHref>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 hover:cursor-pointer hover:scale-75 transition-all ease-in-out"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7 16l-4-4m0 0l4-4m-4 4h18"
            />
          </svg>
        </Link>

        <h1 className="font-orbitron font-semibold ml-8 text-2xl">{name}</h1>
      </div>
    </div>
  );
};

export default Header;
