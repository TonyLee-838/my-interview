function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}


let result = [];

var allPossibleFBT = function (n) {
  if(n === 1) return [new TreeNode(0)];
  // 5   1 + 3  3 + 1
  for(let i = 1; i < n; i += 2){
    const leftNum = i;
    const rightNum = n - 1- i;

    const rootNode = new TreeNode(0);

    const leftNodes = allPossibleFBT(leftNum);
    const rightNodes = allPossibleFBT(rightNum)
    
  }

};

// console.log(allPossibleFBT(5))
// 1 3 5 7
/**
 *                  f(7)
 *          f(5)
 *
 *
 *  */
