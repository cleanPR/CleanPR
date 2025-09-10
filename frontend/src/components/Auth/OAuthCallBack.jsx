
import React, { useEffect } from 'react';
import { useAuth } from '../hooks/AuthContext';
import { useNavigate } from 'react-router-dom';
import api from '../api/api';


import {
  AuthWrapper,
  LoginFormContainer,
  LoadingText,
  Spinner
} from './styles/Auth.styles';

function OAuthCallBack() {
  const { setUser } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    api.get("/profile")
      .then(res => {
        setUser(res.data);
        navigate("/dashboard");
      })
      .catch(err => {
        setUser(null);
        console.log(err?.response?.data || err);
        navigate("/");
      });
  }, [setUser, navigate]);

  return (
    <AuthWrapper>
      <LoginFormContainer>
        <LoadingText>Logging you in...</LoadingText>
        <Spinner />
      </LoginFormContainer>
    </AuthWrapper>
  );
}

export default OAuthCallBack
