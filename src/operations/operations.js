const operations = {
  add: (a, b) => {
    if (isNaN(a) || isNaN(b)) {
      throw new Error(
        "Invalid parameters for addition. Both parameters must be numbers."
      );
    }
    return a + b;
  },
  subtract: (a, b) => {
    if (isNaN(a) || isNaN(b)) {
      throw new Error(
        "Invalid parameters for subtraction. Both parameters must be numbers."
      );
    }
    return a - b;
  },
  multiply: (a, b) => {
    if (isNaN(a) || isNaN(b)) {
      throw new Error(
        "Invalid parameters for multiplication. Both parameters must be numbers."
      );
    }
    return a * b;
  },
  divide: (a, b) => {
    if (isNaN(a) || isNaN(b)) {
      throw new Error(
        "Invalid parameters for division. Both parameters must be numbers."
      );
    }
    if (b === 0) {
      throw new Error("Division by zero is not allowed.");
    }
    return a / b;
  },
  power: (a, b) => {
    if (isNaN(a) || isNaN(b)) {
      throw new Error(
        "Invalid parameters for power. Both parameters must be numbers."
      );
    }
    return Math.pow(a, b);
  },
};

module.exports = operations;
