import React from "react";

// href for link
// text description of link

interface DropdownMenuProps {
  menuLabel: string;
  menuItems: {
    item: string;
    url: string;
  };
}

export const DropdownMenu = ({
  menuLabel,
  menuItems: { item, url },
}: DropdownMenuProps) => {
  return (
    <div className="dropdown">
      <label tabIndex={0} className="m-1 btn">
        {menuLabel}
      </label>
      <ul
        tabIndex={0}
        className="p-2 shadow dropdown-content menu bg-base-100 rounded-box w-52"
      >
        <li>
          <a href={url}>{item}</a>
        </li>
        <li>
          <a>{item}</a>
        </li>
      </ul>
    </div>
  );
};
