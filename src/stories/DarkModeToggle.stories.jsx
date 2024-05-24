import {DarkModeToggle} from "../components/darkMode/DarkModeToggle";

export default {
    component: DarkModeToggle ,
    title: 'DarkModeToggle ',
    tags: ['autodocs'],
  };
  
  export function Default(args) {
    return <DarkModeToggle  {...args} />;
  }
  
  export const Demo = {
    args: {
      value:true,
    },
  };