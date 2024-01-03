import Link from "next/link";

export default async function NotFound() {
  return (
    <div className="w-screen md:h-full h-screen flex-col flex justify-center items-center md:pt-24 pt-12 px-3">
      <h1 className="md:text-[15rem] text-[8rem] font-bold text-center">404</h1>
      <h1 className="text-3xl mb-5 font-bold text-center">Look's Like You're Lost</h1>
      <p className="text-sm mb-10 text=-center">The link you followed is probably broken or the page has been removed</p>
      <Link className="uppercase text-xs font-bold text-center mb-20" href="/">Back to home</Link>
    </div>
  );
}
