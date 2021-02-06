"use strict";

export class BankAccount {
  constructor() {
    this.accountOpen = false;
  }

  open() {
    if (this.accountOpen) {
      throw new ValueError("Account already open");
    } else {
      this.accountOpen = true;
      this.accountBalance = 0;
    }
  }

  close() {
    if (this.accountOpen) {
      this.accountOpen = false;
      this.accountBalance = null;
    } else {
      throw new ValueError("Account is closed");
    }
  }

  deposit(amount) {
    if (this.accountOpen) {
      if (amount >= 0) {
        this.accountBalance += amount;
      } else {
        throw new ValueError("Cannot deposit a negative amount");
      }
    } else {
      throw new ValueError("Account is not open");
    }
  }

  withdraw(amount) {
    if (this.accountOpen) {
      if (amount < 0 || amount > this.balance) {
        throw new ValueError("Invalid amount");
      } else {
        this.accountBalance -= amount;
      }
    } else {
      throw new ValueError("Account is not open");
    }
  }

  get balance() {
    if (this.accountOpen) {
      return this.accountBalance;
    } else {
      throw new ValueError("Account is not open");
    }
  }
}

export class ValueError extends Error {
  constructor() {
    super("Bank account error");
  }
}
