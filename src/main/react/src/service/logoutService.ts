// Sends a logout request to the server. Does not redirect.
export const handleLogout = async () => {
    try {
        // Send a POST request to the /logout endpoint
        const response = await fetch('/logout', {
            method: 'POST',
        });

        if (response.ok) {
            return true;
        } else {
            // Handle logout failure, if needed
            console.error('Logout failed:', response.statusText);
        }
        return false;
    } catch (error) {
        console.error('Error logging out:', error);
        return false;
    }
};