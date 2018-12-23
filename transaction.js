

export default class Transaction {
  constructor(tx) {
    // for (let prop in tx) {
    //   this[prop] = tx[prop];
    // }

    //Object.entries(tx).forEach(([key, value]) => this[key] = value);

    Object.assign(this, tx);

    this.dateTimestamp = tx.timestamp;
  }

  set dateTimestamp(value) {
    this.timestamp = new Date(value * 1000);
  }


}