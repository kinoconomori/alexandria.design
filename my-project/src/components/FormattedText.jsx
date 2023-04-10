import React from 'react';

const FormattedText = ({ content }) => {
  const renderContent = (content) => {
    if (Array.isArray(content)) {
      return content.map((item, index) => {
        if (typeof item === 'string') {
          return <span key={index}>{item}</span>;
        } else {
          return React.cloneElement(item, { key: index });
        }
      });
    } else {
      return content;
    }
  };

  return <>{renderContent(content)}</>;
};

export default FormattedText;
