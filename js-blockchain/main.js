// import SHA256
const SHA256 = require("crypto-js/sha256");

// a blockchain is a combination of linked list and merkle trees

class Block {
  constructor(timestamp, data) {
    // the error was due a class needs a constructor.
    //the parameters is because the time for mining and stored data
    this.index = 0;
    this.timestamp = timestamp;
    this.data = data;
    this.previousHash = "0";
    this.hash = this.calculateHash();
    this.nonce = 0;
  }

  calculateHash() {
    //Hash take every pice of the block object and throw a sha256 and convert into a string
    return SHA256(
      this.index + this.previousHash + this.timestamp + this.data + this.nonce
    ).toString();
  }

  // mineBlock(difficulty) {
}
class Blockchain {
  constructor() {
    this.chain = [this.createGenesis()];
  }
  createGenesis() {
    return new Block(0, "01/01/2017", "Genesis block", "0");
  }
  lastBlock() {
    return this.chain[this.chain.length - 1];
  }
  addBlock(newblock) {
    newblock.previousHash = this.latestBlock().hash;
    newblock.hash = newBlock.calculateHash();
  }
}