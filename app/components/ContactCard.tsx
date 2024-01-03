"use client";
import { useState } from "react";
import Link from "next/link";
import ReactMapboxGl, { Layer, Feature, Marker, Popup } from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const ContactCard: React.FunctionComponent = () => {
  const Map = ReactMapboxGl({
    accessToken:
      "pk.eyJ1Ijoia2luZ2xlbWFyIiwiYSI6ImNsbnpvbzNvdjA1ZDcyanBqMmxzdWs3NGoifQ.ezuyvpbxoSxSkbJWysT-2Q",
  });
  return (
    <section className="bg-[#e3ff05] py-24 mt-32">
      <div className="md:flex w-full justify-between">
        <div className="md:w-5/12 mt-[-10rem]">
          <Map
            center={[-0.2416815, 51.5285582]}
            zoom={[16]}
            style="mapbox://styles/mapbox/streets-v9"
            className={"w-100 md:h-[85vh] h-[45vh]"}
          >
            <Marker coordinates={[-0.2416815, 51.5285582]}>
                <img height={24} width={24} src="/public/img/arrow-up-outline.svg" alt="" />
              </Marker>
            {/* <Marker
              latitude={-122.4194}
              longitude={37.7749}
              offsetLeft={-20}
              offsetTop={-10}
            >
              <div className="p-3 bg-black text-white">Marker</div>
            </Marker> */}
          </Map>
        </div>
        <div className="md:w-5/12 mx-auto">
          <h1 className="text-4xl mb-4 font-bold mt-8 md:mt-0 md:mx-0 mx-3">
            Have Any Project on your mind?
          </h1>
          <p className="text-sm md:mx-0 mx-3">
            Great We're excited to hear from you and let's start something
          </p>

          <section className="w-11/12 mx-auto md:w-full">
            <div className="flex w-full mt-5 mb-3 gap-3">
              <input
                className="border-b-2 border-b-slate-950 w-6/12 placeholder:text-black outline-0 focus:border-b-2 focus:border-blue-400 py-2 bg-[#e3ff05]"
                placeholder="Full name*"
                type="text"
                name="Full name"
                id=""
              />
              <input
                className="border-b-2 border-b-slate-950 w-6/12 placeholder:text-black outline-0 focus:border-b-2 focus:border-blue-400 py-2 bg-[#e3ff05]"
                placeholder="Email address*"
                type="email"
                name="Email"
                id=""
              />
            </div>

            <input
              className="mt-4 border-b-2 border-b-slate-950 w-full placeholder:text-black outline-0 focus:border-b-2 focus:border-blue-400 py-2 bg-[#e3ff05]"
              placeholder="Website link"
              type="text"
              name=""
              id=""
            />

            <textarea
              className="mt-4 border-b-2 border-b-slate-950 w-full placeholder:text-black outline-0 focus:border-b-2 focus:border-blue-400 py-2 bg-[#e3ff05]"
              placeholder="How Can We Help You*"
              name=""
              id=""
              rows={3}
            ></textarea>

            <button
              type="submit"
              className="mt-10 uppercase text-xs font-bold after:content-[none] hover:bg-white hover:text-black transition ease-in-out delay-150 duration-300 text-white w-fit mx-auto bg-black py-3 px-6"
            >
              Send Message
            </button>
          </section>
        </div>
      </div>
    </section>
  );
};

export default ContactCard;
