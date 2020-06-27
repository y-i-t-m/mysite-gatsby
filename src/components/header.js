import React from "react";
import { Link } from "gatsby";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="site">
          <Link to={"/"}>長谷川 駿 / Hayato Hasegawa </Link>
        </div>
        <nav className="nav">
          <ul>
            <li>
              <Link to={"/"}>TOP</Link>
            </li>
            <li>
              <Link to={"/about/"}>ABOUT</Link>
            </li>
            <li>
              <Link to={"/blog/"}>BLOG</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
