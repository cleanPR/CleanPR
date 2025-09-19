import React from 'react'
import { 
  RepositoriesTabHeading,
  RepositoriesTabTitle,
  RepositoriesTabWrapper,
  AddRepoButton
} from './styles/DashboardBody.styles'
import { useAuth } from '../hooks/AuthContext';

function Repositories() {
  const { user } = useAuth()

  const handleAddRepository = () => {
    const url = `https://github.com/apps/clean-pr/installations/new?target_id=${user.userId}`
    window.location.href=url
  }

  return (
    <RepositoriesTabWrapper>
      <RepositoriesTabHeading>
        <RepositoriesTabTitle>Repositories</RepositoriesTabTitle>
        <AddRepoButton onClick={handleAddRepository}>
          {/* Plus icon SVG */}
          <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
            <path d="M12 5v14m7-7H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Add Repository
        </AddRepoButton>
      </RepositoriesTabHeading>
    </RepositoriesTabWrapper>
  )
}

export default Repositories
