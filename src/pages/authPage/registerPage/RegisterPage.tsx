import { FC } from "react";
import { Input } from "../../../components/Input";
import Button from "../../../components/Button";
import { Link } from "react-router-dom";

const RegisterPage: FC = () => {
  return (
    <div
      className="overflow-hidden"
      style={{
        background: "linear-gradient(to right, #FFDCA3 50%, transparent 50%)",
      }}
    >
      <div className="container h-[100vh] overflow-hidden -mt-[70px] flex">
        {/* Left side */}
        <div className="flex justify-center items-center w-1/2 h-full">
          <img
            src="/game-register.svg"
            alt="game login image"
            className="w-52 sm:w-60 md:w-80 lg:w-96"
          />
        </div>
        {/* Left side */}
        <div className="flex justify-center items-center w-1/2 h-full flex-col">
          <h3 className="text-left max-w-52 sm:max-w-56  md:max-w-64 lg:max-w-72 w-full text-2xl ">
          Registration
          </h3>
          <div>
            <form className="flex flex-col items-left gap-y-2 mt-4">
              <label htmlFor="nickname" className="text-xl">
                Nickname
              </label>
              <Input id="nickname" placeholder="nickname" type="text" />
              <label htmlFor="email" className="text-xl">
                Email addres
              </label>
              <Input id="email" placeholder="email" type="email" />

              <label htmlFor="password" className="text-xl">
                Password
              </label>
              <Input id="password" placeholder="password" type="password" />
              <label htmlFor="passwordConfrim" className="text-xl">
                Password confrim
              </label>
              <Input
                id="passwordConfrim"
                placeholder="password confirm"
                type="password"
              />

              <Button className="mt-3 px-6 sm:px-9">Register account</Button>
              <Link to={"/login"} className="text-sm text-center mt-3">
                Already have an account?{" "}
                <span className="underline text-[#66A0FF]">Log in here.</span>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
