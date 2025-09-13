import styled from "styled-components";

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

export const ListContainer = styled.div`
  border-right: 2px solid #23283a;
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`
export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0;
  padding: 0;
  align-items: center;
`

export const ListItem = styled.li`
  color: rgb(245, 247, 250);
  font-family: monospace;
  width: 90%;
  margin-top: 10px;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
  padding: 10px;

  &:hover {
    background-color: #283046;
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
