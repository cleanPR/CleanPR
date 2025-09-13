
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
    const width = 600;
    const height = 700;

    // opening a window for the user to authenticate
    const authPop = window.open(
      "http://localhost:8081/oauth2/authorization/github",
      "Github Authentication",
      `width=${width},height=${height}`
    )

    /**
     * this event will trigger if the authentication in the pop is successfull
     * 
     * check if the origin of the trigger is the same as the current
     * if the data type that was sent in the payload == 'auth-success' then authenticate the user
     */
    window.addEventListener("message", (e) => {
      if (e.origin !== window.location.origin) return;
      console.log("auth")
      if (e.data.type === "auth-success") {
        setTimeout(() => {
        }, 300)
        authPop.close()
        redirect("/authenticate")
      }
    }) // removes it self after being triggered
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
