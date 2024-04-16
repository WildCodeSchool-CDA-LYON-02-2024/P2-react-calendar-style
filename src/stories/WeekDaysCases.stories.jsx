import WeekDaysCases from '../components/weekDaysCase/WeekDaysCases';
import { userEvent, within } from '@storybook/test';

// eslint-disable-next-line storybook/story-exports
export default {
  component: WeekDaysCases,
  title: 'Weekdays',
  tags: ['autodocs'],

};




// const Template = () => <WeekDaysCases />;

// export const Primary = Template.bind({});
// Primary.args = {
//   label: 'Primary Button',
//   primary: true,
// };

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Secondary Button',
//   primary: false,
// };

export function Default (args) {
  return <WeekDaysCases{...args} />
}

