import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div data-layer='0336c1f3-33cb-47f8-8eed-50735c65736f' className='navbar'>
      <NavLink to='/'>
        <div data-layer='2e94911a-0e33-486a-873a-cc398bd0572c' className='aira'>
          AIRA
        </div>
      </NavLink>
      <div
        data-layer='cb9d7150-9ace-4908-8386-0a28752492da'
        className='oAplikacji'>
        O APLIKACJI
      </div>
    </div>
  );
}
