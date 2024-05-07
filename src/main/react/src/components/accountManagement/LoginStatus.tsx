// LoginStatus.tsx

import React, { useEffect, useState } from 'react';
import { queryAuthStatus } from '../../service/authService';
import { t } from '../Internationization';

const LoginStatus: React.FC = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const fetchAuthStatus = async () => {
            const authStatus = await queryAuthStatus(); // Call the checkAuthStatus function
            setIsLoggedIn(authStatus.authenticated);
        };

        fetchAuthStatus();
    }, []);

    return (
        <div>
            <p>{isLoggedIn ? t("loggedIn") : t("loggedOut")}</p>
        </div>
    );
};

export default LoginStatus;
