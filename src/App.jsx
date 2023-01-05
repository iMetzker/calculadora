import { Container, Content, Row } from "./styles";
import Input from './components/Input';
import Button from './components/Button';
import ButtonSimbolRight from './components/ButtonSimbolRight';
import ButtonWhite from './components/ButtonSimbol';
import { useState } from "react";


const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');

  // IMPRIMINDO UM NÚMERO NA TELA
  const handleAddNumber = (number) => {
    setCurrentNumber( prev => `${prev === '0' ? '' : prev}${number}`)
  }

  // LIMPANDO A TELA
  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
  }

  // FUNÇÃO: SOMA
  const [firstNumber, setFirstNumber] = useState('0');
  
  const handleSumNumbers = () => {

    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('+');
    }
    else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('');
      
    }
  }

  // FUNÇÃO: IGUALDADE
  const [operation, setOperation] = useState('');

  const handleEquality = () => {

    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
      switch(operation){
        case '+':
          handleSumNumbers();
          break;
        case '-':
          handleSubNumbers();
          break;
        case 'x':
          handlemMultNumbers();
          break;
        case '/':
          handlemDivNumbers();
          break;
        default: break;
      }
    }
  }


  // FUNÇÃO: SUBTRAÇÃO
  
  const handleSubNumbers = () => {

    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('-');
    }
    else {
      const sub = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sub));
      setOperation('');
      
    }
  }

  // FUNÇÃO: MULTIPLICAÇÃO

  const handlemMultNumbers = () => {

    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('x');
    }
    else {
      const mult = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(mult));
      setOperation('');
      
    }
  }

  // FUNÇÃO: DIVISÃO

  const handlemDivNumbers = () => {

    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('/');
    }
    else {
      const div = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(div));
      setOperation('');
      
    }
  }

  return (
  <Container>
    <Content>

      <Input value={currentNumber} />

      <Row>
      <ButtonWhite label="AC" onClick={handleOnClear}/>
      <ButtonWhite label="x" onClick={handlemMultNumbers}/>
      <ButtonWhite label="0" onClick={() => handleAddNumber ('0')}/>
      <ButtonSimbolRight label="/" onClick={handlemDivNumbers}/>
      </Row>
      <Row>
      <Button label="7" onClick={() => handleAddNumber ('7')}/>
      <Button label="8" onClick={() => handleAddNumber ('8')}/>
      <Button label="9" onClick={() => handleAddNumber ('9')}/>
      <ButtonSimbolRight label="+" onClick={handleSumNumbers}/>
      </Row>
      <Row>
      <Button label="4" onClick={() => handleAddNumber ('4')}/>
      <Button label="5" onClick={() => handleAddNumber ('5')}/>
      <Button label="6" onClick={() => handleAddNumber ('6')}/>
      <ButtonSimbolRight label="-" onClick={handleSubNumbers}/>
      </Row>
      <Row>
      <Button label="1" onClick={() => handleAddNumber ('1')}/>
      <Button label="2" onClick={() => handleAddNumber ('2')}/>
      <Button label="3" onClick={() => handleAddNumber ('3')}/>
      <ButtonWhite label="=" onClick={handleEquality}/>
      </Row>
      

    </Content>
  </Container>
  )
};

export default App;
