import {InputDate} from "../components/inputs/InputDate";

export default {
    component: InputDate,
    title: 'InputDate',
    tags: ['autodocs'],
  };
  
  export function Default(args) {
    return <InputDate {...args} />;
  }
  
    
export const Demo = {
  
    args: {
    value: new Date('2021-03-25'),
    },
  };