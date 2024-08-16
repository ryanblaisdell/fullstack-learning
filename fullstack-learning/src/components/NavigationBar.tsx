import React from 'react';
import { useNavigate } from 'react-router-dom';

interface NavItem {
  label: string;
  path: string;
}

interface NavigationBarProps {
  brandName: string;
  imageSrcPath: string;
  navItems: NavItem[];
}

const NavigationBar: React.FC<NavigationBarProps> = ({ brandName, imageSrcPath, navItems }) => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  /* 
    This uses bootstrap to return a styled navigation bar with a brand image, brand name, and navigation items.
    The navigation items are passed as props and are rendered as list items.
    When a navigation item is clicked, the index of the item and the path are passed to the handleNavigation function, 
    which sets the current path and navigates to the corresponding page using the useNavigate hook from react-router-dom.
  */

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="javascript:void(0)">
          <img
            src={imageSrcPath}
            height="60"
            className="d-inline-block align-center me-2"
            alt=""
          />
          <span className="fw-bolder fs-4">{brandName}</span>
        </a>
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-md-1">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="nav-item"
                onClick={() => handleNavigation(item.path)}
              >
                <a className="nav-link" href="javascript:void(0)">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;