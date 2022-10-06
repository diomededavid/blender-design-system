import React from 'react';
import Menu, { MenuProps } from './Menu';

export default {
    title: "Menu",
    component: Menu
};

export const Default = (props: MenuProps) => <Menu {...props} />;
