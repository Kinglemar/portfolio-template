"use client";
import Image from "next/image";
import Link from "next/link";
import Dots from "@/app/components/Icons/4dots";
import ContactCard from "@/app/components/ContactCard";
import Marquee from "@/app/components/Marquee";

export default function Page() {

  return (
    <main className="m-0">
      <section
        className="h-[65vh] bg-cover bg-top flex flex-col justify-center items-center"
        style={{ backgroundImage: 'url("/img/about-us-bg.jpg")' }}
      >
        <h1 className="text-5xl font-bold text-white">About Us</h1>
      </section>

      <section className="pt-24 pb-32">
        <div className="md:w-10/12 w-11/12 mx-auto md:flex justify-between item-start gap-6">
          <div className="border-r border-r-black md:ml-10 px-3 md:px-0 md:mt-0 mt-5">
            <h1 className="text-5xl mb-8 font-bold">7+</h1>
            <h1 className="font-bold mb-4">Years of experience</h1>
            <p>
              We create beautiful agency brands, building insighful strategy
            </p>
          </div>
          <div className="border-r border-r-black md:ml-10 md:pr-10 px-3 md:px-0 md:mt-0 mt-5">
            <h1 className="text-5xl mb-6 font-bold">106+</h1>
            <h1 className="font-bold mb-4">Successful Projects</h1>
            <p>
              We create beautiful agency brands, building insighful strategy
            </p>
          </div>
          <div className="border-r md:border-0 border-r-black md:ml-10 px-3 md:px-0 md:mt-0 mt-5">
            <h1 className="text-5xl mb-6 font-bold">139+</h1>
            <h1 className="font-bold mb-4">Satisfied Customers</h1>
            <p>
              We create beautiful agency brands, building insighful strategy
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#e3ff05] py-24 md:mt-32 mt-5">
        <div className="md:flex">
          <div className="md:w-5/12 mx-auto md:px-0 px-5">
            <h1 className="text-4xl mb-4 font-bold mt-8 md:mt-0">
              Passionate About Creating Quality Design
            </h1>
            <h1 className="text-xl mb-4 font-bold mt-6">We Love What We Do</h1>
            <p className="text-sm">
              We are a creative agency working working with brands building
              insightful strategy.
            </p>
            <h1 className="text-xl mb-4 font-bold mt-6">Why Work With Us</h1>
            <p className="text-sm">
              If you ask our clients what it's like working with 7, they'll talk
              about how much we care about their success. For us, real
              relationships fuel real success. We love building brands.
            </p>
          </div>

          <div className="md:w-5/12 md:mt-[-10rem] lg:h-[80vh] md:h-[60vh] h-[55vh] mt-8 relative">
            <Image
              alt={"VR"}
              fill
              src={"/img/vr.jpg"}
              className="object-cover "
            />
          </div>
        </div>
      </section>

      <section className="md:w-8/12 w-11/12 mx-auto mt-20 mb-10 border-t border-t-gray-900">
        <div className="flex justify-between gap-3 border-b border-b-gray-900 py-5">
          <p className="w-[2rem]">2018</p>
          <div className="w-8/12">
            <h1 className="text-xl mb-4 font-bold">New York Design Week</h1>
            <p className="text-sm">
              We ship complex products timely and within budget
            </p>
          </div>
          <h1 className="text-xs uppercase font-bold">main developer</h1>
        </div>
        <div className="flex justify-between gap-3 border-b border-b-gray-900 py-5">
          <p className="w-[2rem]">2019</p>
          <div className="w-8/12">
            <h1 className="text-xl mb-4 font-bold">New York Design Week</h1>
            <p className="text-sm">
              We ship complex products timely and within budget
            </p>
          </div>
          <h1 className="text-xs uppercase font-bold">main developer</h1>
        </div>
        <div className="flex justify-between gap-3 border-b border-b-gray-900 py-5">
          <p className="w-[2rem]">2019</p>
          <div className="w-8/12">
            <h1 className="text-xl mb-4 font-bold">New York Design Week</h1>
            <p className="text-sm">
              We ship complex products timely and within budget
            </p>
          </div>
          <h1 className="text-xs uppercase font-bold">main developer</h1>
        </div>
        <div className="flex justify-between gap-3 border-b border-b-gray-900 py-5">
          <p className="w-[2rem]">2020</p>
          <div className="w-8/12">
            <h1 className="text-xl mb-4 font-bold">New York Design Week</h1>
            <p className="text-sm">
              We ship complex products timely and within budget
            </p>
          </div>
          <h1 className="text-xs uppercase font-bold">main developer</h1>
        </div>
      </section>

      <div className="mb-10">
        <ContactCard />
      </div>
      <div className="my-10">
      <h1 className="md:text-5xl text-3xl mb-16 font-bold text-center">Our clients</h1>
        <Marquee />
      </div>
    </main>
  );
}
