# Incubyte TDD Assessment - String Calculator

This project implements a String Calculator using Test-Driven Development (TDD) with Node.js and Jest.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/PraveenDung/incubyte-tdd-assessment.git
    cd incubyte-tdd-assessment
    npm install
    ```

2. Run tests:
    ```bash
    npm test
    ```

## Features Implemented
- Empty string returns `0`
- Single number returns itself
- Sum of two or more comma-separated numbers
- Support for newline (`\n`) as a delimiter
- Custom delimiters using `//[delimiter]\n`
- Negative number validation with an exception

##  Examples
| Input                     | Output                   |
|---------------------------|--------------------------|
| `""`                      | `0`                      |
| `"5"`                     | `5`                      |
| `"1,2,3"`                 | `6`                      |
| `"1\n2,3"`                | `6`                      |
| `"//;\n1;2"`              | `3`                      |
| `"1,-2,3,-4"`             | Exception: `negative numbers not allowed: -2,-4` |

## 📸 Screenshots
1. **Project Setup**  
   ![Project Setup](./screenshots/1_project_setup.png)

2. **First Failing Test (Red Phase)**  
   ![Failing Test](./screenshots/2_failing_test.png)

3. **First Passing Test (Green Phase)**  
   ![Passing Test](./screenshots/3_passing_test.png)
   ![Passing Test 2](./screenshots/3_passing_test_2.png)

4. **Sum of Two Numbers**  
   ![Sum Two Numbers](./screenshots/4_sum_two_numbers.png)
   ![Sum Multiple Numbers](./screenshots/4_sum_multiple_numbers.png)

5. **Custom Delimiter Support**  
   ![Custom Delimiter](./screenshots/5_custom_delimiter.png)

6. **Negative Numbers Exception**  
   ![Negative Numbers](./screenshots/6_negative_numbers_exception.png)


## 🏁 Conclusion
This project demonstrates the TDD approach in software development. All code is well-tested and follows clean coding practices.
