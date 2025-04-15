const operations = require("../src/operations/operations");

describe("operations", () => {
  describe("add", () => {
    test("adds two positive numbers", () => {
      expect(operations.add(2, 3)).toBe(6);
    });

    test("adds a positive and a negative number", () => {
      expect(operations.add(5, -3)).toBe(2);
    });

    test("throws an error when parameters are not numbers", () => {
      expect(() => operations.add("a", 3)).toThrow(
        "Invalid parameters for addition. Both parameters must be numbers."
      );
    });
  });

  describe("subtract", () => {
    test("subtracts two positive numbers", () => {
      expect(operations.subtract(5, 3)).toBe(2);
    });

    test("subtracts a larger number from a smaller number", () => {
      expect(operations.subtract(3, 5)).toBe(-2);
    });

    test("throws an error when parameters are not numbers", () => {
      expect(() => operations.subtract(5, "b")).toThrow(
        "Invalid parameters for subtraction. Both parameters must be numbers."
      );
    });
  });

  describe("multiply", () => {
    test("multiplies two positive numbers", () => {
      expect(operations.multiply(2, 3)).toBe(6);
    });

    test("multiplies a number by zero", () => {
      expect(operations.multiply(5, 0)).toBe(0);
    });

    test("throws an error when parameters are not numbers", () => {
      expect(() => operations.multiply("x", 3)).toThrow(
        "Invalid parameters for multiplication. Both parameters must be numbers."
      );
    });
  });

  describe("divide", () => {
    test("divides two positive numbers", () => {
      expect(operations.divide(6, 3)).toBe(2);
    });

    test("throws an error when dividing by zero", () => {
      expect(() => operations.divide(5, 0)).toThrow(
        "Division by zero is not allowed."
      );
    });

    test("throws an error when parameters are not numbers", () => {
      expect(() => operations.divide(5, "y")).toThrow(
        "Invalid parameters for division. Both parameters must be numbers."
      );
    });
  });
  describe("power", () => {
    test("raises a number to a positive power", () => {
      expect(operations.power(2, 3)).toBe(8);
    });

    test("raises a number to the power of zero", () => {
      expect(operations.power(5, 0)).toBe(1);
    });

    test("raises a number to a negative power", () => {
      expect(operations.power(2, -2)).toBe(0.25);
    });
    test("throws an error when parameters are not numbers", () => {
      expect(() => operations.power(2, "z")).toThrow(
        "Invalid parameters for power. Both parameters must be numbers."
      );
    });

    test("throws an error when parameters are not numbers", () => {
      expect(() => operations.power("a", 3)).toThrow(
        "Invalid parameters for power. Both parameters must be numbers."
      );
    });
  });
});
