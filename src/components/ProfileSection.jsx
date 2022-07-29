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
      <div className="w-3/4">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita
        debitis eligendi eius ut nam recusandae! Minus deserunt assumenda
        praesentium esse molestiae nisi rerum, in porro fugit architecto
        similique explicabo consequuntur! Qui quibusdam voluptates odio nihil
        pariatur perferendis obcaecati cumque hic expedita harum. Eaque quasi
        quibusdam nobis reprehenderit odio consequuntur voluptas excepturi,
        soluta eos cum placeat sunt praesentium suscipit labore ipsum? Repellat
        ratione delectus iure exercitationem natus, voluptates excepturi
        praesentium fugit similique magni perferendis explicabo cupiditate
        facere ipsam commodi vitae rerum, maiores, debitis tempora inventore
        saepe iste velit reprehenderit. Fuga, odit?
      </div>
    </div>
  );
};
