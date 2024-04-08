#! /usr/bin/env node

import inquirer from "inquirer";

const userId: string = "awais";
const pin: number = 123;
let balance = 9000;
let moreTransactions = true;
const login = await inquirer.prompt([
  {
    name: "userId",
    message: "Enter User ID?",
    type: "string",
  },
  {
    name: "pin",
    message: "Enter PIN?",
    type: "number",
  },
]);

if (login.userId === userId && login.pin === pin) {
  while (moreTransactions) {
    const atmOptions = await inquirer.prompt([
      {
        name: "atmOptions",
        message: "Select the option below.",
        type: "list",
        choices: ["Withdraw", "Fast Cash", "Balance Inquiry"],
      },
    ]);

    if (atmOptions.atmOptions === "Withdraw") {
      const withDrawalMoney = await inquirer.prompt([
        {
          name: "money",
          message: "Enter your amount:",
          type: "number",
        },
      ]);
      if (parseInt(withDrawalMoney.money) <= balance) {
        balance -= parseInt(withDrawalMoney.money);
        console.log(`Your new balance is:${balance}`);
      } else {
        console.log("Insufficient balance!");
      }
    } else if (atmOptions.atmOptions === "Fast Cash") {
      const withDrawalMoney = await inquirer.prompt([
        {
          name: "money",
          message: "Select your amount:",
          type: "list",
          choices: [1000, 2000, 3000, 4000, 5000, 10000],
        },
      ]);
      if (parseInt(withDrawalMoney.money) <= balance) {
        balance -= parseInt(withDrawalMoney.money);
        console.log(`Your new balance is:${balance}`);
      } else {
        console.log("Insufficient balance!");
      }
    } else if (atmOptions.atmOptions === "Balance Inquiry") {
      console.log(`Your balance is:${balance}`);
    }

    const anyothertransaction = await inquirer.prompt([
      {
        name: "more",
        message: "Do you want another transaction?",
        type: "list",
        choices: ["true", "false"],
      },
    ]);
    if (anyothertransaction.more == "false") {
      moreTransactions = false;
    }
  }
} else {
  console.log("Your enter wrong UserID or PIN");
}
