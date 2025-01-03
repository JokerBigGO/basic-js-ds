const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.items = []; // Масив для збереження елементів стеку
  }

  // Додає елемент до стеку
  push(element) {
    this.items.push(element);
  }

  // Видаляє та повертає верхній елемент стеку
  pop() {
    return this.items.pop();
  }

  // Повертає верхній елемент стеку без його видалення
  peek() {
    return this.items[this.items.length - 1];
  }
}

module.exports = {
  Stack
};
