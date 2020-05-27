import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div>
      <h2>Page Not Found</h2>
      <h3>
        Web page you are looking for is not available. It is either removed or not present. Use
        the link below to go back to home page.
      </h3>
      <Link to='/'>Back to home</Link>
    </div>
  );
};

export default PageNotFound;
