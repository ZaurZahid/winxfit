import React from 'react';

const LocationIcon = ({ strokeColor }) => {
    return (
        <svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M27.8187 42.7339C26.9514 43.546 25.792 44 24.5855 44C23.3789 44 22.2196 43.546 21.3522 42.7339C13.4093 35.252 2.76478 26.8938 7.95579 14.7593C10.7625 8.19831 17.4999 4 24.5855 4C31.671 4 38.4085 8.19831 41.2152 14.7593C46.3996 26.8785 35.7813 35.2777 27.8187 42.7339Z" className={strokeColor} strokeWidth="2" />
            <path d="M31.5833 22C31.5833 25.866 28.4492 29 24.5833 29C20.7173 29 17.5833 25.866 17.5833 22C17.5833 18.134 20.7173 15 24.5833 15C28.4492 15 31.5833 18.134 31.5833 22Z" className={strokeColor} strokeWidth="2" />
        </svg>
    );
};

export default LocationIcon;
