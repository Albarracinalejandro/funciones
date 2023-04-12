function aCelular(numero) {
  // Convertir el número a una cadena para poder trabajar con él
  let numeroComoCadena = numero.toString();
  // Dividir el número en dos grupos de tres dígitos y agregar un espacio entre ellos
  let numeroConEspacios = numeroComoCadena.substring(0, 3) + ' ' + numeroComoCadena.substring(3, 6) + ' ' + numeroComoCadena.substring(6, 10);
  // Devolver el número con espacios
  return numeroConEspacios;
}