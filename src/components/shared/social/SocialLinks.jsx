import React from 'react';

const SocialLinks = ({ href, icon, label }) => {
  return (
    <a
      href={href}
      aria-label={label}
      target='_blank'
      className="p-2 rounded-lg hover:bg-gray-100 transition-all duration-200 text-gray-600 hover:text-orange-500"
    >
      {icon}
    </a>
  )
}


export default SocialLinks