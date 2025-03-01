import React from "react";

function NavItem(props) {
  const { href, text } = props;

  return (
    <li className="nav-item">
      <a className="nav-link text-white" href={`#${href}`}>
        {text}
      </a>
    </li>
  );
}

export default NavItem;
