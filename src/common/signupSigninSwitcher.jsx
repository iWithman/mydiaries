import { Link } from 'react-router-dom';
import '../Common/Styles/common.scss'

const SignupSignInSwticher = ({ switcher }) => {
    return (
      <div className="signupSignInSwticher">
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

export default SignupSignInSwticher;