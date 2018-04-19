import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from 'react-icons/lib/fa/home';
import AddDayIcon from 'react-icons/lib/fa/calendar-plus-o';
import ListDaysIcon from 'react-icons/lib/fa/table';

const NavBar = () => (
  <nav>
    <Link to="/" activeClassName="selected">
      <HomeIcon />
    </Link>
    <Link to="add-day" activeClassName="selected">
      <AddDayIcon />
    </Link>
    <Link to="/list-days" activeClassName="selected">
      <ListDaysIcon />
    </Link>
  </nav>
);

export default NavBar;
