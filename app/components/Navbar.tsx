"use client";
import { useState } from "react";
import Link from "next/link";
// import { MobileMenu } from "./MobileMenu";

const Navbar: React.FunctionComponent = () => {
  const [modalState, toggleModal] = useState<boolean>(false);

  return (
    <section className="bg-white py-5 w-full fixed top-0 z-[100]">
      <div className="md:w-11/12 w-11/12 mx-auto flex justify-between items-center">
        <Link className="mb-0 border-b-0 after:content-[none]" href={"/"}>
          <h1 className="text-xl font-bold ">Paragon</h1>
        </Link>

        <div className="hidden md:inline-flex items-center gap-4">
          <Link href={"/about-us"} className="text-[10px] nav-links">
            About us
          </Link>
          <Link href={"/projects"} className="text-[10px] nav-links">
            Projects
          </Link>
          <Link href={"/services"} className="text-[10px] nav-links">
            Services
          </Link>
          <Link
            href={"/contact"}
            className="text-[10px] px-6 py-3 hover:bg-green-400 transition ease-in-out delay-150 duration-300 bg-black text-white nav-links ml-8"
          >
            Work With Us
          </Link>
        </div>

        <button
          onClick={() => {
            toggleModal(true);
          }}
          className="md:hidden block"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="23"
            viewBox="0 0 30 23"
            fill="none"
          >
            <path
              d="M2 2H28M2 11.5H28M2 21H28"
              stroke="black"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* <MobileMenu displayed={modalState} onClick={() => toggleModal(false)} /> */}
    </section>
  );
};

export default Navbar;
