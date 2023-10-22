import React, { useState } from 'react';
import NumberButton from './NumberButton';
import OperatorButton from './OperatorButton';
import EqualButton from './EqualButton';
import BeautifulScreen from './BeautifulScreen';
import ItSOverNineThousand from './ItSOverNineThousand';

export default function Calculator() {
  const [displayValue, setDisplayValue] = useState('0');
  const [calculation, setCalculation] = useState('');
  const [result, setResult] = useState('');
  const [isOverNineThousand, setIsOverNineThousand] = useState(false);

  const handleNumberClick = (number) => {
    setDisplayValue(displayValue === '0' ? number : displayValue + number);
    setCalculation(calculation + number);
  };

  const handleOperatorClick = (operator) => {
    setCalculation(calculation + ' ' + operator + ' ');
    setDisplayValue('0');
  };
  
  const handleEquals = () => {
    try {
      const evalResult = eval(calculation);

      if (evalResult === Infinity || evalResult === -Infinity) {
        setResult('Erreur; Division par zéro !');
      } else {
        setResult(evalResult);
        setIsOverNineThousand(evalResult > 9000);
      }
    } catch (error) {
      setResult('Erreur');
      setIsOverNineThousand(false);
    }
  };

  return (
    <div className="calculator">
      <BeautifulScreen calculation={calculation} result={result} />
      <div className="calculator-content">
        <div className="number-buttons">
          {Array.from(Array(10).keys()).map((number) => (
            <NumberButton key={number} number={number} onClick={handleNumberClick} />
          ))}
        </div>
        <div className="operator-buttons">
          <OperatorButton operator="+" onClick={handleOperatorClick} />
          <OperatorButton operator="-" onClick={handleOperatorClick} />
          <OperatorButton operator="*" onClick={handleOperatorClick} />
          <OperatorButton operator="/" onClick={handleOperatorClick} />
        </div>
      </div>
      <EqualButton onClick={handleEquals} className="equal-button" />
      
      {result > 9000 && <ItSOverNineThousand />}
    </div>
  );
}
