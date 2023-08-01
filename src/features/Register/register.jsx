import React from 'react';
import { useForm } from 'react-hook-form';
import './register.scss';

const Register = () => {
  const { register, handleSubmit, formState:{errors}, watch } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div id="register">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            {...register('firstName', { required: 'First Name is required' })}
          />
          {errors.firstName && <p className="error">{errors.firstName.message}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            {...register('lastName', { required: 'Last Name is required' })}
          />
          {errors.lastName && <p className="error">{errors.lastName.message}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            {...register('username', { required: 'Username is required' })}
          />
          {errors.username && <p className="error">{errors.username.message}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
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

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
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
            id="confirmPassword"
            {...register('confirmPassword', {
              required: 'Confirm Password is required',
              validate: (value) => value === watch('password') || 'Passwords do not match'
            })}
          />
          {errors.confirmPassword && <p className="error">{errors.confirmPassword.message}</p>}
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;

