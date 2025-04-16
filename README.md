# Node CLI Application

This project is a simple command-line interface (CLI) application built with Node.js. It allows users to perform various operations through a command-line interface, providing a welcoming experience and clear instructions.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Available Operations](#available-operations)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/ssgs-calc.git
   ```
2. Navigate to the project directory:
   ```
   cd ssgs-calc
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

To run the application, use the following command:

```
node src/index.js
```

Upon launching, the application will display a welcome message and a list of available operations. Follow the prompts to select an operation and provide the necessary parameters.

## Available Operations

- **Add**: Adds two numbers together.
  - **Parameters**:
    - `param1`: The first number to add.
    - `param2`: The second number to add.
- **Subtract**: Subtracts the second number from the first number.
  - **Parameters**:
    - `param1`: The number to subtract from.
    - `param2`: The number to subtract.
- **Multiply**: Multiplies two numbers together.
  - **Parameters**:
    - `param1`: The first number to multiply.
    - `param2`: The second number to multiply.
- **Divide**: Divides the first number by the second number.
  - **Parameters**:
    - `param1`: The dividend (number to be divided).
    - `param2`: The divisor (number to divide by). Must not be zero.
- **Power**: Raises the first number to the power of the second number.
  - **Parameters**:
    - `param1`: The base number.
    - `param2`: The exponent.

## Contributing

Contributions are welcome :) Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the No-Wall License. See the LICENSE file for more details.
