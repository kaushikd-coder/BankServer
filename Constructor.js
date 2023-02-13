function BankAccount (name, balance = 0){
    this.name = name;
    this.balance = balance;
    this.accountNumber = Date.now();

    this.deposit = (amount) => {
        this.balance += amount;
    }

    this.withDraw = (amount) => {
        this.balance -= amount
    }
}

// const account1 = new BankAccount("Kaushik", 5000);
// account1.deposit(1000);
// account1.withDraw(500);
// const account2 = new BankAccount("Rahul", 5000);
// console.log(account1.balance, account2.balance);

const accounts = [];
const accountForm = document.querySelector('#accountForm');
const customerName = document.querySelector('#customerName');
const balance = document.querySelector('#balance');

const depositForm = document.querySelector('#depositForm');
const accountNumber = document.querySelector('#accountNumber');
const amount = document.querySelector('#amount');

accountForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const account = new BankAccount(customerName.value, +balance.value);
    accounts.push(account);
    console.log(accounts);
});

depositForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const account = accounts.find(
        (account) => account.accountNumber === +accountNumber.value
    );
    account.deposit(+amount.value);
    console.log(accounts);
});