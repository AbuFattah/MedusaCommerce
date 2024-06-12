"use client";
import Image from "next/image";
import Link from "next/link";
import { MouseEvent } from "react";

const ProductList = () => {
  const handleButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    // Add your button click logic here
  };

  console.log("plist");
  return (
    <div className="flex gap-x-8 gap-y-16 justify-center flex-wrap">
      <Link
        href="/test"
        className="w-36 sm:w-44  flex flex-col gap-2 relative shrink-0 "
      >
        <div className="relative w-full h-40">
          <div
            className="w-full h-full grid place-items-center
          "
          >
            <div className="absolute inset-0 bg-black opacity-5 rounded-md z-40 pointer-events-none"></div>
            <Image
              src="/products/aptamil1.jpg"
              width={150}
              height={150}
              className="absolute object-cover rounded-md z-20 hover:scale-105 transition-all ease-out duration-500 text-center "
              alt=""
            />
          </div>
          <button
            className="absolute w-11 h-11 bg-white rounded-full right-2 bottom-2 z-50 grid place-items-center hover:bg-gray-200 transition-colors ease-in-out duration-300"
            onClick={handleButtonClick}
          >
            <span className="scale-150">+</span>
          </button>
        </div>
        <span className="text-sm font-semibold text-gray-600">TK 340</span>
        <span className="text-sm  text-gray-400">
          {"Lorem ipsum dolor sit ametasdf."}
        </span>
        {/* <div className="flex justify-between">
          <span className="font-medium text-base">Product Name</span>
          <span className="font-semibold text-base">$49</span>
        </div>
        <div className="text-sm text-gray-500">My description</div> */}
      </Link>
      <Link
        href="/test"
        className="w-36 sm:w-44  flex flex-col gap-2 relative shrink-0 "
      >
        <div className="relative w-full h-40">
          <div
            className="w-full h-full grid place-items-center
          "
          >
            <div className="absolute inset-0 bg-black opacity-5 rounded-md z-40 pointer-events-none"></div>
            <Image
              src="/products/aptamil2.jpg"
              width={150}
              height={150}
              className="absolute object-cover rounded-md z-20 hover:scale-105 transition-all ease-out duration-500 text-center "
              alt=""
            />
          </div>
          <button
            className="absolute w-11 h-11 bg-white rounded-full right-2 bottom-2 z-50 grid place-items-center hover:bg-gray-200 transition-colors ease-in-out duration-300"
            onClick={handleButtonClick}
          >
            <span className="scale-150">+</span>
          </button>
        </div>
        <span className="text-sm font-semibold text-gray-600">TK 340</span>
        <span className="text-sm  text-gray-400">
          {"Lorem ipsum dolor sit ametasdf."}
        </span>
        {/* <div className="flex justify-between">
          <span className="font-medium text-base">Product Name</span>
          <span className="font-semibold text-base">$49</span>
        </div>
        <div className="text-sm text-gray-500">My description</div> */}
      </Link>
      <Link
        href="/test"
        className="w-36 sm:w-44  flex flex-col gap-2 relative shrink-0 "
      >
        <div className="relative w-full h-40">
          <div
            className="w-full h-full grid place-items-center
          "
          >
            <div className="absolute inset-0 bg-black opacity-5 rounded-md z-40 pointer-events-none"></div>
            <Image
              src="/products/aptamil3.jpg"
              width={150}
              height={150}
              className="absolute object-cover rounded-md z-20 hover:scale-105 transition-all ease-out duration-500 text-center "
              alt=""
            />
          </div>
          <button
            className="absolute w-11 h-11 bg-white rounded-full right-2 bottom-2 z-50 grid place-items-center hover:bg-gray-200 transition-colors ease-in-out duration-300"
            onClick={handleButtonClick}
          >
            <span className="scale-150">+</span>
          </button>
        </div>
        <span className="text-sm font-semibold text-gray-600">TK 340</span>
        <span className="text-sm  text-gray-400">
          {"Lorem ipsum dolor sit ametasdf."}
        </span>
        {/* <div className="flex justify-between">
          <span className="font-medium text-base">Product Name</span>
          <span className="font-semibold text-base">$49</span>
        </div>
        <div className="text-sm text-gray-500">My description</div> */}
      </Link>
      <Link
        href="/test"
        className="w-36 sm:w-44  flex flex-col gap-2 relative shrink-0 "
      >
        <div className="relative w-full h-40">
          <div
            className="w-full h-full grid place-items-center
          "
          >
            <div className="absolute inset-0 bg-black opacity-5 rounded-md z-40 pointer-events-none"></div>
            <Image
              src="/products/aptamil4.jpg"
              width={150}
              height={150}
              className="absolute object-cover rounded-md z-20 hover:scale-105 transition-all ease-out duration-500 text-center "
              alt=""
            />
          </div>
          <button
            className="absolute w-11 h-11 bg-white rounded-full right-2 bottom-2 z-50 grid place-items-center hover:bg-gray-200 transition-colors ease-in-out duration-300"
            onClick={handleButtonClick}
          >
            <span className="scale-150">+</span>
          </button>
        </div>
        <span className="text-sm font-semibold text-gray-600">TK 340</span>
        <span className="text-sm  text-gray-400">
          {"Lorem ipsum dolor sit ametasdf."}
        </span>
        {/* <div className="flex justify-between">
          <span className="font-medium text-base">Product Name</span>
          <span className="font-semibold text-base">$49</span>
        </div>
        <div className="text-sm text-gray-500">My description</div> */}
      </Link>
      <Link
        href="/test"
        className="w-36 sm:w-44  flex flex-col gap-2 relative shrink-0 "
      >
        <div className="relative w-full h-40">
          <div
            className="w-full h-full grid place-items-center
          "
          >
            <div className="absolute inset-0 bg-black opacity-5 rounded-md z-40 pointer-events-none"></div>
            <Image
              src="/products/aptamil1.jpg"
              width={150}
              height={150}
              className="absolute object-cover rounded-md z-20 hover:scale-105 transition-all ease-out duration-500 text-center "
              alt=""
            />
          </div>
          <button
            className="absolute w-11 h-11 bg-white rounded-full right-2 bottom-2 z-50 grid place-items-center hover:bg-gray-200 transition-colors ease-in-out duration-300"
            onClick={handleButtonClick}
          >
            <span className="scale-150">+</span>
          </button>
        </div>
        <span className="text-sm font-semibold text-gray-600">TK 340</span>
        <span className="text-sm  text-gray-400">
          {"Lorem ipsum dolor sit ametasdf."}
        </span>
        {/* <div className="flex justify-between">
          <span className="font-medium text-base">Product Name</span>
          <span className="font-semibold text-base">$49</span>
        </div>
        <div className="text-sm text-gray-500">My description</div> */}
      </Link>
      <Link
        href="/test"
        className="w-36 sm:w-44  flex flex-col gap-2 relative shrink-0 "
      >
        <div className="relative w-full h-40">
          <div
            className="w-full h-full grid place-items-center
          "
          >
            <div className="absolute inset-0 bg-black opacity-5 rounded-md z-40 pointer-events-none"></div>
            <Image
              src="/products/aptamil1.jpg"
              width={150}
              height={150}
              className="absolute object-cover rounded-md z-20 hover:scale-105 transition-all ease-out duration-500 text-center "
              alt=""
            />
          </div>
          <button
            className="absolute w-11 h-11 bg-white rounded-full right-2 bottom-2 z-50 grid place-items-center hover:bg-gray-200 transition-colors ease-in-out duration-300"
            onClick={handleButtonClick}
          >
            <span className="scale-150">+</span>
          </button>
        </div>
        <span className="text-sm font-semibold text-gray-600">TK 340</span>
        <span className="text-sm  text-gray-400">
          {"Lorem ipsum dolor sit ametasdf."}
        </span>
        {/* <div className="flex justify-between">
          <span className="font-medium text-base">Product Name</span>
          <span className="font-semibold text-base">$49</span>
        </div>
        <div className="text-sm text-gray-500">My description</div> */}
      </Link>
    </div>
  );
};

export default ProductList;
