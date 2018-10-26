function generarVentana() {
    var x = screen.width;
    var y = screen.height / 2;
    var resolution = "width=" + x + ", height=" + y;
    window.open("https://www.google.es", "Nombre pop-up", resolution, false);
}