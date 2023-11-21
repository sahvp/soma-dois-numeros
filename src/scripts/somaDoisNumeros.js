const somaDoisNumeros = () => {
  const numero1 = document.getElementById("numero_1").value;
  const numero2 = document.getElementById("numero_2").value;
  const somaNumeros = Number(numero1) + Number(numero2);
  document.getElementById("result").innerHTML = `A soma é: ${somaNumeros}`;
};
