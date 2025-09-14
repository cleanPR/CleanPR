import styled, { keyframes } from "styled-components";

// Animations
const gradientShift = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

export const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(30px);}
  to { opacity: 1; transform: translateY(0);}
`;

// Dashboard Wrapper
export const DashboardWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 50%, #16213e 100%);
  background-size: 400% 400%;
  animation: ${gradientShift} 15s ease infinite;
  display: flex;
`;

// Sidebar
export const Sidebar = styled.aside`
  width: 260px;
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(18px);
  border-right: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 8px 32px rgba(139, 69, 255, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.5rem 1.2rem 1.2rem 1.2rem;
  position: relative;
  z-index: 2;

  @media (max-width: 900px) {
    width: 70px;
    padding: 1.2rem 0.5rem;
  }
`;

// Sidebar Tabs
export const SidebarTab = styled.button`
  width: 100%;
  background: ${({ className }) =>
    className && className.includes('active')
      ? 'rgba(139, 69, 255, 0.13)'
      : 'transparent'};
  color: #fff;
  border: none;
  border-radius: 12px;
  padding: 0.95rem 1.1rem;
  margin-bottom: 1rem;
  font-size: 1.05rem;
  font-weight: 500;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  cursor: pointer;
  box-shadow: none;
  transition: background 0.18s, color 0.18s, transform 0.18s;

  &:hover {
    background: rgba(139, 69, 255, 0.09);
    color: #e0d7fa;
    transform: translateY(-1px) scale(1.01);
  }

  &:active {
    background: rgba(139, 69, 255, 0.18);
    color: #fff;
    transform: none;
  }
`;

// Profile Section
export const ProfileSection = styled.div`
  margin-top: auto;
  width: 100%;
  background: rgba(139, 69, 255, 0.07);
  border-radius: 16px;
  padding: 1.2rem 1rem 1rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.1rem;
  box-shadow: 0 2px 12px rgba(139, 69, 255, 0.1);
  animation: ${fadeInUp} 0.7s ease;

  @media (max-width: 900px) {
    gap: 0.7rem;
    padding: 0.7rem 0.3rem;
  }
`;

export const ProfileAvatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #8b45ff;
  background: #fff;
  box-shadow: 0 2px 8px rgba(139, 69, 255, 0.13);
  margin-bottom: 0.3rem;
`;

export const ProfileName = styled.div`
  color: #fff;
  font-weight: 700;
  font-size: 1.1rem;
  font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #8b45ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.2rem;
`;

// Logout Button (icon only, same style as SidebarTab)
export const LogoutButton = styled.button`
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ className }) =>
    className && className.includes('active')
      ? 'rgba(139, 69, 255, 0.13)'
      : 'transparent'};
  color: #fff;
  border: none;
  border-radius: 12px;
  font-size: 1.35rem;
  cursor: pointer;
  box-shadow: none;
  transition: background 0.18s, color 0.18s, transform 0.18s;
  margin-top: 0.2rem;

  &:hover {
    background: rgba(139, 69, 255, 0.09);
    color: #e0d7fa;
    transform: translateY(-1px) scale(1.07);
  }

  &:active {
    background: rgba(139, 69, 255, 0.18);
    color: #fff;
    transform: none;
  }
`;

// Main Content
export const MainContent = styled.main`
  flex: 1;
  padding: 3rem 2.5rem;
  animation: ${fadeInUp} 0.8s ease;
  min-width: 0;

  @media (max-width: 900px) {
    padding: 1.5rem 0.7rem;
  }
`;
