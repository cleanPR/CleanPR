import React, { createContext, useContext, useState, useCallback } from 'react';
import { Snackbar, Alert } from '@mui/material';

const MessageContext = createContext();

export const MessageProvider = ({ children }) => {
    const [message, setMessage] = useState("");
    const [open, setOpen] = useState(false);
    const [messageType, setMessageType] = useState("");

    const displayMessage = useCallback((message, messageType) => {
        setOpen(true);
        setMessage(message);
        setMessageType(messageType);
    }, []);

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <MessageContext.Provider value={{ displayMessage }}>
            {children}
            <Snackbar
                open={open}
                autoHideDuration={3000}
                onClose={handleClose}
            >
                <Alert onClose={handleClose} variant='filled' severity={messageType} sx={{ width: '100%' }}>
                    {message}
                </Alert>
            </Snackbar>
        </MessageContext.Provider>
    );
};

export const useMessage = () => {
    return useContext(MessageContext);
};

