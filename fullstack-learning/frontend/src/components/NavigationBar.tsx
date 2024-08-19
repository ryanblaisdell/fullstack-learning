import React from 'react';
import { useNavigate } from 'react-router-dom';

/* 
    This uses bootstrap to return a styled navigation bar with a brand image, brand name, and navigation items.
    The navigation items are passed as props and are rendered as list items.
    When a navigation item is clicked, the index of the item and the path are passed to the handleNavigation function, 
    which sets the current path and navigates to the corresponding page using the useNavigate hook from react-router-dom.
  */

interface NavItem {
  name: string;
  path: string;
}

interface NavigationBarProps {
  brandName: string;
  imageSrcPath: string;
  navItems: NavItem[];
}

const NavigationBar: React.FC<NavigationBarProps> = ({ brandName, imageSrcPath, navItems }) => {
  const navigate = useNavigate();

  const handleNavigation = async (path: string) => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/items/');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    navigate(path);
  };

  return (
    <nav className="navbar navbar-expand-md bg-dark text-white">
      <div className="container-fluid">
        <a className="navbar-brand" href="javascript:void(0)">
          <img
            src={imageSrcPath}
            height="60"
            className="d-inline-block align-center me-2"
            alt=""
            onClick={() => handleNavigation('/home')}
          />
          <span className="fw-bolder fs-4 text-white" onClick={() => handleNavigation('/home')}>{brandName}</span>
        </a>
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-md-1">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="nav-item"
                onClick={() => handleNavigation(item.path)}
              >
                <a className="nav-link text-white" href="javascript:void(0)">
                  {item.name}
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