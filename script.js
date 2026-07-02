function ingresar() {
  let correo = document.getElementById("correo").value;
  let codigo = document.getElementById("codigo").value;
  let password = document.getElementById("password").value;

  if (
    correo === "shaquiroga@uniboyaca.edu.co" &&
    codigo === "66125075" &&
    password === "saritaferro"
  ) {
    window.location.href = "notas.html";
  } else {
    document.getElementById("mensaje").innerHTML = "Datos incorrectos";
  }
}
