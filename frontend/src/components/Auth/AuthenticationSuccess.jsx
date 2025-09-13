
import { type } from '@testing-library/user-event/dist/type';
import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const Wrapper = styled.div`
  min-height: 100vh;
  width: 100vw;
  background: #0A0F1C;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const pop = keyframes`
  0% { transform: scale(0.7); opacity: 0; }
  60% { transform: scale(1.1); opacity: 1; }
  80% { transform: scale(0.95); }
  100% { transform: scale(1); }
`;

const SuccessCircle = styled.div`
  width: 110px;
  height: 110px;
  border-radius: 50%;
  background: linear-gradient(135deg, #23283a 60%, #0A0F1C 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  animation: ${pop} 0.7s cubic-bezier(0.23, 1, 0.32, 1);
  box-shadow: 0 4px 24px rgba(10,15,28,0.25);
`;

const CheckMark = styled.svg`
  width: 54px;
  height: 54px;
  stroke: #4caf50;
  stroke-width: 5;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
  animation: ${pop} 0.7s 0.1s cubic-bezier(0.23, 1, 0.32, 1);
`;

const SuccessText = styled.h2`
  color: #F5F7FA;
  font-family: monospace;
  font-size: 2rem;
  margin-top: 0.5rem;
  text-align: center;
  letter-spacing: 1px;
  animation: ${pop} 0.7s 0.2s cubic-bezier(0.23, 1, 0.32, 1);
`;

function AuthenticationSuccess() {

    useEffect(() => {
        if (window.opener) {
            window.opener.postMessage(
                {
                    type: "auth-success"
                },
                window.location.origin
            )
        }
    }, [])

  return (
    <Wrapper>

      <SuccessCircle>
        <CheckMark viewBox="0 0 52 52">
          <path d="M14 27l8 8 16-16" />
        </CheckMark>
      </SuccessCircle>
      
      <SuccessText>Authentication Successful!</SuccessText>

    </Wrapper>
  );
}

export default AuthenticationSuccess;
