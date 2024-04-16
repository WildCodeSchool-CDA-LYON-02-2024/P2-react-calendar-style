import WeekDaysCases from '../components/weekDaysCase/WeekDaysCases';

// eslint-disable-next-line storybook/story-exports
export default {
  component: WeekDaysCases,
  title: 'Weekdays',
  tags: ['autodocs'],
};

export function Default(args) {
  return <WeekDaysCases {...args} />;
}

