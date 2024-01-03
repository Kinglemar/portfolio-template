export default function Location() {
  return (
    <>
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e3ff05] opacity-75"></span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        viewBox="0 0 24 24"
        fill="#000000"
        stroke="#e3ff05"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    </>
  );
}
