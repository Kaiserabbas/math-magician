import operate from '../logic/operate';

describe('operate function', () => {
  it('correctly adds two numbers', () => {
    expect(operate('2', '3', '+')).toBe('5');
  });

  it('correctly subtracts two numbers', () => {
    expect(operate('5', '2', '-')).toBe('3');
  });

  it('correctly multiplies two numbers', () => {
    expect(operate('4', '5', 'x')).toBe('20');
  });

  it('correctly divides two numbers', () => {
    expect(operate('10', '2', '÷')).toBe('5');
  });

  it('handles division by 0', () => {
    expect(operate('5', '0', '÷')).toBe("Can't divide by 0.");
  });

  it('correctly calculates modulo', () => {
    expect(operate('7', '3', '%')).toBe('1');
  });

  it('handles modulo by 0', () => {
    expect(operate('5', '0', '%')).toBe(
      "Can't find modulo as can't divide by 0."
    );
  });

  it('throws an error for unknown operation', () => {
    expect(() => operate('2', '3', '^')).toThrow("Unknown operation '^'");
  });

  it('correctly handles the decimal point', () => {
    expect(operate('1.5', '2', '+')).toBe('3.5');
  });
});
