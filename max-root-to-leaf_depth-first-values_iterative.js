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
    if (root === null) return [];
    const stack = [ root ];
    var sum = 0;
    var maxSum = 0;

    while(stack.length > 0) {
        const current = stack.pop();
        sum += current.val;

        if (current.right) {
            stack.push(current.right);
        }
        if (current.left) {
            stack.push(current.left);
        }

        // i expect this to run 3 times, and it sould output 18, 19, and 8 for the sum
        // seems resetting it will cause it to only sum the leaf node forgetting the value of it
        if (!current.right & !current.left) {
            maxSum = Math.max(maxSum, sum);
            sum -= current.val;
        }
    }
    return maxSum;
};

console.log(maxRootToLeaf(a));