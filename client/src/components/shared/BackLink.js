import React from 'react';
import { Link } from 'react-router-dom';

const BackLink = ({text, url}) => {
  return (
    <div className="mt-3">
      <Link to={url}>{text}</Link>
    </div>
  )
}

export default BackLink;
