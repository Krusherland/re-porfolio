import React from 'react'

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="footer fade-in">
      <div style={{ textAlign: 'center' }}>
        <p style={{ 
          margin: 0, 
          fontSize: '1rem',
          color: 'var(--text-color-secondary)'
        }}>
          Made by <span style={{ color: 'var(--text-color-accent)' }}>Cristian (Kru Dev)</span>
        </p>
        <p style={{ 
          margin: 'var(--spacing-xs) 0 0 0', 
          fontSize: '0.9rem',
          color: 'var(--text-color-muted)'
        }}>
          &copy; {currentYear} All rights reserved. Built with React & passion for code.
        </p>
      </div>
    </div>
  )
}
