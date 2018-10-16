const mocha = require("mocha");
const chai = require("chai");
const expect = chai.expect;
const main = require("./main_modified");

describe("Unit tests for number guess game", () => {
  it("performRangeValidation: Value less than min should throw error", () => {
    expect(() => main.performRangeValidation(1, 2, 4)).to.throw("Invalid input 1: Please enter value between 2 and 4");
  });

  it("performRangeValidation: Value greater than max should throw error", () => {
    expect(() => main.performRangeValidation(3, 1, 2)).to.throw("Invalid input 3: Please enter value between 1 and 2");
  });

  it("performRangeValidation: Invalid min value should throw error", () => {
    expect(() => main.performRangeValidation(3, 'a', 2)).to.throw("Invalid min value: a");
  });

  it("performRangeValidation: Invalid max should throw error", () => {
    expect(() => main.performRangeValidation(3, 1, 'b')).to.throw("Invalid max value: b");
  });

  it("performRangeValidation: Invalid number of arguments should throw error", () => {
    expect(() => main.performRangeValidation()).to.throw("Function expects 3 input arguments");
    expect(() => main.performRangeValidation(3)).to.throw("Function expects 3 input arguments");
    expect(() => main.performRangeValidation(3, 0)).to.throw("Function expects 3 input arguments");
  });

  it("performRangeValidation: Valid input values should be successful", () => {
    expect(main.performRangeValidation(3, 2, 4)).to.be.eq(3);
  });

  it("incrementNumberOfAttempts: Negative current number of attempts should throw error", () => {
    expect(() => main.incrementNumberOfAttempts(-1, 3)).to.throw("Invalid arguments");
  });

  it("incrementNumberOfAttempts: Negative max number of attempts should throw error", () => {
    expect(() => main.incrementNumberOfAttempts(1, -3)).to.throw("Invalid arguments");
  });

  it("incrementNumberOfAttempts: current number provided as string should throw error", () => {
    expect(() => main.incrementNumberOfAttempts('a', 3)).to.throw("Invalid arguments");
  });

  it("incrementNumberOfAttempts: max number of attempts provided as string should throw error", () => {
    expect(() => main.incrementNumberOfAttempts(1, 'c')).to.throw("Invalid arguments");
  });

  it("incrementNumberOfAttempts: invalid arguments should throw error", () => {
    expect(() => main.incrementNumberOfAttempts()).to.throw("Invalid arguments");
    expect(() => main.incrementNumberOfAttempts(1)).to.throw("Invalid arguments");
  });

  it("incrementNumberOfAttempts: current number of attempts breach max attempts should throw error", () => {
    expect(() => main.incrementNumberOfAttempts(2, 2)).to.throw("Sorry, Number of attempts expired");
  });

  it("incrementNumberOfAttempts: current number of attempts less than max attempts should incremented value", () => {
    expect(main.incrementNumberOfAttempts(1, 2)).to.be.eq(2);
  });
});
