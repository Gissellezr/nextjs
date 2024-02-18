import Image from "next/image";
import Logo from "../public/logo.png";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      <div className="relative flex flex-col items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <div className="relative">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src={Logo}
            alt="Logo"
            width={320}
            height={64}
            priority
          />
        </div>
        {/* Text */}
        <div className="mt-[-80px] transform translate-x-20  z-10">
          <h1 className="text-xl font-bold text-gray-500">
            Visual Designer.
          </h1>
        </div> 
      </div> 
   
      {/* Buttons */}
      <div className="flex justify-center mt-6">
        <button className="px-4 py-2 mr-2 rounded-md">Work</button>
        <button className="px-4 py-2 ml-2 rounded-md">About</button>
        <button className="px-4 py-2 ml-2 rounded-md">Contact</button>
      </div>
    </main>
  );
}
