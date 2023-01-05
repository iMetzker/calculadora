import { ButtonContainerOrange } from './styles'

const ButtonSimbolRight = ({label, onClick}) => {
    return (
      <ButtonContainerOrange onClick={onClick}>{label}</ButtonContainerOrange>
    );
  }
  
  export default ButtonSimbolRight;
  