import React from 'react';
// import Navbar from './Navbar';
// import Footer from './Footer';

const Root = ({ children }) => (
  <div id="main" className="container-fluid">
    <p>Root reporting in </p>
    {/*<Navbar />*/}
    { children }
    {/*<Footer />*/}
  </div>
);

export default Root;
