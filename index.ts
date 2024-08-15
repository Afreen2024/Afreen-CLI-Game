import inquirer from "inquirer"
//Bank Account Interface
interface BankAccount{
accountNumber:number;
balance:number;
withdraw(amount:number):void
deposit(amount:number):void
checkBalance():void
}
//Bank Account Class
class BankAccount implements BankAccount{
accountNumber: number;
balance: number;

constructor(accountNumber:number,balance:number){
    this.accountNumber=accountNumber
    this.balance=balance
}
//Debit money
withdraw(amount: number): void {
    if(this.balance<= amount){
        this.balance -=amount;
        console.log(`withdraw of $${amount} successfully. Remaining balance is $${this.balance}`);
    }
        else{
            console.log("insufficent balance....");

            
        }
        

    }
    //credit money
    deposit(amount: number): void {
        if(amount> 100){
            amount -=1;// 1$ fee charge is more than $100 is depsosited

        } this.balance +=amount;
        console.log(`Deposit of $${amount} successfully. Remaining balance $${this.balance}`);
        
    }
    //check balance method
    checkBalance(): void {
        console.log(`Current balance :$${this.balance}`);
        
    }
}

// Customer class
class Customer{

firstName:string;
lastName:string;
gender:string;
age:number;
mobileNumber:number;
account:BankAccount ;

constructor(firstName:string,lastName:string,gender:string,age:number,mobileNumber:number,account:number){
    this.firstName=firstName;
    this.lastName=lastName;
    this.gender=gender;
    this.age=age;
    this.mobileNumber=mobileNumber;
    this.account=account;

}
}
//create bankacc0nt

const account:BankAccount[]=[
    new BankAccount(1001, 500),
    new BankAccount(1002, 1000),
    new BankAccount(1003, 2000)
]

//create customers

const customers:Customer[]=[
new Customer('afreen', "jahangeer","female",18,3442887595,accounts[0])
new Customer('neha', "khan","female",18,344288978,account[1]),
new Customer('zain', "jahangeer","male",28,3042887595,account[2]),

]

//Function to interact with bank account

async function service(){
    do{
        const accountNumberInput= await inquirer.prompt({
name:'accountNumber',
type:"number",
message:"enter your account number"
        })
const customers=customers.find(Customer => customers.account.accountNumber===accountNumberInput.accountNumber)

    } while(true)
}



