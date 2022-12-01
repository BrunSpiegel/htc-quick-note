import { Outlet } from "react-router-dom";
import { AuthContainer, Presentation } from "./SignIn/styles";
import phoneImg from "../../assets/phone.png";

export function Auth() {
  return (
    <AuthContainer>
      <Presentation>
        <img src={phoneImg} alt="Quick Note HTC" />
        <h1>Quick <br /> Note HTC</h1>
        <h2>HTC 03 - 2022</h2>
      </Presentation>
      <Outlet />
    </AuthContainer>
  );
}
