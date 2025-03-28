const add = require('./stringCalculator');

test('returns 0 for an empty string', () => {
    expect(add("")).toBe(0);
});

test('returns number itself for single input', () => {
    expect(add("5")).toBe(5);
});

test('returns sum of two numbers separated by comma', () => {
    expect(add("1,5")).toBe(6);
});

test('returns sum of multiple numbers', () => {
    expect(add("1,2,3,4,5")).toBe(15);
});

test('handles new lines as delimiters', () => {
    expect(add("1\n2,3")).toBe(6);
});

test('supports custom delimiters', () => {
    expect(add("//;\n1;2")).toBe(3);
});

test('throws exception for negative numbers', () => {
    expect(() => add("1,-2,3,-4")).toThrow("negative numbers not allowed: -2,-4");
});