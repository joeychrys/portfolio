import { setCursor } from '../features/cursor/cursorSlice';
import { setLoading, setLocation } from '../features/router/routerSlice';
import classNames from 'classnames';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

const navItems = [
  { id: 1, title: 'projects', path: '/projects' },
  { id: 2, title: 'about', path: '/about' },
  { id: 3, title: 'contact', path: '/contact' },
];

const NavBar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const activeCursor = useSelector((state) => state.cursor.active);

  const activeLink = (path) => {
    if (path === location.pathname) {
      return true;
    } else {
      return false;
    }
  };
  
  const handlePage = (path) => {
    dispatch(setLoading())
    dispatch(setLocation(path))
    setTimeout(() => navigate(path), 1000);
    setTimeout(() => dispatch(setLoading()), 2000);
  };

  return (
    <nav className="absolute top-0 z-10 flex justify-center w-screen h-20 p-6 sm:justify-between">
      <div className="justify-center hidden space-x-1 sm:flex place-items-center sm:visible">
        <div
          onClick={() => dispatch(setCursor())}
          className={classNames(
            'peer w-5 h-5 border-black border-2 rounded-full hover:cursor-pointer',
            {
              'bg-black': !activeCursor,
            },
          )}
        />
        <h1 className="text-xl transition-opacity opacity-0 pointer-events-none peer-hover:opacity-100">
          {activeCursor ? 'disable cursor' : 'enable cursor'}
        </h1>
      </div>
      <ul className="flex space-x-6">
        {navItems.map((items) => (
          <li
            key={items.id}
            className={classNames(
              'border-b transition-all duration-300 ease-in-out hover:border-black',
              { 'border-black pointer-events-none': activeLink(items.path) },
              { 'border-white': !activeLink(items.path) },
            )}
            onClick={() => handlePage(items.path)}
          >
            <h1 className="text-xl">{items.title}</h1>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
