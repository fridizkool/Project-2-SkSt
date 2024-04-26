import React from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutButton: React.FC = () => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            // Send a POST request to the /logout endpoint
            const response = await fetch('/logout', {
                method: 'POST',
            });

            if (response.ok) {
                // Redirect to the landing page
                navigate('/');
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
