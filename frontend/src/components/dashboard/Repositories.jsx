import React from 'react'
import { 
  RepositoriesTabHeading,
  RepositoriesTabTitle,
  RepositoriesTabWrapper,
  AddRepoButton
} from './styles/DashboardBody.styles'
import { useAuth } from '../hooks/AuthContext';
import {useState} from "react";

function Repositories() {
  const { user } = useAuth()
    const [repositories, setRepositories] = useState([]);
  const handleAddRepository = async () => {
    const url = `https://github.com/apps/clean-pr/installations/new?target_id=${user.userId}`
      window.open(url, '_blank', 'width=800,height=600');
  }

  return (
      <div>
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
          {repositories.length > 0 && <li> {repositories.map(repo => <li>

          </li>)}</li>}
      </div>

  )
}

export default Repositories
