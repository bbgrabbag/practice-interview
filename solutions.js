const commonLetter = (str) => {
  const graph = {};

  for (let i = 0; i < str.length; i++) {
    if (!graph[str[i]]) graph[str[i]] = 1;
    else graph[str[i]]++;
  }

  const max = Math.max(...Object.values(graph));
  const output = [];
  for (let k in graph) {
    if (graph[k] === max) output.push(k);
  }
  return output;
};

const sortCharacters = (str) => {
  return str.split("").sort().join("");
};

const validateBrackets = (str) => {
    const stack = [];
    for(let i = 0; i < str.length; i++){
        if(str[i] === '('){
            stack.push(str[i]);
        } else {
            if(!stack.length) return false;
            stack.pop();
        }
    }
    return !stack.length;
}

module.exports = {
  commonLetter,
  sortCharacters,
  validateBrackets
};
