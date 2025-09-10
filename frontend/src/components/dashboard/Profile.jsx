import React from 'react'
import { useAuth } from '../hooks/AuthContext';
import { useNavigate } from 'react-router-dom';
import {
    Button,
    Avatar
} from '@mui/material';

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
        justifyContent: 'flex-end',
        flexDirection: 'column',
        padding: '20px',
        marginLeft: '25px'
    }

    return (
        <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'flex-end' 
            }}>

            {user && (
                <div style={profileContainerStyle}>

                    <Avatar
                        alt={user.login || 'User'}
                        src={user.avatarUrl || ''}
                        sx={{ 
                            width: 58,
                            height: 58, 
                            bgcolor: '#23283a', 
                            border: '2px solid #23283a',
                            marginBottom: "10px"
                        }}
                    />
                    <span style={{ 
                        color: '#F5F7FA',
                        fontWeight: 600, 
                        fontFamily: 'monospace' 
                    }}>{user.login || 'User'}</span>
                </div>
            )}
            <Button
                variant='contained'
                onClick={handleLogout}
                sx={{
                    backgroundColor: '#0A0F1C',
                }}>Logout</Button>
        </div>
    )
}

export default Profile
