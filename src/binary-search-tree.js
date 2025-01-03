const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    const addNode = (node, data) => {
      if (!node) return new Node(data);

      if (data < node.data) {
        node.left = addNode(node.left, data);
      } else if (data > node.data) {
        node.right = addNode(node.right, data);
      }

      return node;
    };

    this.rootNode = addNode(this.rootNode, data);
  }

  has(data) {
    const search = (node, data) => {
      if (!node) return false;

      if (node.data === data) return true;

      return data < node.data ? search(node.left, data) : search(node.right, data);
    };

    return search(this.rootNode, data);
  }

  find(data) {
    const findNode = (node, data) => {
      if (!node) return null;

      if (node.data === data) return node;

      return data < node.data ? findNode(node.left, data) : findNode(node.right, data);
    };

    return findNode(this.rootNode, data);
  }

  remove(data) {
    const removeNode = (node, data) => {
      if (!node) return null;

      if (data < node.data) {
        node.left = removeNode(node.left, data);
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
      } else {
        if (!node.left) return node.right;
        if (!node.right) return node.left;

        let minRight = node.right;
        while (minRight.left) {
          minRight = minRight.left;
        }

        node.data = minRight.data;
        node.right = removeNode(node.right, minRight.data);
      }

      return node;
    };

    this.rootNode = removeNode(this.rootNode, data);
  }

  min() {
    if (!this.rootNode) return null;

    let node = this.rootNode;
    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    if (!this.rootNode) return null;

    let node = this.rootNode;
    while (node.right) {
      node = node.right;
    }

    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};
