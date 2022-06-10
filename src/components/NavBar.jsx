import classNames from 'classnames';
import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const navItems = [
  { id: 1, title: 'projects', path: '/projects' },
  { id: 2, title: 'about', path: '/about' },
  { id: 3, title: 'contact', path: '/contact' },
];

const NavBar = () => {
  const location = useLocation();

  const activeLink = (path) => {
    if (path === location.pathname) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <nav className="relative z-30 flex w-screen place-items-center justify-center p-6">
      <ul className="flex space-x-6">
        {navItems.map((items) => (
          <li
            key={items.id}
            className={classNames(
              'border-b border-transparent transition-all duration-300 ease-in-out hover:border-black',
              { 'border-black': activeLink(items.path) },
            )}
          >
            <Link to={items.path}>
              <h1 className="text-2xl">{items.title}</h1>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
