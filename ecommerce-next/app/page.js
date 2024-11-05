import Image from "next/image";
import RegisterPage from "./pages/register/page";
import LoginPage from "./pages/login/page";

export default function Home() {
  return (
    <div className="">
     
      <div>
        <RegisterPage/>
        <LoginPage/>
      </div>
    </div>
  );
}
