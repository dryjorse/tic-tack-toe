import { FC } from "react";
import { Input } from "../../../components/Input";
import Button from "../../../components/Button";
import { Link } from "react-router-dom";

const LoginPage: FC = () => {
  return (
    <div
      className="overflow-hidden"
      style={{
        background: "linear-gradient(to right, #FFDCA3 50%, transparent 50%)",
      }}
    >
      <div className="container h-[100vh] overflow-hidden -mt-[70px] flex">
        {/* Left side */}
        <div className="flex justify-center items-center  w-0 sm:w-1/2  h-full">
          <img
            src="/game-login.svg"
            alt="game login image"
            className="w-52 sm:w-60 md:w-80 lg:w-96"
          />
        </div>
        {/* Rigth side */}
        <div className="flex justify-center items-center w-full sm:w-1/2 h-full flex-col">
          <h3 className="mx-auto sm:mx-0 text-center sm:text-left max-w-52 sm:max-w-56  md:max-w-64 lg:max-w-72 w-full text-2xl ">Account login</h3>
          <div>
          <form className="flex flex-col items-center sm:items-start gap-y-2 mt-4">
            <label htmlFor="email" className="text-xl">
            Email addres
            </label>
            <Input id="email" placeholder="email" type="email" />

            <label htmlFor="password" className="text-xl">
              Password
            </label>
            <Input id="password" placeholder="password" type="password" />

            <Button className="mt-3 px-6 sm:px-9 max-w-56 mx-auto">Login to account</Button>
            <Link to={'/register'} className="text-sm text-center mt-3">Don’t have an account? <span className="underline text-[#66A0FF]">Sign up now.</span></Link>
          </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
