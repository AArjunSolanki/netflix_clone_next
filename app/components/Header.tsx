"use client"
import React, { useState } from "react";
import { GrMenu } from "react-icons/gr";
import Link from "next/link";
import "../assets/styles/header.scss";

interface NavItem {
  label: string;
  link: string;
}

const Header: React.FC = () => {
  const navItems: NavItem[] = [
    {
      label: "Movies",
      link: "/",
    }
  ];

  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  return (
    <header className="header">
      <nav className="header__app-bar">
        <div className="container header__container">
          <button
            className="header__menu-btn"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
          >
            <GrMenu />
          </button>

          <div className="header__logo">
            <Link href="/">LOGO</Link>
          </div>

          <div className="header__nav-links">
            {navItems.map((item, index) => (
              <Link href={item.link} key={index} className="header__nav-link">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      <div
        className={`header__drawer ${mobileOpen ? "header__drawer--open" : ""}`}
        onClick={handleDrawerToggle}
      >
        <div className="header__drawer-content">
          <div className="header__drawer-logo">LOGO</div>
          <ul className="header__drawer-list">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link href={item.link} className="header__drawer-link">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
