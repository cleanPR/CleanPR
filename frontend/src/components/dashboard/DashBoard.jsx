import React from 'react';
import { useAuth } from '../hooks/AuthContext';
import { useNavigate } from 'react-router-dom';
import {
  DashboardWrapper,
  DashboardTop,
  DashboardLogo,
  DashboardBody,
  TabList
} from './Dashboard.styles';

import logo from '../../assests/images/logo.png';
import Profile from './Profile';


export default function DashBoard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <DashboardWrapper>
      <DashboardTop>
        <DashboardLogo src={logo} alt="CleanPR Logo" />
        <Profile />
      </DashboardTop>
      <DashboardBody>
        <TabList>

        </TabList>
      </DashboardBody>
    </DashboardWrapper>
  );
}
