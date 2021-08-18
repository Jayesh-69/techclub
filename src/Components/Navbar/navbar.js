import React, { useEffect, useState, useRef } from "react";
import { FaBars, FaTwitter } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo.png";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(true);
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} />
          <button
            className="nav-toggle"
            onClick={() => setShowLinks(!showLinks)}
          >
            <FaBars />
          </button>
        </div>
        <div
          className={`${
            showLinks ? "links-container show-container" : "links-container"
          }`}
        >
          <ul className="links">
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                  {console.log(1)}
                </li>
              );
            })}
          </ul>
        </div>
        <ul className="social-icons">
          {social.map((ss) => {
            const { id, url, icon } = ss;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
