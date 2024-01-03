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
            <Location />
            <div>
              <h1 className="text-xl mb-4 font-bold">Office address</h1>
              <p className="text-sm mb-10">
                Address addy
              </p>

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
              <p className="text-sm mb-3">
                hello@paragon.com
              </p>
              <p className="text-sm mb-5">
                hello@paragon.com
              </p>

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
              <p className="text-sm mb-3">
                +1234683682948
              </p>
              <p className="text-sm mb-5">
                +1234683682948
              </p>

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
