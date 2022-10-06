import React from 'react';



// href for link
// text description of link

interface MenuProps {
    /**
   * menu item url 
   */
  
    url: string
    text: string

}

export const Menu = ({url, text}: MenuProps) => {
    return (<ul className="w-56 menu bg-base-100">
    <li><a href={url}>{text}</a></li></ul>);
}
