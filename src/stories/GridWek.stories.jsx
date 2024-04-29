import {GrilleWeek} from "../components/grille/GrilleWeek";

export default {
    component: GrilleWeek,
    title: 'GridCalendar',
    tags: ['autodocs'],
  };
  
  export function Default(args) {
    return <GrilleWeek {...args} />;
  }
  