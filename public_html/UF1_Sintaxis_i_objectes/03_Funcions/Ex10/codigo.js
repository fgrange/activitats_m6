function checkCookies() {
    return navigator.cookieEnabled;
}

if (checkCookies()) {
    alert("Cookies habilitadas.");
}
else {
    alert("Cookies deshabilitadas.");
}