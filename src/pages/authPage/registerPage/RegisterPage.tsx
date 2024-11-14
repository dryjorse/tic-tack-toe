import { FC, useState } from "react";
import Button from "../../../components/Button";
import { Link } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import  {Register} from "../../../types/client.types";
import RegisterService from "../../../services/registerService";
import { useForm, SubmitHandler } from "react-hook-form"; 
import Input from "../../../components/Input";

const RegisterPage: FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<Register>({ mode: "onTouched" });
  const [loading, setLoading] = useState(false);

  const { mutate: registerUser, isPending } = useMutation({
    mutationFn: RegisterService.Register,
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

  const onSubmit: SubmitHandler<Register> = (data) => {
    registerUser(data); 
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
        <div className="flex justify-center items-center w-0 sm:w-1/2 h-full">
          <img
            src="/game-register.svg"
            alt="game register image"
            className="w-52 sm:w-60 md:w-80 lg:w-96"
          />
        </div>
        {/* Right side */}
        <div className="flex justify-center items-center w-full sm:w-1/2 h-full flex-col">
          <h3 className="mx-auto sm:mx-0 text-center sm:text-left max-w-52 sm:max-w-56 md:max-w-64 lg:max-w-72 w-full text-2xl ">
            Create an Account
          </h3>
          <div>
            <form
              className="flex flex-col items-center sm:items-start gap-y-2 mt-4"
              onSubmit={handleSubmit(onSubmit)}
            >
              <label htmlFor="nickname" className="text-xl">
                Nickname
              </label>
              <Input
                id="nickname"
                placeholder="Enter your nickname"
                type="text"
                required
                {...register("nickname", {
                  required: "Nickname is required",
                  minLength: {
                    value: 3,
                    message: "Nickname must be at least 3 characters long",
                  },
                })}
              />
              {errors.nickname && (
                <span className="text-red-500 max-w-52 text-center mx-auto">{errors.nickname.message}</span>
              )}

              <label htmlFor="email" className="text-xl">
                Email Address
              </label>
              <Input
                id="email"
                placeholder="Enter your email"
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
                placeholder="Enter your password"
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

              <label htmlFor="passwordConfirm" className="text-xl">
                Confirm Password
              </label>
              <Input
                id="passwordConfirm"
                placeholder="Confirm your password"
                type="password"
                required
                {...register("passwordConfirm", {
                  required: "Password confirmation is required",
                  validate: (value) =>
                    value === watch("password") || "Passwords do not match",
                })}
              />
              {errors.passwordConfirm && (
                <span className="text-red-500 max-w-52 text-center mx-auto">{errors.passwordConfirm.message}</span>
              )}

              <Button
                className="mt-3 px-6 sm:px-9 max-w-56 mx-auto"
                disabled={isPending || !isValid}
              >
                {loading ? "Registering..." : "Create Account"}
              </Button>

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
