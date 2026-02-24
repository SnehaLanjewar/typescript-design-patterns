//Bank Account class. deposit money, withdraw money, check balance

class BankAccount {
    //balance is encapsulated
    private _balance: number;

    constructor(initialBalance: number) {
        this._balance = initialBalance;
    }

    public get balance(): number {
        return this._balance;
    }

    public deposit(amount: number): void {
        if (!amount && amount < 0) {
            console.log('invalid deposit amount')
            return;
        }
        this._balance += amount;
    }

    public withdraw(amount: number): void {
        if (amount < 0) {
            console.log('invalid withdraw amount')
            return;
        }
        if ((this._balance - amount) < 0) {
            console.log('insufficient balance')
            return;
        }
        this._balance -= amount;
    }
}

//client

const myAccount = new BankAccount(1000);
myAccount.deposit(500);
myAccount.withdraw(300);
myAccount.balance;

console.log(myAccount)