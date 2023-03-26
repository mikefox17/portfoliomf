import React from 'react';

const Button = ({ styles, url, content }) => {
  return (
    <a href={url} target="_blank">
      <button
        type="button"
        className={`py-4 px-4 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px]`}
      >
        {' '}
        {content}
      </button>
    </a>
  );
};

export default Button;
