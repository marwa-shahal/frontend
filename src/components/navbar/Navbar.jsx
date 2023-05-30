import React from "react";
import Classes from "./navbar.module.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <header className={Classes.header}>
        <div className={Classes.container}>
          <div className={Classes.navigation}>
            <div className={Classes.brand}>
              <Link to="/" className={Classes.brandLink}>
                EduShadows
             
              </Link>
            </div>
            <nav className={Classes.nav}>
              <div className={Classes.wrapper}>
                <ul className={Classes.menu}>
                  <li className={Classes.items}>
                    <Link to="/" className={Classes.link}>
                      Home
                    </Link>
                  </li>
                  <li className={Classes.items}>
                    <Link to="/find-teachers" className={Classes.link}>
                      Find Shadow Teachers
                    </Link>
                  </li>
                  <li className="items">
                    <Link to="/job-news" className={Classes.link}>
                      JobNews
                    </Link>
                  </li>
                  <li className={Classes.items}>
                    <Link to="/events-webinars" className={Classes.link}>
                      Events&Webinars
                    </Link>
                  </li>
                  <li className={Classes.items}>
                    <Link to="/contact-us" className={Classes.link}>
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
            <div className={Classes.user}>
              {/* <div className={Classes.login}>
                <Link to="/login">Login</Link>
              </div> */}
              <div className={Classes.register}>
                <Link to="/register">Register</Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;

// import React, { useState } from "react";
// import Classes from "./navbar.module.css";
// import { Link } from "react-router-dom";

// function Navbar() {

//   return (
//     <div>
//       <header className={Classes.header}>
//         <div className={Classes.container}>
//           <div className={Classes.navigation}>
//             <div className={Classes.brand}>
//               <Link to="/" className={Classes.brandLink}>
//                 EduShadows
//               </Link>
//             </div>
//             <input
//               type="checkbox"
//               className={Classes.menuToggle}
//               id="menu-toggle"
//               // checked={isMenuOpen}
//               onChange={handleMenuToggle}
//             />
//             <label htmlFor="menu-toggle" className={Classes.menuIcon}>
//               <span></span>
//               <span></span>
//               <span></span>
//             </label>
//             <nav
//               className={`${Classes.nav} ${isMenuOpen ? Classes.showMenu : ""}`}
//             >
//               <div className={Classes.wrapper}>
//                 <ul className={Classes.menu}>
//                   <li className={Classes.items}>
//                     <Link to="/" className={Classes.link}>
//                       Home
//                     </Link>
//                   </li>
//                   <li className={Classes.items}>
//                     <Link to="/find-teachers" className={Classes.link}>
//                       Find Shadow Teachers
//                     </Link>
//                   </li>
//                   <li className="items">
//                     <Link to="/job-news" className={Classes.link}>
//                       JobNews
//                     </Link>
//                   </li>
//                   <li className={Classes.items}>
//                     <Link to="/events-webinars" className={Classes.link}>
//                       Events&Webinars
//                     </Link>
//                   </li>
//                   <li className={Classes.items}>
//                     <Link to="/contact-us" className={Classes.link}>
//                       Contact Us
//                     </Link>
//                   </li>
//                 </ul>
//               </div>
//             </nav>
//             <div className={Classes.user}>
//               <Link to="/registration">Registration</Link>
//             </div>
//           </div>
//         </div>
//       </header>
//     </div>
//   );
// }

// export default Navbar;
