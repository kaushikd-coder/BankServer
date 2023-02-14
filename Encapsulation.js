class BankAccount {
    name;
    #balance;
    accountNumber;

    constructor(name, balance, accountNumber){
        this.name = name;
        this.#balance = balance;
        this.accountNumber = accountNumber;
    }

    deposit(amount){
        this.#balance += amount;
    }

    withdraw(amount){
        this.#balance -= amount;
    }

    setAmount(amount){
        return this.#balance += amount;
    }

    getAmount(){
        return this.#balance;
    }
}

const account = new BankAccount("Kaushik", 1000, 123456789);
account.setAmount = 5000;
console.log(account.getAmount());