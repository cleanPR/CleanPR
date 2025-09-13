import styled from "styled-components";

// Color palette
const colors = {
  primary: '#0A0F1C',
  surface: '#151b2d',
  surfaceHover: '#23283a',
  accent: '#5B86FF',
  accentSecondary: '#00E5A5',
  text: '#F5F7FA',
  textSecondary: '#8B8B8B'
};

export const DashboardWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  background: #0A0F1C;
`;

export const DashboardBody = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    border: 1px solid black;
`

export const SidebarHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 20px 16px;
  border-bottom: 1px solid ${colors.surfaceHover};
  background: linear-gradient(135deg, ${colors.surface} 0%, ${colors.surfaceHover} 100%);
  
  h2 {
    color: ${colors.text};
    font-family: 'Inter', monospace;
    font-size: 18px;
    font-weight: 700;
    margin: 0;
    letter-spacing: 0.5px;
  }
`;

export const SidebarLogo = styled.img`
  height: 32px;
  width: 32px;
  object-fit: contain;
`;

export const ListContainer = styled.div`
  border-right: 2px solid #23283a;
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  min-width: 280px;
  
  @media (max-width: 768px) {
    min-width: 240px;
    width: 25%;
  }
`
export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0;
  padding: 16px 0;
  align-items: center;
  flex-grow: 1;
`

export const ListItem = styled.li`
  color: ${props => props.$active ? colors.accent : colors.text};
  font-family: 'Inter', monospace;
  font-weight: ${props => props.$active ? '600' : '400'};
  width: 90%;
  margin: 4px 0;
  border-radius: 8px;
  cursor: pointer;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  transition: all 0.2s ease-in-out;
  position: relative;
  border-left: 3px solid transparent;
  
  ${props => props.$active && `
    background: linear-gradient(90deg, rgba(91, 134, 255, 0.1) 0%, rgba(91, 134, 255, 0.05) 100%);
    border-left-color: ${colors.accent};
  `}

  &:hover {
    background-color: ${props => props.$active ? 'rgba(91, 134, 255, 0.15)' : colors.surfaceHover};
    transform: translateX(2px);
  }
  
  &:focus-visible {
    outline: 2px solid ${colors.accent};
    outline-offset: 2px;
  }
  
  .icon {
    font-size: 20px;
    opacity: ${props => props.$active ? '1' : '0.7'};
  }
`

export const DashboardTop = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px 0 15px;
  background: #151b2d;
  border-bottom: 2px solid #23283a;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    row-gap: 1.5rem;
    padding: 1.2rem 2vw 1.2rem 2vw;
  }
`;

export const DashboardLogo = styled.img`
  height: 35px;
  width: auto;
  object-fit: contain;
  @media (max-width: 700px) {
    height: 40px;
  }
`;

export const UserProfileBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1.2rem;
  background: #23283a;
  border-radius: 12px;
  padding: 0.7rem 1.2rem;
  color: #F5F7FA;
  font-family: monospace;
  font-size: 1.1rem;
  box-shadow: 0 2px 8px rgba(10,15,28,0.10);
`;
