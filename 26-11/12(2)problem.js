// Q2: Simulating Private Variables with Closures

function createBankAccount() {
  let balance = 0; // private variable
  let transactionHistory = []; // private list of transactions

  return {
    deposit: function (amount) {
      if (amount > 0) {
        balance += amount;
        transactionHistory.push(`Deposited: ${amount}`);
        console.log(`Deposited: ${amount}`);
      } else {
        console.log("Invalid deposit amount");
      }
    },
    withdraw: function (amount) {
      if (amount > balance) {
        console.log("Insufficient balance");
        transactionHistory.push(`Failed withdrawal: ${amount}`);
      } else {
        balance -= amount;
        transactionHistory.push(`Withdrawn: ${amount}`);
        console.log(`Withdrawn: ${amount}`);
      }
    },
    checkBalance: function () {
      console.log(`Current balance: ${balance}`);
    },
    getTransactionHistory: function () {
      console.log("Transaction History:", transactionHistory);
    },
  };
}

// Example Usage
const account = createBankAccount();
account.deposit(500);   // Deposited: 500
account.withdraw(200);  // Withdrawn: 200
account.withdraw(400);  // Insufficient balance
account.checkBalance(); // Current balance: 300
console.log(account.balance); // undefined (not accessible)
account.getTransactionHistory(); // Logs all transactions
