import React from "react";

// href for link
// text description of link

interface MenuItem {
  label: string;
  url: string;
  subitems?: MenuItem[];
}

interface Props {
  items: MenuItem[];
}

const DropdownMenu = (props: Props) => {
  return (
    <div className="dropdown">
      {props.items.map((item) => (
        <li className="flex flex-row">
          <label tabIndex={0} className="btn m-1">
            {item.label}
          </label>
          {item.subitems && (
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              {item.subitems.map((subitem) => (
                <li>
                  <a href={subitem.url}>{subitem.label}</a>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </div>
  );
};
export default DropdownMenu;
