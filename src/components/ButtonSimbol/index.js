import { ButtonContainerWhite } from './styles'

const ButtonWhite = ({label, onClick}) => {
    return (
      <ButtonContainerWhite onClick={onClick}>{label}</ButtonContainerWhite>
    );
  }
  
  export default ButtonWhite;
  