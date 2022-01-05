let array = [];

function arrayGenerator(valorFinal) {
  for(i=0;i<valorFinal;i++){
    array.push(i)
  }
}

arrayGenerator(15);
console.log(array)