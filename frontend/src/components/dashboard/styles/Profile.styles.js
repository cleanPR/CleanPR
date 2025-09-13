import styled from "styled-components";

const colors = {
  primary: '#0A0F1C',
  surface: '#151b2d',
  surfaceHover: '#23283a',
  accent: '#5B86FF',
  text: '#F5F7FA',
  textSecondary: '#8B8B8B'
};

export const ProfileWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 20px 16px;
    border-top: 1px solid ${colors.surfaceHover};
    position: absolute;
    background: linear-gradient(180deg, transparent 0%, rgba(21, 27, 45, 0.8) 100%);
    backdrop-filter: blur(8px);
` 

export const ProfileContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px;
    background: ${colors.surfaceHover};
    border-radius: 12px;
    border: 1px solid rgba(91, 134, 255, 0.1);
    transition: all 0.2s ease-in-out;
    
    &:hover {
        border-color: rgba(91, 134, 255, 0.3);
        box-shadow: 0 4px 12px rgba(91, 134, 255, 0.1);
    }
`;

export const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
`;

export const UserName = styled.span`
    color: ${colors.text};
    font-weight: 600;
    font-family: 'Inter', monospace;
    font-size: 14px;
    line-height: 1.2;
`;

export const UserStatus = styled.span`
    color: ${colors.textSecondary};
    font-family: 'Inter', monospace;
    font-size: 11px;
    font-weight: 400;
`;

export const LogoutButton = styled.button`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 16px;
    background: transparent;
    border: 1px solid ${colors.surfaceHover};
    border-radius: 8px;
    color: ${colors.textSecondary};
    font-family: 'Inter', monospace;
    font-size: 12px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    
    &:hover {
        background: rgba(239, 68, 68, 0.1);
        border-color: rgba(239, 68, 68, 0.3);
        color: #EF4444;
        transform: translateY(-1px);
    }
    
    &:focus-visible {
        outline: 2px solid ${colors.accent};
        outline-offset: 2px;
    }
    
    &:active {
        transform: translateY(0);
    }
    
    .logout-icon {
        font-size: 16px;
    }
`