import WeekDaysCases from '../components/weekDaysCase/WeekDaysCases';

// eslint-disable-next-line storybook/story-exports
export default {
  component: WeekDaysCases,
  title: 'Weekdays',
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    
  }
};

export function Default(args) {
  return <WeekDaysCases {...args} />;
}

export const Test = {
  args: {
    color: "yellow",
    backgroundColor: "black",
    width: "50 px",
    fontFamily: "Times New Roman",
  }
}