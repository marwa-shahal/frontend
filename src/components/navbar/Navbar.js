import React from "react";
import Classes from "./navbar.module.css";

function Navbar() {
  return (
    <div>
      <header className={Classes.header}>
        <div className={Classes.container}>
          <div className={Classes.navigation}>
            <div className={Classes.brand}>
              <a href="#">
                EduShadows
                {/* <img src="./assets/Logo.png" alt="Logo" /> */}
              </a>
            </div>
            <nav className={Classes.nav}>
              <input type="checkbox" id="nav" className={Classes.hidden} />
              <label for="nav" className={Classes.navToggle}>
                <span></span>
                <span></span>
                <span></span>
              </label>
              <div className={Classes.wrapper}>
                <ul className={Classes.menu}>
                  <li className={Classes.items}>
                    <a href="#" className={Classes.link}>
                      Home
                    </a>
                  </li>
                  <li className={Classes.items}>
                    <a href="#" className={Classes.link}>
                      Find Shadow Teachers
                    </a>
                  </li>
                  <li className="items">
                    <a href="#" className={Classes.link}>
                      JobNews
                    </a>
                  </li>
                  <li className={Classes.items}>
                    <a href="#" className={Classes.link}>
                      Events&Webinars
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
            <div className={Classes.user}>
              <a href="#">
                {/* <img src="./assets/User.png" alt="User Acount" /> */}
                Registration
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
