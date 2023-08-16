import { useForm } from "react-hook-form";
import RegisterLoginSwitcher from "../../Common/registerLoginSwitcher";
import { useNavigate } from "react-router-dom";

import "./login.scss";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const navigate = useNavigate();

  const switcher = {
    content: 'Don\'t have an account?',
    buttonContent: 'Register',
    link: navigate('/register')
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div id="login" className="login-register-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            placeholder="Username"
            id="username"
            {...register("username", { required: "Username is required" })}
          />
          {errors.username && (
            <p className="error">{errors.username.message}</p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            id="password"
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && (
            <p className="error">{errors.password.message}</p>
          )}
        </div>
        <div className="form-group">
          <button type="submit">Login</button>
        </div>
      </form>
      <RegisterLoginSwitcher switcher={switcher} />
    </div>
  );
};

export default Login;
