import React from 'react';
import './css/Break.css';

const Break = ({ height }) => {
  return (
    <div className="break" style={{ height: `${height}em` }}>
    </div>
  );
};

Break.defaultProps = {
  height: 1.4,
};

export default Break;
