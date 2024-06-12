import Image from "next/image";
import Link from "next/link";
// /categories/baby-care.jpg
// /categories/baby-diaper.jpg
// /categories/baby-food.jpg
// /categories/formula-milk.jpg
const CategoryList = () => {
  return (
    <div className=" ">
      <div className="flex px-4 gap-4 md:gap-8 overflow-x-scroll scrollbar-hide">
        <Link
          href="/list?cat=test"
          className="flex-shrink-0 w-52 sm:w-1/2 lg:w-1/4 xl:w-1/6  h-max"
        >
          <div className="relative bg-slate-100 w-full h-52  overflow-hidden">
            <Image
              src="/categories/baby-care.jpg"
              alt=""
              fill
              sizes="20vw"
              className="object-cover"
            />
          </div>
          <h1 className="mt-6 font-light tracking-wide">Baby Care</h1>
        </Link>
        <Link
          href="/list?cat=test"
          className="flex-shrink-0 w-52 sm:w-1/2 lg:w-1/4 xl:w-1/6  h-max"
        >
          <div className="relative bg-slate-100 w-full h-52  overflow-hidden">
            <Image
              src="/categories/baby-diaper.jpg"
              alt=""
              fill
              sizes="20vw"
              className="object-cover"
            />
          </div>
          <h1 className="mt-6 font-light tracking-wide ">Baby Diaper</h1>
        </Link>
        <Link
          href="/list?cat=test"
          className="flex-shrink-0 w-52 sm:w-1/2 lg:w-1/4 xl:w-1/6  h-max"
        >
          <div className="relative bg-slate-100 w-full h-52  overflow-hidden">
            <Image
              src="/categories/baby-food.jpg"
              alt=""
              fill
              sizes="20vw"
              className="object-cover"
            />
          </div>
          <h1 className="mt-6 font-light tracking-wide">Baby Food</h1>
        </Link>
        <Link
          href="/list?cat=test"
          className="flex-shrink-0 w-52 sm:w-1/2 lg:w-1/4 xl:w-1/6  h-max"
        >
          <div className="relative bg-slate-100 w-full h-52  overflow-hidden">
            <Image
              src="/categories/formula-milk.jpg"
              alt=""
              fill
              sizes="20vw"
              className="object-cover"
            />
          </div>
          <h1 className="mt-6 font-light tracking-wide">Formula Milk</h1>
        </Link>
        <Link
          href="/list?cat=test"
          className="flex-shrink-0 w-52 sm:w-1/2 lg:w-1/4 xl:w-1/6  h-max"
        >
          <div className="relative bg-slate-100 w-full h-52  overflow-hidden">
            <Image
              src="/categories/baby-accessories.jpg"
              alt=""
              fill
              sizes="20vw"
              className="object-cover"
            />
          </div>
          <h1 className="mt-6 font-light tracking-wide">Baby Accessories</h1>
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
