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

const treeIncludes = (root) => {
    if (root === null) {
        console.log('the tree is empty'); 
        return 0;
    }
    const queue = [ root ];
    var min_value = root.val;
    while(queue.length > 0) {
        const current = queue.shift();

        if (current.val < min_value) {
            min_value = current.val
        }

        if (!min_value) {
            min_value = current.val
        }
        
        if (current.left) {
            queue.push(current.left);
        }
        if (current.right) {
            queue.push(current.right);
        }
    }
    return min_value;
};

console.log(treeIncludes(a));