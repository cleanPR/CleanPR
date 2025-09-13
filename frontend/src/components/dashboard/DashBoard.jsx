import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Profile from './Profile';
import Repositories from './Repositories';
import PullRequests from './PullRequests';
import FolderIcon from '@mui/icons-material/Folder';
import PullRequestIcon from '@mui/icons-material/CallMerge';
import logo from '../../assests/images/logo.png';

import {
  DashboardWrapper,
  DashboardBody,
  ListContainer,
  List,
  ListItem,
  SidebarHeader,
  SidebarLogo
} from './styles/Dashboard.styles';

export default function DashBoard() {
  const[selectedTab, setSelectedTab] = useState('repositories')

  const tabs = {
    "repositories": <Repositories />,
    "pullRequests": <PullRequests />
  }

  const tabItems = [
    { id: 'repositories', label: 'Repositories', icon: <FolderIcon className="icon" /> },
    { id: 'pullRequests', label: 'Pull Requests', icon: <PullRequestIcon className="icon" /> }
  ];

  const handleTabClick = (tabId) => {
    setSelectedTab(tabId);
  }

  return (
    <DashboardWrapper>
      <DashboardBody>
        <ListContainer>
          <SidebarHeader>
            <SidebarLogo src={logo} alt="CleanPR Logo" />
            <h2>cleanPR</h2>
          </SidebarHeader>
          
          <List>
            {tabItems.map(tab => (
              <ListItem 
                key={tab.id}
                $active={selectedTab === tab.id}
                onClick={() => handleTabClick(tab.id)}
                role="button"
                tabIndex={0}
                aria-current={selectedTab === tab.id ? 'page' : undefined}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleTabClick(tab.id);
                  }
                }}
              >
                {tab.icon}
                {tab.label}
              </ListItem>
            ))}
          </List>
          
          <Profile />
        </ListContainer>

        {tabs[selectedTab]}
      </DashboardBody>
    </DashboardWrapper>
  );
}
