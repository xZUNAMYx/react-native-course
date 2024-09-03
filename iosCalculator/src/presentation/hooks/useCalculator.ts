/* eslint-disable prettier/prettier */
import {useEffect, useRef, useState} from 'react';
enum Operator {
  add = '+',
  subtract = '-',
  multiply = '*',
  divide = '/',
}
export const useCalculator = () => {
  const [formula, setFormula] = useState('');

  const [number, setNumber] = useState('0');
  const [prevNumber, setPrevNumber] = useState('0');

  const lastOparation = useRef<Operator>();

  useEffect(() => {
    if( lastOparation.current ){
      const firstFormulaPart = formula.split(' ').at(0);
      setFormula( `${ firstFormulaPart } ${ lastOparation.current } ${ number }`);
    }else{
      setFormula( number );
    }

  }, [ number ]);

  useEffect(() => {
    const subResult = calculateSubResult();
    setPrevNumber( `${ subResult }`);
  }, [formula]);

  const clean = () => {
    setNumber('0');
    setPrevNumber('0');
    lastOparation.current = undefined;
    setFormula('');
  };

  //Borrar el último número
  const deleteNumber = () => {
    let currentSign = '';
    let temporalNumber = number;

    if (number.includes('-')) {
      currentSign = '-';
      // temporalNumber = number.replace('-', '');
      temporalNumber = number.substring(1); //de -88 a 88
    }

    if (temporalNumber.length > 1) {
      setNumber(currentSign + temporalNumber.slice(0, -1)); //Para eliminar la ultima letra
    }

    setNumber('0');
  };

  const toggleSign = () => {
    if (number.includes('-')) {
      return setNumber(number.replace('-', ''));
    }

    setNumber('-' + number);
  };

  const buildNumber = (numberString: string) => {
    if (number.includes('.') && numberString === '.') {
      return;
    }

    if (number.startsWith('0') || number.startsWith('-0')) {
      //Punto decimal
      if (numberString === '.') {
        return setNumber(number + numberString);
      }

      //Evaluar si es otro cero y no hay punto
      if (numberString === '0' && number.includes('.')) {
        return setNumber(number + numberString);
      }

      //Evaluar si es diferente de cero, no hay punto, y es el primer número
      if (numberString !== '0' && !number.includes('.')) {
        return setNumber(numberString);
      }

      //Evitar 0000.000
      if (numberString === '0' && !number.includes('.')) {
        return;
      }

      return setNumber(number + numberString);
    }

    setNumber(number + numberString);
  };

  const setLastNumber = () => {
    calculateResult();
    if (number.endsWith('.')) {
      setPrevNumber(number.slice(0, -1));
    } else {
      setPrevNumber(number);
    }

    setNumber('0');
  };

  const divideOperation = () => {
    setLastNumber();
    lastOparation.current = Operator.divide;
  };

  const multiplyOperation = () => {
    setLastNumber();
    lastOparation.current = Operator.multiply;
  };

  const addOperation = () => {
    setLastNumber();
    lastOparation.current = Operator.add;
  };

  const subtractOperation = () => {
    setLastNumber();
    lastOparation.current = Operator.subtract;
  };

  const calculateResult = () => {

    const result = calculateSubResult();
    setFormula(`${ result }`);

    lastOparation.current = undefined;
    setPrevNumber('0');
  };

  const calculateSubResult = (): number => {
    const [firstValue, operation, secondValue] = formula.split(' ');

    const num1 = Number( firstValue );
    const num2 = Number( secondValue );

    if (isNaN( num2 )) return num1;

    switch( operation ){
      case Operator.add:
        return num1 + num2;

      case Operator.subtract:
        return num1 - num2;

      case Operator.multiply:
        return num1 * num2;

      case Operator.add:
        return num1 / num2;

      default:
        throw new Error('Operation not implemented');
    }
  };

  return {
    //Properties
    number,
    prevNumber,
    formula,

    //Methods
    buildNumber,
    toggleSign,
    clean,
    deleteNumber,
    divideOperation,
    multiplyOperation,
    addOperation,
    subtractOperation,
    calculateResult,
  };
};
