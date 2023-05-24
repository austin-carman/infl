import HamburgerMenu from "../HamburgerMenu";
import { useState } from "react";

const Navbar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const handleShowMenu = () => {
    setMenuIsOpen(true);
  };

  const handleCloseMenu = () => {
    setMenuIsOpen(false);
  };

  return (
    <nav>
      <h3>Name</h3>
      <HamburgerMenu
        handleShowMenu={handleShowMenu}
        handleCloseMenu={handleCloseMenu}
      />
      {menuIsOpen && (
        <ul>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
