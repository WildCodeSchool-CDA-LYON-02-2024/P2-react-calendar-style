import SideCalendar from "../components/sideCalendar/SideCalendar";

export default {
    component: SideCalendar,
    title: 'SideCalendar',
    tags: ['autodocs'],
  };
  
  export function Default(args) {
    return <SideCalendar {...args} />;
  }