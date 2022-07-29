import profileImg from "../images/user.png";
import { SectionTitle } from "./SectionTitle";

export const ProfileSection = (props) => {
  return (
    <div>
      <div className="grid grid-cols-5">
        <div className="w-24 h-24">
          <img src={profileImg} alt="Profile" />
        </div>
        <div className="col-span-4">
          <div className="font-bold text-4xl">Ashley Lopez</div>
          <div className="text-red-500 text-xl mt-2">Cook</div>
          <div className="text-gray-500 mt-4">
            <div>
              <i className="fa-solid fa-location-dot"></i> 1300 McDougal
              Boulevard, Bronx, United States
            </div>
            <div className="grid grid-cols-3">
              <div>a.lop@yahoo.com</div>
              <div className="col-span-2">(718)810-1234</div>
            </div>
          </div>
        </div>
      </div>
      <SectionTitle>Profile</SectionTitle>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut officia
        officiis nulla laborum hic ut temporibus obcaecati accusantium ad, eius
        eveniet fuga possimus amet magni corrupti adipisci alias consectetur
        odit?
      </div>
    </div>
  );
};
