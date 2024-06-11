"use client";

import Image from "next/image";

const CartModal = () => {
  const cartItems = true;

  return (
    <div className="absolute p-5 bg-white shadow-md w-max top-10 right-0 flex flex-col gap-4 ">
      {cartItems ? (
        <>
          <h3 className="text-base">Shopping Cart</h3>
          <div className="flex flex-col gap-8">
            {/* ITEM */}
            <div className="flex gap-4">
              <div className="w-max h-max px-2 py-6 bg-gray-300 grid place-items-center rounded-sm">
                <Image
                  src="https://images.pexels.com/photos/296282/pexels-photo-296282.jpeg"
                  width={60}
                  height={86}
                  alt=""
                  className="object-cover rounded-md"
                />
              </div>
              {/* text container  */}
              <div className="flex flex-col justify-between w-full">
                {/* TOP */}
                <div className="">
                  {/* title */}
                  <div className="flex items-center justify-between gap-3">
                    <h3 className=" font-semibold">Product Name</h3>
                    <div className="text-sm bg-gray-50 p-1 rounded-sm">$49</div>
                  </div>
                  {/* description */}
                  <div className="">
                    <p className="text-gray-500 text-xs">available</p>
                  </div>
                </div>
                {/* BOTTOM */}
                <div className="flex justify-between text-xs">
                  <p className="text-gray-500">Qty 1</p>
                  <p className="text-blue-500">Remove</p>
                </div>
              </div>
            </div>
            {/* ITEM */}
            <div className="flex gap-4">
              <div className="w-max h-max px-2 py-6 bg-gray-300 grid place-items-center rounded-sm">
                <Image
                  src="https://images.pexels.com/photos/296282/pexels-photo-296282.jpeg"
                  width={60}
                  height={76}
                  alt=""
                  className="object-cover rounded-md"
                />
              </div>
              {/* text container  */}
              <div className="flex flex-col justify-between w-full">
                {/* TOP */}
                <div className="">
                  {/* title */}
                  <div className="flex items-center justify-between gap-3">
                    <h3 className=" font-semibold">Product Name</h3>
                    <div className="text-sm bg-gray-50 p-1 rounded-sm">$49</div>
                  </div>
                  {/* description */}
                  <div className="">
                    <p className="text-gray-500 text-xs">available</p>
                  </div>
                </div>
                {/* BOTTOM */}
                <div className="flex justify-between text-xs">
                  <p className="text-gray-500">Qty 1</p>
                  <p className="text-blue-500">Remove</p>
                </div>
              </div>
            </div>
          </div>
          {/* subtotal bottom */}
          <div className="">
            <div className="flex justify-between text-sm font-semibold">
              <h5 className="">Subtotal</h5>
              <h6>$49</h6>
            </div>
            <p className="text-gray-500 text-sm mt-2 mb-5">
              Lorem ipsum dolor sit amet dfds sd fdd f.
            </p>
            <div className="flex justify-between text-sm">
              <button className="btn-light ">View Cart</button>
              <button className="btn-dark">Checkout</button>
            </div>
          </div>
        </>
      ) : (
        <div className="text-xs">Cart is Empty</div>
      )}
    </div>
  );
};

export default CartModal;
