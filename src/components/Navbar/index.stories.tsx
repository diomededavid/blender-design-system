import Navbar from "./index";

export default {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: "Atoms/Navbar",
    component: Navbar,
};

export const NavbarDefault = () => (
    <Navbar/>
);
