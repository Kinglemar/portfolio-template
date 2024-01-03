"use client";
import Link from "next/link";

function Footer() {
  const date = new Date().getFullYear();
  return (
    <main className="bg-[#f6f5f3] pt-20 pb-10">
      <section className="md:w-10/12 w-11/12 mx-auto flex justify-between items-center border-y-2 border-y-gray-900 py-5">
        <div className="flex items-center gap-4">
          <Link
            className="uppercase mb-0 text-xs font-bold after:content-[none] border-b-0"
            href={"/about"}
          >
            about us
          </Link>
          <Link
            className="uppercase mb-0 text-xs font-bold after:content-[none] border-b-0"
            href={"/services"}
          >
            services
          </Link>
          <Link
            className="uppercase mb-0 text-xs font-bold after:content-[none] border-b-0"
            href={"/projects"}
          >
            Projects
          </Link>
          <Link
            className="uppercase mb-0 text-xs font-bold after:content-[none] border-b-0"
            href={"/contact"}
          >
            contact
          </Link>
        </div>
      </section>

      <section className="md:w-10/12 w-11/12 mx-auto flex justify-between items-center py-8">
        <div className="flex gap-4 items-center">
          <Link
            className="mb-0 after:content-[none] border-b-0"
            href={"https://facebook.com"}
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="#000"
            >
              <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.5h-2.8V24C19.62 23.1 24 18.1 24 12.07" />
            </svg>
          </Link>

          <Link
            className="mb-0 after:content-[none] border-b-0"
            href={"https://facebook.com"}
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 14 14"
            >
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M3.39.787A2.604 2.604 0 0 0 .786 3.39v6.944a2.604 2.604 0 0 0 2.604 2.604h6.944a2.604 2.604 0 0 0 2.603-2.604V3.39A2.604 2.604 0 0 0 10.334.787zm7.693 2.607a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m-4.22 1.388a2.08 2.08 0 1 0 0 4.16a2.08 2.08 0 0 0 0-4.16m-3.081 2.08a3.08 3.08 0 1 1 6.16 0a3.08 3.08 0 0 1-6.16 0"
                clip-rule="evenodd"
              />
            </svg>
          </Link>

          <Link
            className="mb-0 after:content-[none] border-b-0"
            href={"https://facebook.com"}
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="23"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584l-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
              />
            </svg>
          </Link>
          <Link
            className="mb-0 after:content-[none] border-b-0"
            href={"https://facebook.com"}
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#000"
            >
              <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76h-.03c-1.22 0-2-.83-2-1.87 0-1.06.8-1.87 2.05-1.87 1.24 0 2 .8 2.02 1.87 0 1.04-.78 1.87-2.05 1.87zM20.34 20.1h-3.63v-5.8c0-1.45-.52-2.45-1.83-2.45-1 0-1.6.67-1.87 1.32-.1.23-.11.55-.11.88v6.05H9.28s.05-9.82 0-10.84h3.63v1.54a3.6 3.6 0 0 1 3.26-1.8c2.39 0 4.18 1.56 4.18 4.89v6.21z" />
            </svg>
          </Link>
        </div>

        <div>
          <p className="text-xs">Copyright &copy; {date} Paragon</p>
        </div>
      </section>
    </main>
  );
}

export default Footer;
