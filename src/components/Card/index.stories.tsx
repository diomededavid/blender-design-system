import {ComponentStory, ComponentMeta} from "@storybook/react";
import {Card} from "./index";
import {Button} from "../Button/";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms/Card",
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Default = () => <Card />;

export const CardActions = () => (
  <Card>
      <h2>Heading</h2>
      <h2 className="card-title">Card title!</h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
    <Button label="label" color="btn-primary" />
  </Card>
);
