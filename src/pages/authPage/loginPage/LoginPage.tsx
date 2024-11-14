import { FC, useState } from "react";
import Button from "../../../components/Button";
import { Link } from "react-router-dom";
import LoginService from "../../../services/loginService";
import { useMutation } from "@tanstack/react-query";
import { Login } from "../../../types/client.types";
import { useForm, SubmitHandler } from "react-hook-form"; // Импортируем hook из react-hook-form
import Input from "../../../components/Input";

const LoginPage: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<Login>({ mode: "onTouched" });
  const [loading, setLoading] = useState(false);

  const { mutate: login, isPending } = useMutation({
    mutationFn: LoginService.Login,
    onMutate: () => {
      setLoading(true);
    },
    onSuccess: () => {
      setLoading(false);
    },
    onError: () => {
      setLoading(false);
    },
  });

  const onSubmit: SubmitHandler<Login> = (data) => {
    login(data);
  };

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
        {/* Right side */}
        <div className="flex justify-center items-center w-full sm:w-1/2 h-full flex-col">
          <h3 className="mx-auto sm:mx-0 text-center sm:text-left max-w-52 sm:max-w-56 md:max-w-64 lg:max-w-72 w-full text-2xl ">
            Account login
          </h3>
          <div>
            <form
              className="flex flex-col items-center sm:items-start gap-y-2 mt-4"
              onSubmit={handleSubmit(onSubmit)}
            >
              <label htmlFor="email" className="text-xl">
                Email address
              </label>
              <Input
                id="email"
                placeholder="email"
                type="email"
                required
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <span className="text-red-500 max-w-52 text-center mx-auto">{errors.email.message}</span>
              )}

              <label htmlFor="password" className="text-xl">
                Password
              </label>
              <Input
                id="password"
                placeholder="password"
                type="password"
                required
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters long",
                  },
                })}
              />
              {errors.password && (
                <span className="text-red-500 max-w-52 text-center mx-auto">{errors.password.message}</span>
              )}

              <Button
                className="mt-3 px-6 sm:px-9 max-w-56 mx-auto"
                disabled={isPending || !isValid}
              >
                {loading ? "Logging in..." : "Login to account"}
              </Button>
              <Link to={"/register"} className="text-sm text-center mt-3">
                Don’t have an account?{" "}
                <span className="underline text-[#66A0FF]">Sign up now.</span>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
