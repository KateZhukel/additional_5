module.exports = function check(str, bracketsConfig) {
    let stack = [];
    let openBrackets = bracketsConfig.map(a => a[0]);
    let closeBrackets = bracketsConfig.map(a => a[1]);
    for (let i = 0; i < str.length; i++) {
        if(openBrackets.includes(str[i])){
            if(stack.length > 0 && stack.slice(-1)[0] === str[i] && closeBrackets.includes(str[i])
                    && openBrackets.includes(str[i])){
                stack.pop();
            } else {
                stack.push(str[i]);
            }
        } else {
            if(stack.length === 0 || !checkPair(stack.pop(),str[i], bracketsConfig)) {
                return false;
            }
        }
    }
    if(stack.length === 0 ){
        return true;
    } else {
        return false;
    }
};
function checkPair(bracketOpen, bracketClose, bracketsArray) {
    for (let i = 0; i < bracketsArray.length; i++) {
        if(bracketsArray[i][0] === bracketOpen && bracketsArray[i][1] === bracketClose){
            return true;
        }
    }
    return false;
}
