import React from 'react';

function Footer() {
  return (
    <footer className="bg-slate-600 p-4 text-white text-center bottom-0 w-full">
      <p>&copy; 2024 AnimeMaru. All rights reserved.</p>
      <p>
        Follow us on 
        <a href="https://twitter.com/AnimeMaru" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline"> Twitter</a>, 
        <a href="https://facebook.com/AnimeMaru" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline"> Facebook</a>, and 
        <a href="https://www.instagram.com/msfauzan505" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline"> Instagram</a>.
      </p>
    </footer>
  );
}

export default Footer;