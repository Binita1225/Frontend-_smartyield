import { Montserrat } from "next/font/google";
import Link from "next/link";
import React from "react";
const montserrat = Montserrat({ subsets: ["latin"] });

const OurTeam = () => {
  return (
    <>
      <section className=" bg-[#fff] pt-[180px] pb-[100px]" id="our-team">
        <div className="container mx-auto">
          <p className="ps-3">
            Cultivating agriculture that works for the future
          </p>
          <div
            className={`text-[4rem] tracking-[-1.72px] leading-[4.5rem] font-[600] ${montserrat.className}`}
          >
            Our <span className="text-[#F2C200]">Team</span>{" "}
            <span className="text-[#4C6F35]">Members</span>
          </div>
          <div className="grid grid-cols-3 py-10 gap-10">
            <div className="relative group w-full h-[500px]">
              <img
                src="/team1.jpg"
                className="w-full h-full object-cover cursor-pointer"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out gap-3">
                <Link href="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-12 h-12 text-white"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.387.599.111.793-.26.793-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.545-1.383-1.33-1.751-1.33-1.751-1.087-.743.083-.728.083-.728 1.203.084 1.837 1.235 1.837 1.235 1.07 1.832 2.807 1.303 3.492.997.108-.774.419-1.303.762-1.604-2.665-.303-5.467-1.333-5.467-5.933 0-1.31.469-2.381 1.235-3.221-.124-.303-.535-1.52.117-3.166 0 0 1.008-.322 3.3 1.23a11.516 11.516 0 0 1 3.003-.403c1.019.005 2.046.137 3.003.403 2.291-1.553 3.298-1.23 3.298-1.23.654 1.645.243 2.862.12 3.166.768.84 1.235 1.911 1.235 3.221 0 4.61-2.807 5.625-5.479 5.92.43.371.815 1.102.815 2.22 0 1.603-.015 2.896-.015 3.293 0 .319.192.693.8.576C20.565 21.797 24 17.303 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                </Link>
                <Link href="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-12 h-12 text-white"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.23 0H1.77C.79 0 0 .774 0 1.728v20.543C0 23.226.79 24 1.77 24h20.46c.98 0 1.77-.774 1.77-1.729V1.728C24 .774 23.21 0 22.23 0zM7.09 20.452H3.577V9h3.514v11.452zM5.334 7.538a2.043 2.043 0 1 1 0-4.085 2.043 2.043 0 0 1 0 4.085zM20.452 20.452h-3.514v-5.568c0-1.327-.027-3.037-1.85-3.037-1.851 0-2.136 1.445-2.136 2.94v5.665H9.939V9h3.377v1.561h.047c.47-.889 1.62-1.828 3.336-1.828 3.566 0 4.225 2.348 4.225 5.403v6.316z" />
                  </svg>
                </Link>
              </div>
              <div className="pt-4">
                <p className="text-[20px] font-[500]">Dip Kishor Regmi</p>
                <span className="text-[#F2C200]">Backend Developer</span>
              </div>
            </div>
            <div className="relative group w-full h-[500px]">
              <img
                src="/team2.jpg"
                className="w-full h-full object-cover cursor-pointer"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out gap-3">
                <Link href="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-12 h-12 text-white"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.387.599.111.793-.26.793-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.545-1.383-1.33-1.751-1.33-1.751-1.087-.743.083-.728.083-.728 1.203.084 1.837 1.235 1.837 1.235 1.07 1.832 2.807 1.303 3.492.997.108-.774.419-1.303.762-1.604-2.665-.303-5.467-1.333-5.467-5.933 0-1.31.469-2.381 1.235-3.221-.124-.303-.535-1.52.117-3.166 0 0 1.008-.322 3.3 1.23a11.516 11.516 0 0 1 3.003-.403c1.019.005 2.046.137 3.003.403 2.291-1.553 3.298-1.23 3.298-1.23.654 1.645.243 2.862.12 3.166.768.84 1.235 1.911 1.235 3.221 0 4.61-2.807 5.625-5.479 5.92.43.371.815 1.102.815 2.22 0 1.603-.015 2.896-.015 3.293 0 .319.192.693.8.576C20.565 21.797 24 17.303 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                </Link>
                <Link href="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-12 h-12 text-white"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.23 0H1.77C.79 0 0 .774 0 1.728v20.543C0 23.226.79 24 1.77 24h20.46c.98 0 1.77-.774 1.77-1.729V1.728C24 .774 23.21 0 22.23 0zM7.09 20.452H3.577V9h3.514v11.452zM5.334 7.538a2.043 2.043 0 1 1 0-4.085 2.043 2.043 0 0 1 0 4.085zM20.452 20.452h-3.514v-5.568c0-1.327-.027-3.037-1.85-3.037-1.851 0-2.136 1.445-2.136 2.94v5.665H9.939V9h3.377v1.561h.047c.47-.889 1.62-1.828 3.336-1.828 3.566 0 4.225 2.348 4.225 5.403v6.316z" />
                  </svg>
                </Link>
              </div>
              <div className="pt-4">
                <p className="text-[20px] font-[500]">Surakshya Adhikari</p>
                <span className="text-[#F2C200]">ML Developer</span>
              </div>
            </div>
            <div className="relative group w-full h-[500px]">
              <img
                src="/team3.jpg"
                className="w-full h-full object-cover cursor-pointer"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out gap-3">
                <Link href="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-12 h-12 text-white"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.387.599.111.793-.26.793-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.545-1.383-1.33-1.751-1.33-1.751-1.087-.743.083-.728.083-.728 1.203.084 1.837 1.235 1.837 1.235 1.07 1.832 2.807 1.303 3.492.997.108-.774.419-1.303.762-1.604-2.665-.303-5.467-1.333-5.467-5.933 0-1.31.469-2.381 1.235-3.221-.124-.303-.535-1.52.117-3.166 0 0 1.008-.322 3.3 1.23a11.516 11.516 0 0 1 3.003-.403c1.019.005 2.046.137 3.003.403 2.291-1.553 3.298-1.23 3.298-1.23.654 1.645.243 2.862.12 3.166.768.84 1.235 1.911 1.235 3.221 0 4.61-2.807 5.625-5.479 5.92.43.371.815 1.102.815 2.22 0 1.603-.015 2.896-.015 3.293 0 .319.192.693.8.576C20.565 21.797 24 17.303 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                </Link>
                <Link href="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-12 h-12 text-white"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.23 0H1.77C.79 0 0 .774 0 1.728v20.543C0 23.226.79 24 1.77 24h20.46c.98 0 1.77-.774 1.77-1.729V1.728C24 .774 23.21 0 22.23 0zM7.09 20.452H3.577V9h3.514v11.452zM5.334 7.538a2.043 2.043 0 1 1 0-4.085 2.043 2.043 0 0 1 0 4.085zM20.452 20.452h-3.514v-5.568c0-1.327-.027-3.037-1.85-3.037-1.851 0-2.136 1.445-2.136 2.94v5.665H9.939V9h3.377v1.561h.047c.47-.889 1.62-1.828 3.336-1.828 3.566 0 4.225 2.348 4.225 5.403v6.316z" />
                  </svg>
                </Link>
              </div>
              <div className="pt-4">
                <p className="text-[20px] font-[500]">Prajwal Baral</p>
                <span className="text-[#F2C200]">Frontend Developer</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurTeam;
