import React, { useState } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [calculatorData, setCalculatorData] = useState({});
  const handleButtonClick = (buttonName) => {
    console.log('Button clicked:', buttonName); // Add this line
    if (buttonName === '=') {
      const result = calculate(calculatorData, '=');
      setCalculatorData(result);
    } else {
      const newData = calculate(calculatorData, buttonName);
      console.log('New data:', newData);
      setCalculatorData(newData);
    }
  };

  const renderButton = (label, ClassName) => {
    return (
      <button
        type="button"
        className={ClassName}
        onClick={() => handleButtonClick(label)}
      >
        {label}
      </button>
    );
  };

  return (
    <div className="calculator">
      <div className="display">
        {' '}
        {calculatorData.total || calculatorData.next || '0'}
      </div>
      <div className="buttons">
        <div className="row1 row">
          {renderButton('AC', 'button')}
          {renderButton('+/-', 'button')}
          {renderButton('%', 'button')}
          {renderButton('÷', ' button operator')}
        </div>
        <div className="row2 row">
          {renderButton('7', 'button')}
          {renderButton('8', 'button')}
          {renderButton('9', 'button')}
          {renderButton('x', 'button operator')}
        </div>
        <div className="row3 row">
          {renderButton('4', 'button')}
          {renderButton('5', 'button')}
          {renderButton('6', 'button')}
          {renderButton('-', 'button operator')}
        </div>
        <div className="row4 row">
          {renderButton('1', 'button')}
          {renderButton('2', 'button')}
          {renderButton('3', 'button')}
          {renderButton('+', 'button operator')}
        </div>
        <div className="row5 row">
          {renderButton('0', 'button')}
          {renderButton('.', 'button')}
          {renderButton('=', 'button operator')}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
