import Grille from "../components/grille/Grille.jsx";

export default {
    component: Grille,
    title: 'Grille',
    tags: ['autodocs'],
  };
  
  export function Default(args) {
    return <Grille {...args} />;
  }
  