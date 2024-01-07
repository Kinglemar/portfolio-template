import { useEffect } from "react";
import Link from "next/link";
import Cancel from "./Icons/Cancel";
import HomeIcon from "./Icons/Home";

export default function MobileMenu({
  displayed,
  onClick,
}: {
  displayed: boolean;
  onClick: any;
}) {
  useEffect(() => {
    if (displayed) document.body.style.overflowY = "hidden";

    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [displayed]);
  return (
    <>
      {displayed ? (
        <section className="flex justify-center items-center h-[100vh] z-[100]">
          <div className="h-[45vh] w-[90vw] p-5 relative bg-white rounded-md flex justify-center items-center">
            <button className="absolute top-5 right-5" onClick={onClick}>
              <Cancel />
            </button>
            <Link className="absolute top-5 left-5 nav-links" onClick={onClick} href={"/"}>
              <HomeIcon/>
            </Link>
            <ul className="space-y-4 text-xl font-bold w-full text-center">
              <li>
                <Link
                  onClick={onClick}
                  href={"/about-us"}
                  className="nav-links"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  onClick={onClick}
                  href={"/projects"}
                  className="nav-links"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  onClick={onClick}
                  href={"/services"}
                  className="nav-links"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link onClick={onClick} href={"/contact"} className="nav-links">
                  Work With Us
                </Link>
              </li>
            </ul>
          </div>
        </section>
      ) : null}
    </>
  );
}
