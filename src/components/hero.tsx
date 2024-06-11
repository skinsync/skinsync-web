import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row-reverse">
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
        <div className="flex-auto">
          <h1 className="text-5xl font-bold">SkinSync</h1>
          <p className="py-6">
            SkinSync is an application that can help you to recognize your
            facial skin type and provide facial skincare Recommendations
            according to your facial skin type.
          </p>
          <button className="btn btn-primary">Download Apps</button>
        </div>
      </div>
    </div>
  );
}
