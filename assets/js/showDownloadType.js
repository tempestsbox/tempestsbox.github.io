function showDownloadType(evt, downloadTypeName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("download-type");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(downloadTypeName).style.display = "block";
    evt.currentTarget.className += " active";
}
