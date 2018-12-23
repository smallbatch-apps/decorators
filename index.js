import Transaction from './transaction';

const testData = {
  id: '0983c114-5575-41c5-aae8-f1f4a6bf5c34',
  value: '12000',
  timestamp: '1545101186'
};

const tx = new Transaction(testData);

console.log(tx);