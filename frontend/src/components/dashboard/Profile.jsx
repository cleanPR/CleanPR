import React from 'react'
import { useAuth } from '../hooks/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Button, Avatar } from '@mui/material';

import {
    ProfileWrapper,
    ProfileContainer
} from './styles/Profile.styles';

function Profile() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    const profileContainerStyle = {
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        marginBottom: '1.2rem',
    };

    const AvatarStyle = {
        width: 35,
        height: 35,
        bgcolor: '#23283a',
        border: '2px solid #23283a',
    }

    return (
        <ProfileWrapper>
            {user && (
                <ProfileContainer style={profileContainerStyle}>
                
                    <Avatar
                        alt={user.login || 'User'}
                        src={user.avatarUrl || ''}
                        sx={AvatarStyle}
                    />

                    <span style={{
                        color: '#F5F7FA',
                        fontWeight: 600,
                        fontFamily: 'monospace',
                        fontSize: '10px',
                    }}>{user.login || 'User'}</span>

                </ProfileContainer>
            )}

            <Button
                variant='contained'
                onClick={handleLogout}
                sx={{
                    backgroundColor: '#0A0F1C',
                }}
            >Logout</Button>
            
        </ProfileWrapper>
    );
}

export default Profile
