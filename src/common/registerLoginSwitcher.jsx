import { Link } from 'react-router-dom';
import '../Common/Styles/common.scss'

const RegisterLoginSwitcher = ({ switcher }) => {
    return (
      <div className="register-login-switcher">
        <div className='content'>
          <p>{switcher.content}</p>
        </div>
        <Link href={switcher.link}>
          <button>
            {switcher.buttonContent}
          </button>
        </Link>
      </div>
    );
  };

export default RegisterLoginSwitcher;