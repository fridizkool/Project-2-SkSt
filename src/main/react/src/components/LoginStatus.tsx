// LoginStatus.tsx

import React, { useEffect, useState } from 'react';
import { checkAuthStatus } from '../service/authService';

const LoginStatus: React.FC = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const fetchAuthStatus = async () => {
            const isAuthenticated = await checkAuthStatus(); // Call the checkAuthStatus function
            setIsLoggedIn(isAuthenticated);
        };

        fetchAuthStatus();
    }, []);

    return (
        <div>
            <p>User is {isLoggedIn ? 'logged in' : 'logged out'}</p>
        </div>
    );
};

export default LoginStatus;
