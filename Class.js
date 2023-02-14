class BankAccount {
    name;
    balance;
    accountNumber;

    constructor(name, balance, accountNumber){
        this.name = name;
        this.balance = balance;
        this.accountNumber = accountNumber;
    }

    deposit(amount){
        this.balance = this.balance + amount;
    }

    withdraw(amount){
        this.balance = this.balance - amount;
    }
}

const account = new BankAccount("Kaushik", 1000, 123456789)
account.deposit(100);
account.withdraw(10);
console.log(account);
