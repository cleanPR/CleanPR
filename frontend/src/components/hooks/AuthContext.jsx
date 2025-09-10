
import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
	const [user, setUser] = useState(() => {
		const storedUser = localStorage.getItem('userProfile');
		return storedUser ? JSON.parse(storedUser) : null;
	});

	useEffect(() => {
		if (user) {
			localStorage.setItem('userProfile', JSON.stringify(user));
		} else {
			localStorage.removeItem('userProfile');
		}
	}, [user]);

	const isLoggedIn = !!user;

	const logout = () => {
		setUser(null);
		localStorage.removeItem('userProfile');
	};

	return (
		<AuthContext.Provider value={{ user, setUser, isLoggedIn, logout }}>
			{children}
		</AuthContext.Provider>
	);
}

export function useAuth() {
	return useContext(AuthContext);
}
