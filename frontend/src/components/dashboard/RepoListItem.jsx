import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  RepositoryName,
  RepositoryMeta,
  RepositoryActions,
  RemoveRepoButton,
  RepositoryRow,
  GoToRepoButton
} from './styles/DashboardBody.styles';

function RepoListItem({ repo, onRemove }) {
  const navigate = useNavigate();

  const handleGoToRepo = () => {
    // Navigate to the repo-specific page, e.g. /dashboard/repository/:id
    navigate(`/dashboard/repository/${repo.repoId}`);
  };

  return (
    <RepositoryRow>
      <RepositoryName>
        <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
          <path d="M12 2C7.03 2 2.5 6.03 2.5 11c0 4.97 4.53 9 9.5 9s9.5-4.03 9.5-9c0-4.97-4.53-9-9.5-9zm0 16c-3.87 0-7-3.13-7-7 0-3.87 3.13-7 7-7s7 3.13 7 7c0 3.87-3.13 7-7 7z" fill="#8b45ff"/>
        </svg>
        {repo.repoName}
      </RepositoryName>
      <RepositoryMeta>
        <span>{repo.private ? 'private' : 'public' }</span>
      </RepositoryMeta>
      <RepositoryActions>
        <GoToRepoButton
          title="View Pull Requests"
          onClick={handleGoToRepo}
        >
          {/* Right arrow icon */}
          <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
            <path d="M9 18l6-6-6-6" stroke="#8b45ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </GoToRepoButton>
        <RemoveRepoButton
          title="Remove Repository"
          onClick={() => onRemove(repo.id)}
        >
          {/* Trash icon */}
          <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
            <path d="M6 7h12M9 7V5a3 3 0 013-3v0a3 3 0 013 3v2m2 0v12a2 2 0 01-2 2H8a2 2 0 01-2-2V7h12z" stroke="#ff6a6a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </RemoveRepoButton>
      </RepositoryActions>
    </RepositoryRow>
  );
}

export default RepoListItem;