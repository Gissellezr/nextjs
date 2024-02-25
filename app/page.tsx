import Image from "next/image";
import Logo from "../public/logo.png";
import React from "react";

export default function Home() {
 
 

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section id="landing">
        <div className="relative flex flex-col items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
          <div className="relative">
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
              src={Logo}
              alt="Logo"
              width={480}
              height={96}
              priority
            />
          </div>
          
          {/* Text*/}
          {/* <div className="mt-[-140px] transform translate-x-20 z-10 mb-10 sm:mb-5">
            <h1 className="text-3xl font-light text-gray-500">
              Visual Designer
            </h1>
          </div> */}


        </div>

        {/* Navigation Menu */}
        <div className="flex flex-col mt-16 sm:flex-row sm:items-center sm:justify-center ">
          <button className="px-4 py-2 mb-4 sm:mb-0 sm:mr-4 rounded-md text-xl font-light hover:font-semibold">About</button>
          <button className="px-4 py-2 mb-4 sm:mb-0 sm:mx-40 rounded-md text-xl font-light hover:font-semibold">Work</button>
          <button className="px-4 py-2 sm:ml-4 rounded-md text-xl font-light hover:font-semibold">Contact</button>
        </div>


      </section>
    </main>
  );
}
