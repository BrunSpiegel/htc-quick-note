import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import htcImg from "../../../assets/htc.png";
import { LoginContainer } from "./styles";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Email válido")
    .required("O email é obrigatório")
    .min(5, "É necessário pelo menos 5 caractéres"),
  password: yup
    .string()
    .required("A senha é obrigatório")
    .min(6, "É necessário pelo menos 6 caracteres"),
  rememberMe: yup.boolean(),
});

export function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <LoginContainer>
      <img src={htcImg} alt="Hall To Code" />
      <h3>Entre na sua conta</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input type="text" {...register("email", { required: true })} />
          {errors?.email && <p>{errors.email.message as string}</p>}
        </div>
        <div>
          <input
            type="password"
            {...register("password", { required: true })}
          />
          {errors?.password && <p>{errors.password.message as string}</p>}
        </div>
        <label htmlFor="rememberMe">
          <input type="checkbox" id="rememberMe" {...register("rememberMe")} />
          <p>Lembrar de mim</p>
        </label>
        <button>Entrar</button>
      </form>
      <p>
        Não tem uma conta ?<Link to="/sign-in">Inscreva-se agora</Link>
      </p>
    </LoginContainer>
  );
}
