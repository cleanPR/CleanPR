import React from 'react'
import DashBoard from './DashBoard'
import { Button } from '@mui/material'
import { 
  RepositoriesTabHeading,
  RepositoriesTabTitle,
  RepositoriesTabWrapper
 } from './styles/DashboardBody.styles'


function Repositories() {
  return (
    <RepositoriesTabWrapper>
      <RepositoriesTabHeading>
        <RepositoriesTabTitle>Repositories</RepositoriesTabTitle>
        <Button variant='contained' >add repository</Button>
      </RepositoriesTabHeading>
    </RepositoriesTabWrapper>
  )
}

export default Repositories
