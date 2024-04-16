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

const treeIncludes = (root, val) => {
    if (root === null) {
        console.log('the tree is empty'); 
        return false;
    }
    const queue = [ root ];
    while(queue.length > 0) {
        const current = queue.shift();
        
        if (current.val === val) {
            console.log(val +" exist in the tree")
            return true
        }
        if (current.left) {
            queue.push(current.left);
        }
        if (current.right) {
            queue.push(current.right);
        }
    }
    console.log(val +" is not in the tree")
    return false;
};

console.log(treeIncludes(a, 'g'));