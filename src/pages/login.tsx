import UiButton from "../components/buttons/button";
import UiInput from "../components/inputs/input";
import googlelogo from "../assets/image/google_logo.png";
import { useNavigate } from "react-router";
const LoginScreen = () => {
  const navigate =useNavigate()
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <div className="w-full h-screen max-w-[450px] md:h-fit flex flex-col items-center p-6 ">
        <h1 className="mt-12 text-3xl font-bold text-txt-primary">
          Welcome Back
        </h1>
        <p className="text-sm text-txt-secondary mt-2 text-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, sunt
        </p>
        <section className="w-full mt-9 md:px-5">
          {/* email input */}
          <div className="w-full">
            <UiInput
              placeholder="Your Email"
              isShadow
              type="email"
              label="Email"
            />
          </div>
          {/* pw input */}
          <div className="w-full">
            <UiInput
              placeholder="Your Password"
              isShadow
              type="password"
              label="Password"
            />
          </div>
        </section>
        {/* forgot pw */}
        <section className="w-full flex items-center justify-between mt-5 md:px-5">
          <div className="flex items-center gap-4">
            <input type="checkbox" />
            <label className="text-sm text-txt-secondary">Remember Me</label>
          </div>
          <div>
            <p className="text-sm text-txt-primary font-semibold">
              Forgot Password?
            </p>
          </div>
        </section>
        {/* btn section */}
        <section className="w-full px-5 mt-7 flex flex-col gap-3 ">
          <UiButton label="Login" textClassName="text-white"onClick={()=>{
            navigate("/dashboard")
          }} />
          <UiButton
            label="Sign in with Google"
            textClassName="text-txt-primary"
            className="bg-btn-secondary"
            Icon={<img src={googlelogo} className="w-4 object-contain" />}
          />
        </section>
        {/* reg */}
        <section className="w-full flex items-center justify-center gap-4 mt-3">
          <p className="text-sm text-txt-secondary">
            You don't have an account yet?{" "}
            <span className="underline text-yellow-500">Sign up</span>
          </p>
        </section>
      </div>
    </div>
  );
};

export default LoginScreen;
