import styled from "styled-components";

export const DashboardWrapper = styled.div`
  min-height: 100vh;
  width: 100vw;
  background: #0A0F1C;
`;

export const DashboardBody = styled.div`
    width: 100%;
    height: 100%;
    border: 1px solid black;
`

export const TabList = styled.div`
    border: 1px solid white;
    width: 20%;
    height: 100%;
`

export const DashboardTop = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: space-between;
  padding: 25px 50px 25px 50px;
  background: #151b2d;
  border-bottom: 2px solid #23283a;
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    row-gap: 1.5rem;
    padding: 1.2rem 2vw 1.2rem 2vw;
  }
`;

export const DashboardLogo = styled.img`
  height: 56px;
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
