import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Hero } from "./index";
import Button from "../Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms/Hero",
  component: Hero,
} as ComponentMeta<typeof Hero>;

const Template: ComponentStory<typeof Hero> = (args) => <Hero {...args} />;

export const Default = () => (
  <Hero>
    <img
      src="https://placeimg.com/260/400/arch"
      className="max-w-sm rounded-lg shadow-2xl"
      alt="placeholder"
    />
    <div>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
        excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
        id nisi.
      </p>
      <Button color="primary" label="Get Started" />
    </div>
  </Hero>
);
