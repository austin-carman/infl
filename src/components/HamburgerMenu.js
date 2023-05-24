import { useState } from "react";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {isOpen ? (
        <div className="expanded-menu">
          <ul className="menu-items">
            <li>Home</li>
            <li>About</li>
            <li>Destinations</li>
            <li>Shop</li>
            <li>Contact</li>
          </ul>
          <div className="close-menu" onClick={handleClick}>
            X
          </div>
        </div>
      ) : (
        <div className={`hamburger-icon`} onClick={handleClick}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      )}
    </>
  );
};

export default HamburgerMenu;
