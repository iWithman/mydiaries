import { useForm } from 'react-hook-form';
import SignupSigninSwitcher from "../../Common/signupSigninSwitcher";
import { useNavigate } from "react-router-dom";

import './signup.scss';

const Signup = () => {
  const { register, handleSubmit, formState:{errors}, watch } = useForm();

  const navigate = useNavigate();

  const switcher = {
    content: 'Already have an account?',
    buttonContent: 'Sign In',
    link: navigate('/signin')
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div id="signup" className='signin-signup-container'>
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder='Email'
            id="email"
            {...register('email', { required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address'
            },
          })}
          />
          {errors.email && <p className="error">{errors.email.message}</p>}
        </div>

          <div className="fullname-container">
            <div className="form-group fullname">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                name="firstName"
                placeholder='First Name'
                id="firstName"
                {...register('firstName', { required: 'First Name is required' })}
              />
              {errors.firstName && <p className="error">{errors.firstName.message}</p>}
            </div>

            <div className="form-group fullname">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                name="lastName"
                placeholder='Last Name'
                id="lastName"
                {...register('lastName', { required: 'Last Name is required' })}
              />
              {errors.lastName && <p className="error">{errors.lastName.message}</p>}
            </div>
          </div>

        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            placeholder='Username'
            id="username"
            {...register('username', { required: 'Username is required' })}
          />
          {errors.username && <p className="error">{errors.username.message}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder='Password'
            id="password"
            {...register('password', { required: 'Password is required' })}
          />
          {errors.password && <p className="error">{errors.password.message}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder='Confirm Password'
            id="confirmPassword"
            {...register('confirmPassword', {
              required: 'Confirm Password is required',
              validate: (value) => value === watch('password') || 'Passwords do not match'
            })}
          />
          {errors.confirmPassword && <p className="error">{errors.confirmPassword.message}</p>}
        </div>
        <div className="form-group">
          <button type="submit">Sign Up</button>
        </div>
      </form>
      <SignupSigninSwitcher switcher={switcher} />
    </div>
  );
};

export default Signup;

