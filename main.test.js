const mocha = require("mocha");
const chai = require("chai");
const expect = chai.expect;
const main = require("./main_modified");

describe("Unit tests for number guess game", () => {
  it("performRangeValidation: Value less than min should throw error", () => {
    expect(() => main.performRangeValidation(0, 1, 2)).to.throw("Invalid input 0: Please enter value between 1 and 2");
  });

  it("performRangeValidation: Value greater than max should throw error", () => {
    expect(() => main.performRangeValidation(3, 1, 2)).to.throw("Invalid input 3: Please enter value between 1 and 2");
  });

  it("performRangeValidation: Invalid min value should throw error", () => {
    expect(() => main.performRangeValidation(3, 'a', 2)).to.throw("Invalid min value: a");
  });

  it("performRangeValidation: Invalid max should throw error", () => {
    expect(() => main.performRangeValidation(3, 0, 'b')).to.throw("Invalid max value: b");
  });
});
