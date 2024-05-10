let array = [6, 2, 3, 1];
let newarr = [];

function uPromedio(array) {
  let sumArrAll = array.reduce((total, current) => {
    return total + current;
  });
  return sumArrAll / array.length;
}

let promedio = uPromedio(array);

function squareDistance(promedio, array) {
  for (let i = 0; i < array.length; i++) {
    let squareNumber = Math.pow(array[i] - promedio, 2);
    newarr.push(squareNumber);
  }
}

squareDistance(promedio, array);

function SumValues(array) {
  let sumArrAll = array.reduce((total, current) => {
    return total + current;
  });
  return sumArrAll;
}

let sumValores = SumValues(newarr);

function valuesDivLenght(sumValues) {
  return sumValues / array.length;
}

let sumVal = valuesDivLenght(sumValores);

function sqrtFunction(value) {
  return Math.sqrt(value);
}

console.log(sqrtFunction(sumVal));
