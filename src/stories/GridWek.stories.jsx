import GridCalendar from "../components/grille/GrilleWeek.jsx";

export default {
    component: GridCalendar,
    title: 'GridCalendar',
    tags: ['autodocs'],
  };
  
  export function Default(args) {
    return <GridCalendar {...args} />;
  }
  