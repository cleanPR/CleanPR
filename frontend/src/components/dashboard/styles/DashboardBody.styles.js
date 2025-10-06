import styled from "styled-components";
import { fadeInUp } from "./Dashboard.styles"; // If fadeInUp is exported, otherwise copy the keyframe

// repostiries table styles

export const RepositoriesTabWrapper = styled.div`
  width: 100%;
  animation: ${fadeInUp} 0.7s ease;
`;

export const RepositoriesTabHeading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(139, 69, 255, 0.07);
  border-radius: 16px;
  padding: 1.2rem 1rem 1rem 1rem;
  margin-bottom: 2rem;
  box-shadow: 0 2px 12px rgba(139, 69, 255, 0.1);
`;

export const RepositoriesTabTitle = styled.h2`
  font-size: 1.4rem;
  font-weight: 700;
  color: #fff;
  margin: 0;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
`;

// Add this for the new Add Repository button
export const AddRepoButton = styled.button`
  background: ${({ className }) =>
    className && className.includes('active')
      ? 'rgba(139, 69, 255, 0.13)'
      : 'rgba(139, 69, 255, 0.10)'};
  color: #fff;
  border: none;
  border-radius: 999px; // Makes the button fully round
  padding: 0.65rem 1.4rem;
  font-size: 1rem;
  font-weight: 500;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(139, 69, 255, 0.08);
  transition: background 0.18s, color 0.18s, transform 0.18s;
  display: flex;
  align-items: center;
  gap: 0.6rem;

  &:hover {
    background: rgba(139, 69, 255, 0.16);
    color: #e0d7fa;
    transform: translateY(-1px) scale(1.04);
    box-shadow: 0 4px 16px rgba(139, 69, 255, 0.13);
  }

  &:active {
    background: rgba(139, 69, 255, 0.20);
    color: #fff;
    transform: none;
  }
`;

export const PullRequestTabWrapper = styled.div`
    width: 100%;
`;

export const RepositoriesDivider = styled.div`
  width: 100%;
  margin: 1.2rem 0 1.5rem 0;
  padding-bottom: 0.5rem;
  border-bottom: 1.5px solid rgba(139, 69, 255, 0.13);
  color: #bbaaff;
  font-weight: 600;
  font-size: 1.05rem;
  letter-spacing: 0.02em;
  display: flex;
  align-items: center;
`;

export const RepositoriesTable = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
  width: 100%;
  animation: ${fadeInUp} 0.5s;
`;

export const RepositoryRow = styled.div`
  background: rgba(139, 69, 255, 0.07);
  border-radius: 14px;
  padding: 1.1rem 1.2rem;
  display: flex;
  align-items: center;
  gap: 1.2rem;
  box-shadow: 0 2px 8px rgba(139, 69, 255, 0.08);
  transition: box-shadow 0.18s, transform 0.18s;
  &:hover {
    box-shadow: 0 4px 16px rgba(139, 69, 255, 0.16);
    transform: translateY(-2px) scale(1.01);
  }
`;

export const RepositoryName = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  font-weight: 600;
  color: #fff;
  font-size: 1.08rem;
  flex: 2;
  svg {
    flex-shrink: 0;
  }
`;

export const RepositoryMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #bbaaff;
  font-size: 0.98rem;
  flex: 1;
`;

export const RepositoryActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  a {
    color: #fff;
    background: rgba(139, 69, 255, 0.13);
    border-radius: 50%;
    padding: 0.35rem;
    display: flex;
    align-items: center;
    transition: background 0.18s;
    &:hover {
      background: rgba(139, 69, 255, 0.22);
    }
    svg {
      display: block;
    }
  }
`;

export const RemoveRepoButton = styled.button`
  background: rgba(255, 106, 106, 0.10);
  border: none;
  border-radius: 50%;
  padding: 0.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.18s, transform 0.18s;
  margin-left: 0.2rem;

  &:hover {
    background: rgba(255, 106, 106, 0.18);
    transform: scale(1.08);
  }
  &:active {
    background: rgba(255, 106, 106, 0.25);
  }
  svg {
    display: block;
  }
`;

export const GoToRepoButton = styled.button`
  background: rgba(139, 69, 255, 0.10);
  border: none;
  border-radius: 50%;
  padding: 0.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.18s, transform 0.18s;
  margin-right: 0.2rem;

  &:hover {
    background: rgba(139, 69, 255, 0.18);
    transform: scale(1.08);
  }
  &:active {
    background: rgba(139, 69, 255, 0.25);
  }
  svg {
    display: block;
  }
`;


