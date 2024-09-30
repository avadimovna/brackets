module.exports = function check(str, bracketsConfig) {
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {
      if (str[i] === bracketsConfig[j][0] && str[i] === bracketsConfig[j][1] && stack[stack.length - 1] !== str[i]) {
        stack.push(str[i]);
        continue;
      } 
      if (str[i] === bracketsConfig[j][0] && str[i] !== bracketsConfig[j][1]){
        stack.push(str[i]);
        continue;
      }
      if (str[i] === bracketsConfig[j][1]){
        if (stack[stack.length - 1] === bracketsConfig[j][0]) {
          stack.pop();
        } else {
          return false;
        }
      }
    }
  }
  return stack.length === 0;
}


