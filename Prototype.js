function BankAccount (name, balance = 0){
    this.name = name;
    this.balance = balance;
    this.accountNumber = Date.now();

    // this.deposit = (amount) => {
    //     this.balance += amount;
    // }

    // this.withDraw = (amount) => {
    //     this.balance -= amount
    // }
}

BankAccount.prototype.deposit = function(amount){
    this.balance += amount;
}

BankAccount.prototype.withDraw = function(amount){
    this.balance -= amount;
}

const account1 = new BankAccount("Kaushik");
account1.deposit(100);
account1.withDraw(50);
console.log(account1);

