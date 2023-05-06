do {
    operator = prompt('What kind of calculation would you like to do? Is it -, +, / or *');
} while (!operator && operator !== '-' && operator !== '+' && operator !== '/' && operator !== '*');

do {
    numberOfOperands = prompt('How many operands do you want to use?');
} while (isNaN(parseInt(numberOfOperands)) || numberOfOperands < 2 || numberOfOperands > 7);

calculation = 0;
result = 0;

do {
    calculation++;

    do {
        numbers = parseInt(prompt('Please enter your operands.'));
    } while (isNaN(numbers));

    switch (operator) {
        case '-':
            result = calculation === 1 ? numbers : result - numbers;
            break;
        case '+':
            result += numbers;
            break;
        case '/':
            result = calculation === 1 ? numbers : result / numbers;
            break;
        case '*':
            if (calculation === 1) result = 1;
            result *= numbers;
            break;
    }
} while (calculation < numberOfOperands);

alert(result);