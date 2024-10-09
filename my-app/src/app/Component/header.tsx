'use client'
import {showSidebar} from "../styles/f"
import {hideSidebar} from "../styles/f"
import React from "react";
import Link from "next/link";
import { showAlert } from "../styles/f"
const Header = () => {
  return(
    <>
      <nav>
        <h1 className="logo">
          <pre>
            Muhammad <span>kashan</span>
          </pre>
        </h1>
        <ul className="sidebar">
          <li onClick={hideSidebar}className="hidesidebar">
            <Link href="#"> <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></Link>
          </li>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
          <Link href="./about-us">About</Link>
          </li>
          <li>
            <Link href="./service">Service</Link>
          </li>
          <li>
            <Link href="./Portfolio">Portfolio</Link>
          </li>
          <li>
            <Link href="./contact-us">Contact</Link>
          </li>
        </ul>

        <ul className="hero">
          <li className="hideOnmobile">
            <Link href="/">Home</Link>
          </li>
          <li className="hideOnmobile">
            <Link  onClick={showAlert} href="./about-us">About</Link>
          </li>
          <li className="hideOnmobile">
            <Link href="./service">Service</Link>
          </li>
          <li className="hideOnmobile">
            <Link href="./Portfolio">Portfolio</Link>
          </li>
          <li className="hideOnmobile">
            <Link href="./contact-us">Contact</Link>
          </li>
          <li className="hamburger">
       <Link href="#" onClick={showSidebar}>
         <svg
           xmlns="http://www.w3.org/2000/svg"
           height="24px"
           viewBox="0 -960 960 960"
           width="24px"
           fill="#e8eaed"
         >
           <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
         </svg>
       </Link>
    </li>
        </ul>
      </nav>
       
     </>
  );
};

export default Header;
