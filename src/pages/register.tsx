import UiInput from "../components/inputs/input"

const RegisterScreen = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center p-6 ">
      <h1 className="mt-12 text-3xl font-bold text-txt-primary">
        Create an Account
      </h1>
      <p className="text-sm text-txt-secondary mt-2 text-center">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, sunt
      </p>
      {/* email input */}
      <div className="w-full mt-9">
        <UiInput placeholder="Your Email" isShadow type="email" label="Email"/>
      </div>
      {/* pw input */}
      <div className="w-full">
        <UiInput placeholder="Your Password" isShadow type="password" label="Password"/>
      </div>
    </div>
  )
}

export default RegisterScreen
