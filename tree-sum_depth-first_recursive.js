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
const e = new Node(2)
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
//              4   2   1

const depthFirstValues = (root) => {
    if (root === null) return 0;
    // the function should return 3,11,4,2 
    const sumLeftValues = depthFirstValues(root.left); 
    // 3,4,1
    const sumRightValues = depthFirstValues(root.right);
    // how can we make it so that it returns 3+11+4+2 and 3+4+1
    return root.val + depthFirstValues(root.left) + depthFirstValues(root.right);
};

console.log(depthFirstValues(a));