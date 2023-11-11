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

    // calculateHash() {
    //     null

    // }

    // mineBlock(difficulty) {

    // }