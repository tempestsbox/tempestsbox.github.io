var button = document.getElementById("go-to-top");
var topHovered = false;
var isAtTop = false;

window.onscroll = function () {
    scrollFunction();
};
function scrollFunction() {
    if (
        document.body.scrollTop > 66 ||
        document.documentElement.scrollTop > 66
    ) {
        if (topHovered) button.style.opacity = 1;
        else button.style.opacity = 0.3;
        button.style.display = "block";
    } else {
        button.style.display = "none";
        topHovered = false;
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
function topHover() {
    topHovered = !topHovered;
    scrollFunction();
}
