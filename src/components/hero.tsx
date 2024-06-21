import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row-reverse lg:gap-28 px-8">
        <div className="mockup-phone flex-none">
          <div className="camera"></div>
          <div className="display">
            <div className="artboard artboard-demo">
              <Image
                src="/welcome_page.png"
                alt="Skinsync demo"
                width={360}
                height={640}
              />
            </div>
          </div>
        </div>
        <div className="flex-1">
          <h1 className="text-5xl font-semibold font-serif">SkinSync</h1>
          <p className="py-6">
            SkinSync is an application that can help you to recognize your
            facial skin type and provide facial skincare Recommendations
            according to your facial skin type.
          </p>

          <Link
            href="https://drive.google.com/file/d/14wwpM9Pqjyina74Oo2_oazLvEvrJkGok/view?usp=sharing"
            target="_blank"
          >
            <button className="btn btn-primary grow-0">Download Apps</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
