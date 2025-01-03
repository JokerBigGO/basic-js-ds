const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null; // Начало очереди
    this.tail = null; // Конец очереди
  }

  // Метод для получения связного списка
  getUnderlyingList() {
    return this.head; // Возвращаем начало очереди, которая представляет весь список
  }

  // Метод для добавления элемента в очередь
  enqueue(value) {
    const newNode = new ListNode(value); // Создаем новый узел
    if (!this.tail) { // Если очередь пуста
      this.head = newNode; // Начало очереди становится новым узлом
      this.tail = newNode; // Конец очереди также становится новым узлом
    } else {
      this.tail.next = newNode; // Добавляем новый узел в конец очереди
      this.tail = newNode; // Обновляем указатель на конец очереди
    }
  }

  // Метод для удаления элемента из начала очереди
  dequeue() {
    if (!this.head) return null; // Если очередь пуста, возвращаем null
    const value = this.head.value; // Сохраняем значение первого узла
    this.head = this.head.next; // Сдвигаем начало очереди на следующий узел
    if (!this.head) this.tail = null; // Если очередь опустела, сбрасываем tail
    return value; // Возвращаем удаленное значение
  }
}

module.exports = {
  Queue
};
