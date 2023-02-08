const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputArr = [];

rl.on("line", function (line) {
  if (line === "0") {
    inputArr.forEach(solution);
    rl.close();
  }
  inputArr.push(line);
}).on("close", function () {
  process.exit();
});

function solution(value) {
  const result = new Set();

  function recur(cur, limit, out = "", stack = []) {
    if (cur > limit) {
      result.add((out + stack.reverse().join(" ")).trim());
      return;
    }
    recur(cur + 1, limit, `${out}${cur} `, stack);
    recur(cur + 1, limit, out, [...stack, cur]);
  }
  recur(1, value);

  let output = "";
  result.forEach((v) => (output = `${output}\n${v}`));
  console.log(output);
}
