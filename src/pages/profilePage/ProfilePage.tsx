import { FC } from "react";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

const ProfilePage: FC = () => {
  const trophies = Array(16).fill("/trophey.png");
  return (
    <>
      <div className="bg-[#FFDCA3]">
        <div className="container flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl">JohnDoe</h2>
          <section className="mt-1 sm:mt-2 mb-4 md:mb-7 flex-col flex items-center">
            <span className="text-base sm:text-xl">
              wins : 1
              <span style={{ margin: "0 12px", fontSize: "25px" }}>|</span>
              lose : 999
            </span>
            <span className="text-base sm:text-xl">Region: Kyrgyzstan</span>
          </section>

          <img
            src="/user.webp"
            alt="user avatar"
            className=" -mb-14 rounded-full bg-[#FFDCA3] w-24 sm:w-32 lg:w-44 p-3"
          />
        </div>
      </div>
      <div className="container">
        <div className="me-auto ms-auto max-w-28 mt-20">
          <Button className=""><Link to={"/editProfile"}>Edit profile</Link></Button>
        </div>
        <div className="mt-3 inline-flex flex-wrap gap-5 justify-center items-center mx-auto">
          {trophies.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`trophy ${index}`}
              className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
