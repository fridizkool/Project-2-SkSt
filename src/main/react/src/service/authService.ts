const queryAuthStatus = async () => {
    let authStatus = {
        authenticated: false,
        userRole: "NONE"
    }
    try {
        const response = await fetch('/auth/status');

        if (response.ok) {
            const data = await response.json();
            authStatus = data;
        } else {

        }
    } catch (error) {
        console.error('Error checking authentication status:', error);
    }

    return authStatus;
};

export { queryAuthStatus };
