module.exports = function solveEquation(equation) {
  var a;
  var b;
  var c;
  var solution = [];

  equation = equation.split(" ");

  a = parseInt(equation[0]);
  b = parseInt(equation[4]);
  if(equation[3] == "-") b = -b;
  c = parseInt(equation[8]);
  if(equation[7] == "-") c = -c;

  solution[0] = Math.round((-b + Math.sqrt(Math.pow(b,2) - 4*a*c))/2/a, 1);
  solution[1] = Math.round((-b - Math.sqrt(Math.pow(b,2) - 4*a*c))/2/a, 1);

  solution.sort((left, right) => left - right);

  return solution;
}
