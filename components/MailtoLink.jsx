import React from 'react';

const MailtoLink = ({ email, subject = '', body = '' }) => {
  const encodedSubject = encodeURIComponent(subject);
  const encodedBody = encodeURIComponent(body);

  const href = `mailto:${email}?subject=${encodedSubject}&body=${encodedBody}`;

  return (
    <a href={href} className="your-link-styles" target="_blank" rel="noopener noreferrer">Contact Me</a>  // Customize link text and styles
  );
};

export default MailtoLink;
