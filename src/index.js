const { createInterface } = require("readline");
const {
  add,
  subtract,
  multiply,
  divide,
  power,
} = require("./operations/operations");

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const operations = {
  1: { name: "Add", func: add },
  2: { name: "Subtract", func: subtract },
  3: { name: "Multiply", func: multiply },
  4: { name: "Divide", func: divide },
  5: { name: "Power", func: power },
};

function displayWelcomeMessage() {
  console.log("Welcome to the Node CLI App!");
  console.log("Available operations:");
  Object.keys(operations).forEach((key) => {
    console.log(`${key}: ${operations[key].name}`);
  });
}

function promptForOperation() {
  rl.question("Select an operation (1-5): ", (operation) => {
    const selectedOperation = operations[operation];
    if (selectedOperation) {
      promptForParameters(selectedOperation);
    } else {
      console.log("Invalid operation selected. Please try again.");
      promptForOperation();
    }
  });
}

function promptForParameters(operation) {
  rl.question(
    `Enter parameters for ${operation.name} (comma separated): `,
    (input) => {
      const params = input
        .split(",")
        .map((param) => param.trim())
        .map(Number);
      if (params.some(isNaN)) {
        console.log("Invalid parameters. Please enter valid numbers.");
        promptForParameters(operation);
      } else {
        let result;
        try {
          result = operation.func(...params);
        } catch (error) {
          console.error(`Error: ${error.message}`);
          console.log("Please try again.");
          promptForParameters(operation);
          return;
        }
        console.log(`Result: ${result}`);
        farewellMessage();
      }
    }
  );
}

function farewellMessage() {
  console.log("Thank you for using the Node CLI App. Goodbye!");
  rl.close();
}

function main() {
  displayWelcomeMessage();
  promptForOperation();
}

main();
