"use client";
import React from "react";
import PageLoader from "@/app/components/Icons/PageLoader";
const Loading = (): React.ReactNode => (
  <div className="flex flex-col justify-center items-center w-screen h-[80vh] loader-bg">
    <h1 className="text-3xl">Loading...</h1>

    <PageLoader />
  </div>
);

export default Loading;
