"use client";
import Image from "next/image";
import Link from "next/link";
import ContactCard from "@/app/components/ContactCard";
import Chat from "@/app/components/Icons/Chat";
import Location from "@/app/components/Icons/Location";
import Phone from "@/app/components/Icons/Phone";
import Marquee from "@/app/components/Marquee";

export default function Page() {
  const projects = [
    {
      backgroundImage: 'url("/img/proj2.jpg")',
      title: "Branding / Development / Marketing",
      description: "Decentralized Lending Platform for Students",
      link: "https://localhost:3000",
    },
    {
      backgroundImage: 'url("/img/proj7.jpg")',
      title: "Branding / Development / Marketing",
      description: "Pay-Pal redesign",
      link: "https://localhost:3000",
    },
    {
      backgroundImage: 'url("/img/proj3.jpg")',
      title: "Branding / Development / Marketing",
      description: "Shopify Redesign",
      link: "https://localhost:3000",
    },
    {
      backgroundImage: 'url("/img/proj4.jpg")',
      title: "Branding / Development / Marketing",
      description: "Money Laundering Compliance Scanner",
      link: "https://localhost:3000",
    },
  ];
  return (
    <main className="m-0">
      <section
        className="h-[65vh] bg-cover bg-center flex flex-col justify-center items-center"
        style={{ backgroundImage: 'url("/img/contact.jpg")' }}
      >
        <h1 className="text-5xl font-bold text-white">Projects</h1>
      </section>

      <section className="mt-5">
        <h1 className="text-6xl font-bold text-center mb-12">Gallery</h1>
        {projects.map((el, index) => (
          <div
            key={index}
            style={{
              backgroundImage: el.backgroundImage,
            }}
            className="lg:h-[70vh] flex flex-col justify-end items-end md:h-[50vh] h-full bg-cover bg-center text-white"
          >
            <div className="w-full flex">
              <div className="w-10/12 mx-auto flex justify-between items-end mb-14 mt-12 md:mt-0">
                <div className="w-6/12">
                  <p className="text-sm md:mb-0 mb-4">{el.title}</p>
                  <h1 className="text-4xl my-8 md:mt-4 font-bold">
                    {el.description}
                  </h1>
                </div>

                <div>
                  <Link
                    className="text-xs uppercase font-bold border-b-white"
                    href={el.link}
                  >
                    View Project
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
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
