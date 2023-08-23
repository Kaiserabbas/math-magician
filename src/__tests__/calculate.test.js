import calculate from '../logic/calculate';

describe('calculate function', () => {
  it('resets calculator data on AC button', () => {
    const result = calculate({ total: '10', next: '5', operation: '+' }, 'AC');
    expect(result).toMatchSnapshot();
  });

  it('handles number input correctly', () => {
    const result = calculate({ total: '10', next: '5', operation: '+' }, '1');
    expect(result).toMatchSnapshot();
  });

  it('handles decimal point input correctly', () => {
    const result = calculate({ total: '10', next: '5', operation: '+' }, '.');
    expect(result).toMatchSnapshot();
  });

  it('handles = operation correctly', () => {
    const result = calculate({ total: '10', next: '5', operation: '+' }, '=');
    expect(result).toMatchSnapshot();
  });

  it('handles +/- operation correctly', () => {
    const result = calculate({ total: '10', next: '5', operation: '+' }, '+/-');
    expect(result).toMatchSnapshot();
  });

  it('handles consecutive number inputs correctly', () => {
    const result = calculate({ total: '10', next: '5', operation: '+' }, '2');
    expect(result).toMatchSnapshot();
  });

  it('handles operation after number input correctly', () => {
    const result = calculate({ total: '10', next: '5', operation: '+' }, '-');
    expect(result).toMatchSnapshot();
  });

  it('handles consecutive operations correctly', () => {
    const result = calculate({ total: '10', next: '5', operation: '+' }, '/');
    expect(result).toMatchSnapshot();
  });

  it('handles operation after = correctly', () => {
    const result = calculate({ total: '10', next: '5', operation: '+' }, '=');
    expect(result).toMatchSnapshot();
  });

  it('handles operation after +/- correctly', () => {
    const result = calculate({ total: '10', next: '5', operation: '+' }, '+/-');
    expect(result).toMatchSnapshot();
  });
});
