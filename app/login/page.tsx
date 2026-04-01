import Image from "next/image";
import LoginForm from "./loginForm";

export default function Login() {
  return (
    <div id='login-page' className="flex h-screen w-screen justify-center items-center flex-col lg:overflow-hidden m-10 ">
      <span id='login-title' className="text-6xl mt-10 font-heading text-text-title">ESPlantCare</span>
      <div id='login-page-content' className="flex h-screen w-screen justify-center overflow-hidden lg:justify-evenly items-center flex-col lg:flex-row lg:overflow-hidden-hidden mb-20 ">
        <div id='synopsis' className="mb-20 lg:mb-0">
          <p>SYNOPSIS</p>
        </div>
        
        <div id='login' className="flex flex-col">
          <span id='login-header' className="text-4xl font-heading font-light text-text-primary mb-4">Login</span>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
