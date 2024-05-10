let array = [6, 2, 3, 1];

function desviacionEstandar(array) {
  let newarr = [];
  let promedio;
  let sumArrAll = array.reduce((total, current) => {
    return total + current;
  });
  promedio = sumArrAll / array.length;
  console.log("Soy el promedio", promedio);
  for (let i = 0; i < array.length; i++) {
    let squareNumber = Math.pow(array[i] - promedio, 2);
    newarr.push(squareNumber);
  }
  console.log("Soy la resta del valor menos el promedio, al cuadrado", newarr);
  let sumArrEvery = newarr.reduce((total, current) => {
    return total + current;
  });
  console.log("Suma de todos los datos del nuevo array", sumArrEvery);
  let valuesDivLenght = sumArrEvery / array.length;
  console.log(
    "El resultado de la suma entre la cantidad de datos",
    valuesDivLenght
  );
  let raiz = Math.sqrt(valuesDivLenght);
  console.log("Resultado final al hacer una raiz", raiz);
  return raiz;
}

desviacionEstandar(array);
