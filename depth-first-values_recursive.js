class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const a = new Node('a')
const b = new Node('b')
const c = new Node('c')
const d = new Node('d')
const e = new Node('e')
const f = new Node('f')

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//                  a
//                 / \
//                b   c
//               / \   \
//              d   e   f

const depthFirstValues = (root) => {
    if (root === null) return [];
    const leftValues = depthFirstValues(root.left);
    const rightValues = depthFirstValues(root.right);
    return [ root.val, ...leftValues, ...rightValues ];
};

// spread ...
const peeps = ['phelipe', 'jason', 'raj', 'abby'];
const newPeeps = ['alvin', ...peeps, 'brian'];

console.log(newPeeps);

console.log(depthFirstValues(a));