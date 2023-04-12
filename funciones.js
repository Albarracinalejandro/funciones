function aNumero(valor) {
  let valorFormateado;
  if (valor !== '') {
    valorFormateado = new Intl.NumberFormat('es-MX').format(parseInt(valor));
  } else {
    valorFormateado = '';
  }
  return valorFormateado
}

function aCelular(numero) {
  // Convertir el número a una cadena para poder trabajar con él
  let numeroComoCadena = numero.toString();
  // Dividir el número en dos grupos de tres dígitos y agregar un espacio entre ellos
  let numeroConEspacios = numeroComoCadena.substring(0, 3) + ' ' + numeroComoCadena.substring(3, 6) + ' ' + numeroComoCadena.substring(6, 10);
  // Devolver el número con espacios
  return numeroConEspacios;
}

function aFecha(dateString) {
  // necesita una string de tipo "21/2/2023 10:06:38" para devolver una string de tipo "21 de febrero de 2023, 10:06am";
  let months = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
  let dateParts = dateString.split(/[\/ :]/);
  let year = parseInt(dateParts[2]);
  let month = parseInt(dateParts[1]) - 1;
  let day = parseInt(dateParts[0]);
  let hours = parseInt(dateParts[3]);
  let minutes = parseInt(dateParts[4]);
  let ampm = hours >= 12 ? 'pm' : 'am';
  let formattedHours = hours % 12 || 12;
  let formattedMinutes = minutes.toString().padStart(2, '0');
  let formattedDate = `${day} de ${months[month]} de ${year}, ${formattedHours}:${formattedMinutes}${ampm}`;
  return formattedDate;
}
