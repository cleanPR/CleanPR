import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Profile from './Profile';
import Repositories from './Repositories';
import PullRequests from './PullRequests';

import {
  DashboardWrapper,
  DashboardTop,
  DashboardLogo,
  DashboardBody,
  ListContainer,
  List,
  ListItem
} from './styles/Dashboard.styles';

export default function DashBoard() {
  const navigate = useNavigate();
  const[selectedTab, setSelectedTab] = useState('repositories')

  const tabs = {
    "repositories": <Repositories />,
    "pullRequests": <PullRequests />
  }

  const handleTableClick = (e) => {
    const title = e.target.title;
    setSelectedTab(prev => title)
  }

  return (
    <DashboardWrapper>
      <DashboardBody>

        <ListContainer>
          <List>
            <ListItem title="repositories" onClick={handleTableClick}>Repositories</ListItem>
            <ListItem title="pullRequests" onClick={handleTableClick}>Pull Requests</ListItem>
          </List>
          <Profile />
        </ListContainer>

        <>
        {tabs[selectedTab]}
        </>

      </DashboardBody>
    </DashboardWrapper>
  );
}
