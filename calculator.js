/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */
 function calculatorModule() {
  var memory = 0;
  var total = 0;


  /**
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number }    current total
   */
   function load(x) {
      num(x);
      total = x;
      return total;
   }



  /**
   * Return the value of `total`
   * @return { Number }
   */
   function getTotal() {
    return total;
   }


  /**
   * Sums the value passed in with `total`
   * @param { Number } x
   */
   function add(x) {
    num(x);
    total += x;

   }


  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */
   function subtract(x) {
    num(x);
    total -= x;
   }


  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */
   function multiply(x) {
    num(x);
    total *= x;
   }


  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */
   function divide(x) {
    num(x);
    total /= x;
   }


  /**
   * Return the value stored at `memory`
   * @return { Number }
   */
   function getMemory() {
    return memory;
   }


  /**
   * Stores the value of `total` to `memory`
   */
   function storeTotal() {
    memory = total;
   }


  /**
   * Clear the value stored at `memory`
   */
   function clear() {
    memory = 0;
   }

  /**
   * Validation
   */
   function num(x) {
    if(typeof x !== "number") {
      throw Error();
    }
   }

   return{
    load: load,
    getTotal: getTotal,
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide,
    recallMemory: getMemory,
    saveMemory: storeTotal,
    clearMemory: clear
   };

 }


