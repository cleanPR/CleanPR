import React from 'react'
import { 
  RepositoriesTabHeading,
  RepositoriesTabTitle,
  RepositoriesTabWrapper,
  AddRepoButton
} from './styles/DashboardBody.styles'

function Repositories() {
  return (
    <RepositoriesTabWrapper>
      <RepositoriesTabHeading>
        <RepositoriesTabTitle>Repositories</RepositoriesTabTitle>
        <AddRepoButton>
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
