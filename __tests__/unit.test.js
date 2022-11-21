// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
//phone number
test('is (123)-456-7890 a phone number', () => {
    expect(functions.isPhoneNumber("(123)-456-7890")).toBe(true);
});
test('is (222)-222-2222 a phone number', () => {
    expect(functions.isPhoneNumber("(222)-222-2222")).toBe(true);
});
test('is 123456 a phone number', () => {
    expect(functions.isPhoneNumber("123456")).toBe(false);
});
test('is abc a phone number', () => {
    expect(functions.isPhoneNumber("abc")).toBe(false);
});

//email
test('is a@a.com an email', () => {
    expect(functions.isEmail("a@a.com")).toBe(true);
});
test('is b@b.com an email', () => {
    expect(functions.isEmail("a@a.com")).toBe(true);
});
test('is hello email', () => {
    expect(functions.isEmail("hello")).toBe(false);
});
test('is 123456 an email', () => {
    expect(functions.isEmail("123456")).toBe(false);
});

//password
test('is abc123 a strong password', () => {
    expect(functions.isStrongPassword("abc123")).toBe(true);
});
test('is abcd1234 a strong password', () => {
    expect(functions.isStrongPassword("abcd1234")).toBe(true);
});
test('is ab a strong password', () => {
    expect(functions.isStrongPassword("ab")).toBe(false);
});
test('is 123456 a strong password', () => {
    expect(functions.isStrongPassword("123456")).toBe(false);
});

//date
test('is 11/22/2222 a date', () => {
    expect(functions.isDate("11/22/2222")).toBe(true);
});
test('is 01/11/2000 a date', () => {
    expect(functions.isDate("01/11/2000")).toBe(true);
});
test('is 222 a date', () => {
    expect(functions.isDate("222")).toBe(false);
});
test('is 22/22 a date', () => {
    expect(functions.isDate("22/22")).toBe(false);
});

//hexcolor
test('is 111 a hex color', () => {
    expect(functions.isHexColor('111')).toBe(true);
});
test('is #AAAAAA a hex color', () => {
    expect(functions.isHexColor('#AAAAAA')).toBe(true);
});
test('is 1 a hex color', () => {
    expect(functions.isHexColor('1')).toBe(false);
});
test('is 1 a hex color', () => {
    expect(functions.isHexColor('1')).toBe(false);
});
