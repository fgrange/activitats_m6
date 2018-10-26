var num = 0;

function generarNumero() {
    num = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
    switch (num) {
        case 0:
            window.location.href = "http://www.microsoft.com";
            break;
        case 1:
            window.location.href = "http://www.apple.com";
            break;
        case 2:
            window.location.href = "http://www.ubuntu.org";
            break;
    }
}