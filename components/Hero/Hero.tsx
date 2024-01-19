import React from "react";
import Link from "next/link";

interface Props {
  heading: string;
  message: string;
}

const Hero = ({ heading, message }: Props) => {
  return (
    <div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover bg-mainpage">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]" />
      <div className="p-5 text-white z-[2] mt-[-10rem]">
        <h1 className="text-6xl font-extrabold">{heading}</h1>
        <p className="py-5 text-xl">{message}</p>
        <Link href="/#galler" passHref>
          <button className="px-8 py-2 rounded-2xl hover:scale-[calc(110%)] transition duration-150 bg-red-500">HERE</button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
