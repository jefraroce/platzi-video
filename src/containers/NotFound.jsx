import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/NotFound.scss';

const NotFound = () => (
  <div className='mainbox'>
    <div className='code'>404</div>
    <div className='msg'>
      Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in the first place?
      <p>
        Let&apos;s go&nbsp;
        <Link to='/'>home</Link>
        &nbsp;and try from there.
      </p>
    </div>
  </div>
);

export default NotFound;
