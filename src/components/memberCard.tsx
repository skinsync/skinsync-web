import React from "react";
import Image from "next/image";

export default function MemberCard({
  name,
  learningPath,
  pic
}: {
  name: string;
  learningPath: string;
  pic: string;
}) {
  return (
    <div className="card flex flex-col items-center justify-center gap-4 p-4 bg-[#fde7ce] rounded-lg w-[300px] text-[#595455] drop-shadow-2xl">
      <div className="avatar px-4 pt-4">
        <div className="w-48 rounded-full">
          <Image src={pic} width={192} height={192} alt={`${name}_${learningPath}_profile`} />
        </div>
      </div>

      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{learningPath}</p>
      </div>
    </div>
  );
}
