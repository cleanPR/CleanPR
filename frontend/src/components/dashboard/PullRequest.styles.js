import styled, { css } from "styled-components";
import { fadeInUp } from "./styles/Dashboard.styles";

export const PRWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 50%, #16213e 100%);
  background-size: 400% 400%;
  animation: ${fadeInUp} 0.7s ease;
  display: flex;
  flex-direction: column;
`;

export const PRHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2.2rem 2.2rem 1.2rem 2.2rem;
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 0.7rem;
    padding: 1.2rem 0.7rem 0.7rem 0.7rem;
    align-items: stretch;
  }
`;

export const PRBackButton = styled.button`
  background: rgba(139, 69, 255, 0.10);
  border: none;
  border-radius: 50%;
  padding: 0.5rem;
  cursor: pointer;
  transition: background 0.18s, transform 0.18s;
  display: flex;
  align-items: center;
  &:hover {
    background: rgba(139, 69, 255, 0.18);
    transform: scale(1.08);
  }
`;

export const PRHeading = styled.h2`
  color: #fff;
  font-size: 1.4rem;
  font-weight: 700;
  margin: 0;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  flex: 1;
  text-align: center;
`;

export const PRRepoTitle = styled.div`
  color: #bbaaff;
  font-size: 1.08rem;
  font-weight: 600;
  background: rgba(139, 69, 255, 0.07);
  border-radius: 12px;
  padding: 0.5rem 1.1rem;
  margin-left: 1.2rem;
  @media (max-width: 600px) {
    margin-left: 0;
    text-align: right;
    align-self: flex-end;
  }
`;

export const PRBody = styled.div`
  flex: 1;
  width: 100%;
  padding: 0 2.2rem 2.2rem 2.2rem;
  @media (max-width: 600px) {
    padding: 0 0.7rem 1.2rem 0.7rem;
  }
`;

export const PRList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const PRListItem = styled.li`
  background: rgba(139, 69, 255, 0.07);
  border-radius: 14px;
  padding: 1.1rem 1.2rem;
  margin-bottom: 1.1rem;
  color: #fff;
  font-size: 1.08rem;
  box-shadow: 0 2px 8px rgba(139, 69, 255, 0.08);
  transition: box-shadow 0.18s, transform 0.18s;
  display: flex;
  align-items: center;
  gap: 1rem;
  &:hover {
    box-shadow: 0 4px 16px rgba(139, 69, 255, 0.16);
    transform: translateY(-2px) scale(1.01);
  }
`;

export const PRNoData = styled.div`
  color: #aaa;
  margin-top: 2rem;
  font-style: italic;
  text-align: center;
`;

export const PRAuthor = styled.div`
  color: #bbaaff;
  font-size: 0.98rem;
  margin-bottom: 0.2rem;
  span {
    color: #fff;
    font-weight: 500;
    margin-left: 0.3rem;
  }
`;

export const PRStatus = styled.div`
  color: #bbaaff;
  font-size: 0.98rem;
  margin-bottom: 0.2rem;
  span {
    color: ${({ status }) =>
      status === "OPEN"
        ? "#67e8f9"
        : status === "CLOSED"
        ? "#ff6a6a"
        : status === "REVIEWED"
        ? "#ffd966"
        : "#bbaaff"};
    font-weight: 600;
    margin-left: 0.3rem;
    text-transform: capitalize;
  }
`;

export const PRDates = styled.div`
  color: #bbaaff;
  font-size: 0.93rem;
  display: flex;
  gap: 1.2rem;
  margin-bottom: 0.2rem;
  span {
    color: #bbaaff;
    font-weight: 400;
  }
`;

export const PRGoToButton = styled.button`
  background: rgba(139, 69, 255, 0.10);
  border: none;
  border-radius: 50%;
  padding: 0.5rem;
  margin-left: 1.2rem;
  cursor: pointer;
  transition: background 0.18s, transform 0.18s;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.2rem;
  width: 2.2rem;
  &:hover {
    background: rgba(139, 69, 255, 0.18);
    transform: scale(1.08);
  }
  svg {
    display: block;
  }
`;

export const PRFilters = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
  padding: 0 2.2rem 1.2rem 2.2rem;
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 0.7rem;
    padding: 0 0.7rem 1rem 0.7rem;
    align-items: stretch;
  }
`;

export const PRSelect = styled.select`
  background: rgba(139, 69, 255, 0.07);
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  outline: none;
  transition: background 0.18s, color 0.18s;
  box-shadow: 0 2px 8px rgba(139, 69, 255, 0.08);

  &:focus {
    background: rgba(139, 69, 255, 0.13);
  }
`;