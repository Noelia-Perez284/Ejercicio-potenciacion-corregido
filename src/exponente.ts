let btnEnviar = <HTMLButtonElement>document.getElementById("btnEnviar");
let inputBase = <HTMLInputElement>document.getElementById("base");
let inputExponente = <HTMLInputElement>document.getElementById("exponente");
let rotulo = <HTMLElement>document.getElementById("rotulo");

function potenciar(base: number, exponente: number) {
  let resultado: number;
  if (exponente > 0) {
    resultado = base ** exponente;
  } else {
    if (exponente === 0) {
      resultado = 1;
    } else {
      console.log("Debe ingresar un nro > 0");
      resultado = 0;
    }
  }
  return resultado;
  // console.log(resultado):
}

btnEnviar.addEventListener("click", () => {
  let numeroBase = Number(inputBase.value);
  let numeroExponente = Number(inputExponente.value);

  let result = potenciar(numeroBase, numeroExponente);
  if (result === 0) {
    rotulo.innerHTML = "Debe ingresar un nro > 0";
  } else {
    rotulo.innerHTML = `La potencia de ${numeroBase} es ${result}`;
  }
});

// btnEnviar.addEventListener("click", () => {
//   function potencia(
//     base: number = Number(inputBase.value),
//     exponente: number = Number(inputExponente.value)
//   ) {
//     if (exponente > 0) {
//       let resultado: number = base ** exponente;
//       console.log(resultado);
//       rotulo.innerHTML = "El resultado es " + resultado;
//     } else if (exponente === 0) {
//       let resultado = 1;
//       console.log(resultado);
//       rotulo.innerHTML = "el resultado es " + resultado;
//     }
//   }
//   console.log(potencia());
// });

// //console.log(potencia(base, exponente));
