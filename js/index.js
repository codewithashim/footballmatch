function myNavbarColups() {
    let navColups = document.getElementById("my__navcolups");
    if (navColups.className === "left_nav") {
        navColups.className += " responsive";
    } else {
        navColups.className = "left_nav";
    }

}


