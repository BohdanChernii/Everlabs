import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header>
      <Link to="/photos">Photos</Link>
      <Link to="/todos">Todos</Link>
    </header>
  );
};
export default Header;
