const checkAuthStatus = async () => {
    try {
        const response = await fetch('/auth/status');

        if (response.ok) {
            const data = await response.text();
            return data === 'true';
        } else {
            return false;
        }
    } catch (error) {
        console.error('Error checking authentication status:', error);
        return false;
    }
};

export { checkAuthStatus };
