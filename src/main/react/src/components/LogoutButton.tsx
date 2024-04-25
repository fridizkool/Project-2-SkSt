import React from 'react';

const LogoutButton: React.FC = () => {
    const handleLogout = async () => {
        try {
            // Send a POST request to the /logout endpoint
            const response = await fetch('/logout', {
                method: 'POST',
                // headers: {
                //     'Content-Type': 'application/json'
                // },
            });

            if (response.ok) {
                // TODO Perform logout logic here
            } else {
                // TODO Handle logout failure, if needed
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
