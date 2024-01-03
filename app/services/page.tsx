"use client";
import Image from "next/image";
import Link from "next/link";
import ContactCard from "@/app/components/ContactCard";
import Marquee from "@/app/components/Marquee";
import Hexagon from "@/app/components/Icons/Hexagon";
import Bricks from "@/app/components/Icons/Bricks";
import Octagon from "@/app/components/Icons/Octagon";
import Star from "@/app/components/Icons/Star";
import Social from "@/app/components/Icons/Social";

export default function Page() {
  return (
    <main className="m-0">
      <section
        className="h-[65vh] bg-cover bg-center flex flex-col justify-center items-center"
        style={{ backgroundImage: 'url("/img/service.jpg")' }}
      >
        <h1 className="text-5xl font-bold text-white">Services</h1>
      </section>

      <section className="w-10/12 mx-auto mt-14">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative bg-[#F6f5F3] p-6">
            <span className="absolute top-6 right-6">
              <Hexagon />
            </span>
            <div>
              <h1 className="text-xl mb-4">Branding Design</h1>
              <p className="text-sm mb-6">
                We care about relationships that fuel success
              </p>

              <Link
                className="mt-14 text-xs uppercase font-bold"
                href={"services"}
              >
                View details
              </Link>
            </div>
          </div>
          <div className="relative bg-[#F6f5F3] p-6">
            <span className="absolute top-6 right-6">
              <Bricks />
            </span>
            <div>
              <h1 className="text-xl mb-4">Web Development</h1>
              <p className="text-sm mb-6">
                We care about relationships that fuel success
              </p>

              <Link
                className="mt-14 text-xs uppercase font-bold"
                href={"services"}
              >
                View details
              </Link>
            </div>
          </div>
          <div className="relative bg-[#F6f5F3] p-6">
            <span className="absolute top-6 right-6">
              <Octagon />
            </span>
            <div>
              <h1 className="text-xl mb-4">Digital Marketing</h1>
              <p className="text-sm mb-6">
                We care about relationships that fuel success
              </p>

              <Link
                className="mt-14 text-xs uppercase font-bold"
                href={"services"}
              >
                View details
              </Link>
            </div>
          </div>
          <div className="relative bg-[#F6f5F3] p-6">
            <span className="absolute top-6 right-6">
              <Star />
            </span>
            <div>
              <h1 className="text-xl mb-4">Content Marketing</h1>
              <p className="text-sm mb-6">
                We care about relationships that fuel success
              </p>

              <Link
                className="mt-14 text-xs uppercase font-bold"
                href={"services"}
              >
                View details
              </Link>
            </div>
          </div>
          <div className="relative bg-[#F6f5F3] p-6">
            <span className="absolute top-6 right-6">
              <Social />
            </span>
            <div>
              <h1 className="text-xl mb-4">Social Advertising</h1>
              <p className="text-sm mb-6">
                We care about relationships that fuel success
              </p>

              <Link
                className="mt-14 text-xs uppercase font-bold"
                href={"services"}
              >
                View details
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="mb-10">
        <ContactCard />
      </div>
      <div className="my-10">
        <h1 className="md:text-5xl text-3xl mb-16 font-bold text-center">
          Our clients
        </h1>
        <Marquee />
      </div>
    </main>
  );
}
