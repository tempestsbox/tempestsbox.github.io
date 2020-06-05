var navbar = document.getElementById("navbar");

window.onscroll = function () {
    scrollFunction();
};
function scrollFunction() {
    if (
        document.body.scrollTop > 66 ||
        document.documentElement.scrollTop > 66
    ) {
        navbar.style.position = "fixed";
        navbar.style.top = "-2px";
        navbar.style.width = "200px";
        navbar.style.height = "100%";
    } else {
        navbar.style.position = "initial";
        navbar.style.top = "-100px";
        navbar.style.padding = "20px 0";
        navbar.style.width = "100%";
        navbar.style.height = "initial";
    }
}
