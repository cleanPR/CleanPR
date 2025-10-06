import React, { useState } from 'react';
import Repositories from './Repositories';
import PullRequests from './PullRequests';
import Profile from './Profile';
import {
  DashboardWrapper,
  Sidebar,
  SidebarTab,
  ProfileSection,
  MainContent
} from './styles/Dashboard.styles';


export default function DashBoard() {
  const [selectedTab, setSelectedTab] = useState('repositories');
  
  const tabs = {
    repositories: <Repositories />,
    pullRequests: <PullRequests />
  };

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <DashboardWrapper>

      <Sidebar>

        {/* if the selected tab is === repositories set the styles to the active class */}
        <SidebarTab
          className={selectedTab === 'repositories' ? 'active' : ''}
          onClick={() => handleTabClick('repositories')}
        >
          Repositories
        </SidebarTab>

        <ProfileSection>
          <Profile />
        </ProfileSection>

      </Sidebar>

      <MainContent>
        {tabs[selectedTab]}
      </MainContent>

    </DashboardWrapper>
  );
}
