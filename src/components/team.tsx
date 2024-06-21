import React from "react";
import MemberCard from "./memberCard";

export default function Team() {
  return (
    <div className="w-full place-items-center flex justify-center">
      <div className=" max-w-screen-xl flex flex-col items-center justify-center gap-8 p-8 font-sans">
        <h2 className="text-4xl font-semibold font">Our Team Member</h2>
        <div className="flex flex-row gap-8 flex-wrap justify-center">
          <MemberCard name="Gybran Khairul Anam" learningPath="Machine Learning" pic="/gybran-profile.png" />
          <MemberCard name="Cheryl Almirah Azmi" learningPath="Machine Learning" pic="/cheryl-profile.jpg" />
          <MemberCard name="Naufal Hafizh Muttaqin" learningPath="Machine Learning" pic="/hafizh-profile.jpg" />
          <MemberCard name="Naufal Dzaki Imtiyaz" learningPath="Cloud Computing" pic="/naufal-dzaki-profile.jpg" />
          <MemberCard name="M. Nur Syamsi Maulidi" learningPath="Cloud Computing" pic="/nur-syamsi-profile.jpg" />
          <MemberCard name="Satrio Budi Pamungkas " learningPath="Mobile Developer" pic="/satrio-profile.jpg" />
          <MemberCard name=" Muhammad Razi Rizzardi" learningPath="Mobile Developer" pic="/razi-profile.jpg" />
        </div>
      </div>
    </div>
  );
}
