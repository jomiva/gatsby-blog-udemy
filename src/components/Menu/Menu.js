import React from 'react';
import { Link } from 'gatsby';
import './Menu.scss';
import SocialMedia from '../SocialMedia/SocialMedia';
import Courses from '../Courses/Courses';

const Menu = () => {
  return (
    <div className="menu">
      <Link to="/">
        <h2>Blog de José</h2>
      </Link>
      <p>
        Blog sobre desarrollo web, programación y ambición. React, Gatsby, C++,
        ETC!
      </p>
      <SocialMedia />
      <Courses />
    </div>
  );
};

export default Menu;
