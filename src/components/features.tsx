import React from "react";
import Image from "next/image";

export default function Features() {
  return (
    <div className="w-full place-items-center flex justify-center text-center">
      <div className="w-full flex flex-col items-center justify-center gap-8 p-8 font-sans">
        <h2 className="text-4xl font-semibold font text-[#595455]">Features</h2>
        <div className="flex items-center gap-8 justify-evenly flex-wrap w-full">
          <div className="flex flex-col items-center gap-6 w-[700px]">
            <h3 className="text-[36px] font-sans">
              Facial skin type detection
            </h3>
            <Image src="/image-6.png" height={277} width={277} />
            <p className="text-[18px]">
              scan your face and know your skin type
            </p>
          </div>
          <div className="flex flex-col items-center gap-6 w-[700px]">
            <h3 className="text-[36px] font-sans text-center">
              Facial Skincare Recommendations
            </h3>
            <Image src="/image-7.png" height={277} width={277} />
            <p className="text-[18px] text-center">
              After knowing your skin type, get <br /> product recommendations for
              your facial skincare
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
