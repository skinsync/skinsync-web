import React from "react";
import MemberCard from "./memberCard";

export default function Team() {
  return (
    <div className="w-full place-items-center flex justify-center">
      <div className=" max-w-screen-xl flex flex-col items-center justify-center gap-8 p-8 font-sans">
        <h2 className="text-4xl font-semibold font">Our Team Member</h2>
        <div className="flex flex-row gap-8 flex-wrap justify-center">
          <MemberCard name="Gybran Khairul Anam" learningPath="Machine Learning" pic="" />
          <MemberCard name="Cheryl Almirah Azmi" learningPath="Machine Learning" pic="" />
          <MemberCard name="Naufal Hafizh Muttaqin" learningPath="Machine Learning" pic="" />
          <MemberCard name="Naufal Dzaki Imtiyaz" learningPath="Cloud Computing" pic="/naufal-dzaki-profile.jpg" />
          <MemberCard name="M. Nur Syamsi Maulidi" learningPath="Cloud Computing" pic="" />
          <MemberCard name="Satrio Budi Pamungkas " learningPath="Mobile Developer" pic="" />
          <MemberCard name=" Muhammad Razi Rizzardi" learningPath="Mobile Developer" pic="" />
        </div>
      </div>
    </div>
  );
}
