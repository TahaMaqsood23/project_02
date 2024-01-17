// atm project
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        type: "input",
        name: 'userID',
        message: ' Enter your User ID'
    }, {
        type: "input",
        name: 'userPIN',
        message: ' Enter your User PIN'
    }, {
        type: "list",
        name: 'accType',
        message: 'Select Account type',
        choices: ['Current', 'Saving']
    }, {
        type: "list",
        name: 'transactionType',
        message: 'Select transaction type',
        choices: ['fastCash', 'otherWithdrawal']
    }, {
        type: "list",
        name: 'amount',
        message: 'Select amount',
        choices: [500, 1000, 5000, 10000],
        when(answer) { return answer.transactionType === 'fastCash'; }
    }, {
        type: "input",
        name: 'amount',
        message: ' Enter withdrawal amount',
        when(answer) { return answer.transactionType === 'otherWithdrawal'; }
    }
]);
const balance = Math.floor(Math.random() * 100000);
console.log('Your Account Balance is PKR:', balance);
const enteredAmount = answer.amount;
if (balance >= enteredAmount) {
    const remainingBalance = balance - enteredAmount;
    console.log('Transaction successful of', enteredAmount);
    console.log('Remaing bal is Pkr', remainingBalance);
}
else {
    console.log('Transaction Unsuccessfull, Retry with Lower amount');
}
