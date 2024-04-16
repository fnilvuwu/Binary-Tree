class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const a = new Node(3)
const b = new Node(11)
const c = new Node(4)
const d = new Node(4)
const e = new Node(5)
const f = new Node(1)

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//                  3
//                 / \
//                11   4
//               / \   \
//              4   5   1

const maxRootToLeaf = (root) => {
    if (root === null) return -Infinity
    if (root.left === null && root.right === null) return root.val;
    const maxChildPathSum = Math.max(maxRootToLeaf(root.left), maxRootToLeaf(root.right));
    return root.val + maxChildPathSum;
};

console.log(maxRootToLeaf(a));