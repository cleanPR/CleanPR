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
`


