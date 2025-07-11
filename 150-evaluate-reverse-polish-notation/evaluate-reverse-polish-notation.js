//  Evaluate Reverse Polish Notation

/** * @param {string[]} tokens
 * @return {number} */
var evalRPN = function(tokens) {
    let stack=[]
    for(let i=0;i<tokens.length;i++){
        if(!isNaN(parseInt(tokens[i]))){
            stack.push(parseInt(tokens[i]))
        }else{
            switch (tokens[i]) {
                case '+':
                    stack.push(stack.pop() + stack.pop());
                    break;
                case '-':
                    let b = stack.pop();
                    let a = stack.pop();
                    stack.push(a - b);
                    break;
                case '*':
                    stack.push(stack.pop() * stack.pop());
                    break;
                case '/':
                    let divisor = stack.pop();
                    let dividend = stack.pop();
                    stack.push(Math.trunc(dividend / divisor));
                    break;
            }
        }
    }
    return stack[0];
};
// Example usage:
let tokens = ["2", "1", "+", "3", "*"];
let result = evalRPN(tokens);
console.log(result); // Output: 9 (The expression evaluates to (2 + 1) * 3 = 9)