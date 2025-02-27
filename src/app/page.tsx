import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-full relative">
      <div className="text-center p-6">
        <input type="text" className="py-3 px-6 w-[700px] bg-white 
        text-lg rounded-3xl border border-gray-200 *
        text-gray-600 placehollder:text-gray-400
        focus:outline-none shadow-md" placeholder="Enter a City"></input>
      </div>
    </div>
  );
}
