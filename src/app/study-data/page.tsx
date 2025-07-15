"use client";
import React, { useEffect, useState } from "react";
import { wheatData } from "@/Data/wheatData";
import axios from "axios";
import { Montserrat } from "next/font/google";
import PrimaryButton from "@/components/UI/PrimaryButton";
import SecondaryButton from "@/components/UI/SecondaryButton";
import Results from "@/components/UI/results";
import Link from "next/link";
import HowToUse from "@/components/UI/HowToUse";
const montserrat = Montserrat({ subsets: ["latin"] });

const page = () => {
  return (
    <>
      <section className="bg-[#F2ECDB]">
        <div className="w-[800px] text-center mx-auto py-10">
          <h2
            className={`text-[3rem] tracking-[-2.72px] leading-[4.5rem] text-center font-[500] ${montserrat.className}`}
          >
            Analyze the Data with Us
          </h2>
          <div className="">
            <p className="text-md mt-10 text-[#3b3f44]">
              Dive into the data and unlock valuable insights! Whether you’re
              analyzing regional trends or predicting wheat yields, we help you
              make sense of key agricultural factors like rainfall, temperature,
              soil quality, and more.
            </p>
            <p className="text-md mb-6 text-[#3b3f44]">
              With our interactive tools, you can easily explore and understand
              how different conditions impact wheat production in various
              districts. Empower your farming decisions with accurate data and
              predictive analysis!
            </p>
          </div>
          <div className="flex gap-3 items-center justify-center">
            <Link href="/study-data/search-by-region">
              <PrimaryButton name="Explore Region Data" />
            </Link>
            <Link href="/study-data/custom-implementation">
              <SecondaryButton name="Custom Data Implementation" />
            </Link>
          </div>
          <HowToUse />
        </div>
      </section>
    </>
  );
};

export default page;
