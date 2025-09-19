import styled, { keyframes } from "styled-components";

// Keyframe animations
const float = keyframes`
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
`;

const glow = keyframes`
    0%, 100% { box-shadow: 0 0 20px rgba(139, 69, 255, 0.3); }
    50% { box-shadow: 0 0 30px rgba(139, 69, 255, 0.6), 0 0 40px rgba(139, 69, 255, 0.3); }
`;

const gradientShift = keyframes`
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
`;

const fadeInUp = keyframes`
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

export const LoadingText = styled.div`
    color: #F5F7FA;
    font-size: 1.5rem;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    margin-bottom: 2rem;
    text-align: center;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
`;

export const Spinner = styled.div`
    border: 4px solid rgba(139, 69, 255, 0.2);
    border-top: 4px solid #8b45ff;
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
    width: 120px;
    height: 120px;
    object-fit: contain;
    margin-bottom: 1.5rem;
    background: linear-gradient(135deg, #ffffff 0%, #f8f9ff 100%);
    padding: 16px;
    border-radius: 20px;
    box-shadow: 0 8px 32px rgba(139, 69, 255, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.9);
    animation: ${float} 3s ease-in-out infinite;
    transition: all 0.3s ease;

    &:hover {
        transform: scale(1.05);
        box-shadow: 0 12px 48px rgba(139, 69, 255, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.9);
        background: linear-gradient(135deg, #ffffff 0%, #f0f2ff 100%);
    }

    @media (max-width: 500px) {
        width: 80px;
        height: 80px;
        margin-bottom: 1rem;
        padding: 12px;
        border-radius: 16px;
    }
`;

export const WelcomeHeading = styled.h1`
    background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #8b45ff 100%);
    background-size: 200% 200%;
    animation: ${gradientShift} 4s ease infinite;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    font-weight: 800;
    font-size: 2.4rem;
    margin-bottom: 2.5rem;
    text-align: center;
    letter-spacing: -0.5px;
    animation: ${fadeInUp} 0.8s ease-out;

    @media (max-width: 500px) {
        font-size: 1.8rem;
        margin-bottom: 1.5rem;
    }
`;

export const GithubButton = styled.button`
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: #ffffff;
    border: none;
    border-radius: 16px;
    padding: 1rem 2.5rem;
    font-size: 1.1rem;
    font-weight: 600;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.8rem;
    margin: 0 auto;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
    box-shadow: 0 8px 32px rgba(139, 69, 255, 0.3);
    
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
        transition: left 0.5s;
    }
    
    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 12px 48px rgba(139, 69, 255, 0.4);
        background: linear-gradient(135deg, #8b45ff 0%, #667eea 100%);
        
        &::before {
            left: 100%;
        }
    }
    
    &:active {
        transform: translateY(0);
    }

    @media (max-width: 500px) {
        padding: 0.9rem 2rem;
        font-size: 1rem;
    }
`;

export const GithubIcon = () => (
    <svg height="24" width="24" viewBox="0 0 24 24" fill="currentColor" style={{marginRight: 4}}>
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
    </svg>
);

export const AuthWrapper = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
    justify-content: center;
    align-items: center;
    background: linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 50%, #16213e 100%);
    background-size: 400% 400%;
    animation: ${gradientShift} 15s ease infinite;
    position: relative;
    
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: 
            radial-gradient(circle at 20% 80%, rgba(139, 69, 255, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(102, 126, 234, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(118, 75, 162, 0.1) 0%, transparent 50%);
        pointer-events: none;
    }
`;

export const LoginFormContainer = styled.div`
    height: 480px;
    width: 420px;
    border-radius: 24px;
    background: rgba(255, 255, 255, 0.02);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 
        0 8px 32px rgba(0, 0, 0, 0.3),
        inset 0 1px 0 rgba(255, 255, 255, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 3rem 2.5rem;
    position: relative;
    animation: ${fadeInUp} 0.6s ease-out, ${glow} 4s ease-in-out infinite;
    
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: 24px;
        background: linear-gradient(135deg, rgba(139, 69, 255, 0.05) 0%, rgba(102, 126, 234, 0.05) 100%);
        pointer-events: none;
    }

    @media (max-width: 700px) {
        width: 350px;
        height: 450px;
        padding: 2rem 1.5rem;
        box-shadow: 
            0 4px 20px rgba(0, 0, 0, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
    }
`;