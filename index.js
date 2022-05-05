const colors = require("colors");

function printPrimeNumbers() {
  let [arg1, arg2] = process.argv.slice(2);
  arg1 = parseInt(arg1);
  arg2 = parseInt(arg2);
  if (isNaN(arg1) || isNaN(arg2)) {
    console.log(colors.red("Аргумент не является натуральным числом"));
    return;
  }
  let arrColors = [colors.red, colors.yellow, colors.green];
  let warning = true;
  nextPrime: for (let i = arg1; i < arg2; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        continue nextPrime;
      }
    }
    warning = false;
    if (arrColors.length === 0) {
      arrColors = [colors.green, colors.red, colors.yellow];
    }
    console.log(arrColors.shift()(i));
  }
  if (warning) {
    console.log(colors.red(`В диапазоне ${arg1}-${arg2} нет простых чисел`));
  }
}
printPrimeNumbers();
