var isValid = function (s) {
    let stack = [];
    for(let i=0;i<s.length;i++){
        if(s[i] === '(' || s[i]==='{'||s[i]==='['){
            stack.push(s[i]);
        }else{
            const lastElement = stack.pop();
            switch(lastElement){
                case '(':
                    if(s[i] !== ')') return false;
                    break;
                case '{':
                    if(s[i] !== '}') return false;
                    break;
                case '[':
                    if(s[i] !== ']') return false;
                    break;
                default:
                    return false;
            }
        }
    }
    return stack.length === 0;
};