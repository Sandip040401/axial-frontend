import React from 'react';
import './Portfolio.css';

export const Portfolio = () => {
  const icons = [
    'fab fa-apple',
    'fab fa-google',
    'fab fa-facebook',
    'fab fa-amazon',
    'fab fa-microsoft',
    'fab fa-twitter',
    'fab fa-linkedin',
    'fab fa-instagram',
    'fab fa-youtube',
    'fab fa-snapchat',
    'fab fa-pinterest',
    'fab fa-tiktok',
    'fab fa-reddit',
    'fab fa-twitch',
    'fab fa-discord',
  ];

  return (
    <div className="overflow-hidden w-full pt-20">
      <div className="flex items-center justify-center">
        <div className="marquee-wrapper">
          <div className="marquee-content">
            {/* Duplicate icons for seamless scrolling */}
            {[...icons, ...icons].map((icon, index) => (
              <div
                className="flex items-center justify-center text-white text-4xl"
                key={index}
                style={{ width: '100px', height: '100px' }}
              >
                <i className={icon}></i>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
