const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {ListNode} l
 * @param {Number} k
 * @return {ListNode}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 */
function removeKFromList(l, k) {
  // Удаление элементов с начала списка, если они равны k
  while (l !== null && l.value === k) {
    l = l.next;
  }

  // Если список пустой после удаления
  if (!l) return null;

  let current = l;

  // Проходим по списку и удаляем элементы с value === k
  while (current.next !== null) {
    if (current.next.value === k) {
      current.next = current.next.next; // Пропускаем элемент с k
    } else {
      current = current.next; // Переходим к следующему узлу
    }
  }

  return l;
}

module.exports = {
  removeKFromList
};
