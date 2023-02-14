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
        this.balance += amount;
    }

    withdraw(amount){
        this.balance -= amount;
    }
}

class CurrentAccount extends BankAccount {
    transactionFee = 100;

    constructor(name, balance, accountNumber){
        super(name, balance, accountNumber);
    }

    deposit(amount){
        super.deposit(amount - this.transactionFee);
    }
    withdraw(amount){
        super.withdraw(amount - this.transactionFee);
    }

}

class SavingAccount extends BankAccount {
    transactionFee = 100;

    constructor(name, balance, accountNumber){
        super(name, balance, accountNumber);
    }

    takeLoan(amount){
        console.log('Taking Person loan...', + amount);
    }
}

const kdAcc = new CurrentAccount("Kaushik", 5000, 1234567890);
kdAcc.deposit(1000);
kdAcc.withdraw(3000);

const saAcc = new SavingAccount("Saurabh", 5000, 1234567890);
saAcc.takeLoan(1000);
console.log(kdAcc, saAcc)