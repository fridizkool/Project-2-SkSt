import React from 'react';
import { redirect } from 'react-router-dom';

const LogoutButton: React.FC = () => {
    const handleLogout = async () => {
        try {
            // Send a POST request to the /logout endpoint
            const response = await fetch('/logout', {
                method: 'POST',
            });

            if (response.ok) {
                // Redirect to the landing page
                redirect('/');
                // window.location.reload();
            } else {
                // Handle logout failure, if needed
                console.error('Logout failed:', response.statusText);
            }
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };

    return (
        <button onClick={handleLogout}>Logout</button>
    );
};

export default LogoutButton;
