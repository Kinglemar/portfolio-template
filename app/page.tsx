import Image from "next/image";
import Link from "next/link";
import Dots from "@/app/components/Icons/4dots";
import ContactCard from "@/app/components/ContactCard";


export default function Home() {

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
    <main className="m-0 min-h-[70vh]">
      <section className="mt-14 lg:w-10/12 md:mx-auto md:w-11/12 w-11/12 mx-auto">
        <div className="mb-3 font-bold lg:w-10/12 mx-auto px-2">
          <h1 className="md:text-8xl md:leading-[7.2rem] text-4xl leading-[4.8rem] text-end">
            Creating The
          </h1>
          <h1 className="md:text-8xl md:leading-[7.2rem] text-4xl leading-[4.8rem] text-start">
            Best Digital
          </h1>
          <h1 className="md:text-8xl md:leading-[7.2rem] text-4xl leading-[4.8rem] text-end">
            Solution
          </h1>
        </div>

        <div className="flex md:gap-16 gap-6 md:items-end items-center justify-end md:w-9/12 w-11/12 md:ml-auto mx-auto relative md:mt-[-3rem] mt-8">
          <Link
            href={"/projects"}
            className="animate-bounce hover:animate-none transition ease-in-out delay-150 rounded-full bg-[#e3ff05] lg:p-7 lg:py-12 md:p-8 sm:p-3 sm:py-8 p-6 relative after:content-[none] border-none"
          >
            <p className="uppercase text-xs font-bold text-center">
              View Our works
            </p>
          </Link>
          <div>
            <p className="text-sm md:mb-6">
              We are digital agency that helps businesses develop immersive and
              engaging user experiences that drive top level growth
            </p>
          </div>
        </div>
      </section>

      <section className="relative w-full lg:h-[75vh] md:h-[60vh] sm:h-[50vh] h-[35vh] mt-16 ">
        <Image
          alt={"Collaborate"}
          fill
          src={"/img/collab.jpg"}
          className="object-cover"
        />
      </section>

      <section className="md:w-10/12 w-11/12 mx-auto mt-20 mb-10">
        <div className="md:w-6/12 mx-auto w-10/12">
          <h1 className="text-5xl text-center leading-[3.2rem] font-bold">
            What We Can Do For Our clients
          </h1>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <div className="flex flex-col gap-14 justify-between bg-[#F6f5F3] p-6">
            <Dots />
            <div>
              <h1 className="text-xl mb-4">Branding Design</h1>
              <p className="text-sm mb-10">
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
          <div className="flex flex-col gap-14 justify-between bg-[#F6f5F3] p-6">
            <Dots />
            <div>
              <h1 className="text-xl mb-4">Web Development</h1>
              <p className="text-sm mb-10">
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
          <div className="flex flex-col gap-14 justify-between bg-[#F6f5F3] p-6">
            <Dots />
            <div>
              <h1 className="text-xl mb-4">Digital Marketing</h1>
              <p className="text-sm mb-10">
                We care about relationships that fuel success
              </p>

              <Link className="text-xs uppercase font-bold" href={"services"}>
                View details
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="md:w-8/12 w-11/12 mx-auto mt-20 mb-10 border-t border-t-gray-900">
        <div className="flex justify-between gap-3 border-b border-b-gray-900 py-5">
          <p className="w-[2rem]">2017</p>
          <div className="w-8/12">
            <h1 className="text-xl mb-4 font-bold">New York Design Week</h1>
            <p className="text-sm">
              We ship complex products timely and within budget
            </p>
          </div>
          <h1 className="text-xs uppercase font-bold">main developer</h1>
        </div>
        <div className="flex justify-between gap-3 border-b border-b-gray-900 py-5">
          <p className="w-[2rem]">2017</p>
          <div className="w-8/12">
            <h1 className="text-xl mb-4 font-bold">New York Design Week</h1>
            <p className="text-sm">
              We ship complex products timely and within budget
            </p>
          </div>
          <h1 className="text-xs uppercase font-bold">main developer</h1>
        </div>
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

      <section className="mt-20">
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
                  <h1 className="text-4xl my-8 md:mt-4 font-bold">{el.description}</h1>
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

      <ContactCard/>

      <section className="bg-[#f6f5f3] pt-24">
        <div className="md:w-8/12 w-11/12 mx-auto">
          <h1 className="md:text-7xl text-4xl mb-4 text-center">
            Let's Create Something Great
          </h1>
          <p className="text-sm mb-10 text-center">
            We shift you from today's reality to tommorrow's potential.
          </p>
          <div className="flex justify-center items-center">
            <Link
              href={"/"}
              className="uppercase text-xs font-bold after:content-[none] text-white w-fit mx-auto bg-black py-3 px-6"
            >
              Let's talk with us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
