import React, { useEffect, useState } from 'react';

const LoginStatus: React.FC = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const checkAuthStatus = async () => {
            try {
                // Send a GET request to a /auth/status endpoint to check authentication status
                const response = await fetch('/auth/status');

                if (response.ok) {
                    const data = await response.text();
                    setIsLoggedIn(data === 'true');
                } else {
                    setIsLoggedIn(false);
                }
            } catch (error) {
                console.error('Error checking authentication status:', error);
                setIsLoggedIn(false);
            }
        };

        checkAuthStatus();
    }, []);

    return (
        <div>
            <p>User is {isLoggedIn ? 'logged in' : 'logged out'}</p>
        </div>
    );
};

export default LoginStatus;
