"use client"
import Login from '@/features/Login/login';
import RegisterLoginSwitcher from '@/common/loginRegisterSwitcher';
import '@/common/styles/common.scss';

const Page = () => {
  const switcher = {
    content: 'Don\'t have an account?',
    buttonContent: 'Register',
    link: '/register',
  };
  return (
    <div id='login-register-container'>
      <Login />
      <RegisterLoginSwitcher switcher={switcher} />
    </div>
  );
};

export default Page;