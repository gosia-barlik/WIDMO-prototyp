import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className='navbar'>
      <NavLink to='/'>
        <div className='aira'>
          AIRA
        </div>
      </NavLink>
      <div
        className='oAplikacji'>
        O APLIKACJI
      </div>
    </div>
  );
}
