import { FC } from "react";
import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import Button from "../../components/Button";

const EditProfilePage: FC = () => {
  return (
    <div className="container">
      <Link to={"/profile"} className="flex gap-2 mt-6">
        <img src="/arrowLeft.svg" className="w-3 h-6" alt="back icon" /> Back
      </Link>
      <h1 className="text-4xl md:text-5xl lg:text-6xl ms-auto me-auto max-w-max">
        Edit Profile
      </h1>
      <div className="flex flex-col items-center mt-12 sm:mt-14 md:mt-16 lg:mt-20">
        <section className="relative">
          <img
            src="/user.webp"
            alt="edit avatar"
            className="w-20 h-20 sm:h-24 sm:w-24 md:h-28 md:w-28 lg:w-36 lg:h-36 rounded-full border border-black filter grayscale brightness-75"
          />
          <img
            src="/change-image.svg"
            alt="change image icon"
            className="md:h-11 md:w-11 lg:w-12 lg:h-12 absolute left-6 w-9 h-9 top-7 sm:top-8 sm:left-8 md:top-9 md:left-9 lg:top-12 lg:left-12"
          />
        </section>
        <section>
          <form className="flex flex-col items-center gap-y-2 mt-4">
            <label htmlFor="nickname" className="text-xl">
              Nickname
            </label>
            <Input id="nickname" placeholder="Nickname" />

            <label htmlFor="email" className="text-xl">
              Email
            </label>
            <Input id="email" placeholder="email" type="email" />

            <label htmlFor="password" className="text-xl">
              Password
            </label>
            <Input id="password" placeholder="password" type="password" />

            <Button className="mt-3 px-6 sm:px-9">Save changes</Button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default EditProfilePage;
