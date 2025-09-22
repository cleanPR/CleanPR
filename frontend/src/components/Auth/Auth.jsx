
import {
  AuthWrapper,
  LoginFormContainer,
  WelcomeHeading,
  GithubButton,
  GithubIcon,
  LogoImg
} from './styles/Auth.styles';
import { useNavigate } from 'react-router-dom';

import logo from '../../assests/images/logo.png';

function Auth() {
  const redirect = useNavigate();
  const handleLogin = () => {
    window.location.href="http://localhost:8081/oauth2/authorization/github"
  };

  return (
    <AuthWrapper>
      <LoginFormContainer>
      
        <LogoImg src={logo} alt="CleanPR Logo" />
        <WelcomeHeading>Welcome to CleanPR</WelcomeHeading>

        <GithubButton onClick={handleLogin}>
          <GithubIcon />
          Login with GitHub
        </GithubButton>

      </LoginFormContainer>
    </AuthWrapper>
  );
}

export default Auth
