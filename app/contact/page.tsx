"use client";
import Image from "next/image";
import Link from "next/link";
import ContactCard from "@/app/components/ContactCard";
import Chat from "@/app/components/Icons/Chat";
import Location from "@/app/components/Icons/Location";
import Phone from "@/app/components/Icons/Phone";
import Marquee from "@/app/components/Marquee";

export default function Page() {
  return (
    <main className="m-0">
      <section
        className="h-[65vh] bg-cover bg-center flex flex-col justify-center items-center"
        style={{ backgroundImage: 'url("/img/contact.jpg")' }}
      >
        <h1 className="text-5xl font-bold text-white">Contact</h1>
      </section>

      <section className="py-14">
        <section className="w-10/12 mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            <div className="flex flex-col gap-14 justify-between bg-[#F6f5F3] p-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <div>
                <h1 className="text-xl mb-4 font-bold">Office address</h1>
                <p className="text-sm mb-10">Address addy</p>

                {/* <Link
                className="mt-14 text-xs uppercase font-bold"
                href={"services"}
              >
                View details
              </Link> */}
              </div>
            </div>
            <div className="flex flex-col gap-14 justify-between bg-[#F6f5F3] p-6">
              <Chat />
              <div>
                <h1 className="text-xl mb-4 font-bold">Email Address</h1>
                <p className="text-sm mb-3">hello@paragon.com</p>
                <p className="text-sm mb-5">hello@paragon.com</p>

                {/* <Link
                className="mt-14 text-xs uppercase font-bold"
                href={"services"}
              >
                View details
              </Link> */}
              </div>
            </div>
            <div className="flex flex-col gap-14 justify-between bg-[#F6f5F3] p-6">
              <Phone />
              <div>
                <h1 className="text-xl mb-4 font-bold">Phone number</h1>
                <p className="text-sm mb-3">+1234683682948</p>
                <p className="text-sm mb-5">+1234683682948</p>

                {/* <Link className="text-xs uppercase font-bold" href={"services"}>
                View details
              </Link> */}
              </div>
            </div>
          </div>
        </section>
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
