import styled from "styled-components";
export const LoadingText = styled.div`
    color: #F5F7FA;
    font-size: 1.5rem;
    font-family: monospace;
    margin-bottom: 2rem;
    text-align: center;
`;

export const Spinner = styled.div`
    border: 6px solid #23283a;
    border-top: 6px solid #F5F7FA;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 1s linear infinite;
    margin: 0 auto;

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;


export const LogoImg = styled.img`
    width: 150px;
    height: 150px;
    object-fit: contain;
    margin-bottom: 1.5rem;
    filter: drop-shadow(0 2px 8px #0A0F1C);

    @media (max-width: 500px) {
        width: 72px;
        height: 72px;
        margin-bottom: 1rem;
    }
`;

export const WelcomeHeading = styled.h1`
    color: #F5F7FA;
    font-family: monospace;
    font-weight: 700;
    font-size: 2.2rem;
    margin-bottom: 2rem;
    text-align: center;
    letter-spacing: 1px;

    @media (max-width: 500px) {
        font-size: 1.3rem;
        margin-bottom: 1.2rem;
    }
`;

export const GithubButton = styled.button`
    background: #23283a;
    color: #F5F7FA;
    border: none;
    border-radius: 8px;
    padding: 1rem 2rem;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    box-shadow: 0 2px 8px rgba(10,15,28,0.18);
    display: flex;
    align-items: center;
    gap: 0.7rem;
    margin: 0 auto;
    transition: background 0.2s;
    &:hover {
        background: #0A0F1C;
    }
`;

export const GithubIcon = () => (
    <svg height="24" width="24" viewBox="0 0 24 24" fill="#F5F7FA" style={{marginRight: 8}}>
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
    </svg>
);



export const AuthWrapper = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
    justify-content: center;
    align-items: center;
    background: #0A0F1C;
`;

export const LoginFormContainer = styled.div`
    height: 420px;
    width: 400px;
    border-radius: 18px;
    background: #151b2d;
    box-shadow: 0 4px 24px rgba(10,15,28,0.40);
    border: 2px solid #23283a;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2.5rem 2rem;

    @media (max-width: 700px) {
        width: 350px;
        min-width: 0;
        height: 400px;
        padding: 1.5rem 0.5rem;
        box-shadow: none;
    }
`;