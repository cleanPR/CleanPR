import React from 'react';
import { useAuth } from '../hooks/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Avatar } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';

import {
    ProfileWrapper,
    ProfileContainer,
    UserInfo,
    UserName,
    UserStatus,
    LogoutButton
} from './styles/Profile.styles';

function Profile() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    const AvatarStyle = {
        width: 40,
        height: 40,
        bgcolor: '#5B86FF',
        border: '2px solid rgba(91, 134, 255, 0.3)',
        fontSize: '16px',
        fontWeight: '600'
    }

    return (
        <ProfileWrapper>
            {user && (
                <ProfileContainer>
                    <Avatar
                        alt={user.login || 'User'}
                        src={user.avatarUrl || ''}
                        sx={AvatarStyle}
                    >
                        {!user.avatarUrl && (user.login ? user.login[0].toUpperCase() : 'U')}
                    </Avatar>

                    <UserInfo>
                        <UserName>{user.login || 'User'}</UserName>
                        <UserStatus>Signed in</UserStatus>
                    </UserInfo>
                </ProfileContainer>
            )}

            <LogoutButton onClick={handleLogout}>
                <LogoutIcon className="logout-icon" />
                Logout
            </LogoutButton>
            
        </ProfileWrapper>
    );
}

export default Profile
