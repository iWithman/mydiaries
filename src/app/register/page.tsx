"use client"
import Register from '@/features/Register/register';
import RegisterLoginSwitcher from '@/common/loginRegisterSwitcher';
import '@/common/styles/common.scss';

const Page = () => {
  const switcher = {
    content: 'Already have an account?',
    buttonContent: 'Login',
    link: '/login',
  };
  return (
    <div id='login-register-container'>
      <Register />
      <RegisterLoginSwitcher switcher={switcher} />
    </div>
  );
};

export default Page;