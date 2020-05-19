function search() {
    const searchTerm = document.getElementById("wiki-search").value;

    if (searchTerm != "") {
        $(".grid.item").each(function () {
            if ($(this).find(".two-grid#title")[0].innerHTML.toLowerCase().indexOf(searchTerm.toLowerCase()) == -1) {
                $(this).hide();
            } else {
                $(this).show();
            }
        });
    } else {
        $(".grid.item").each(function () {
            $(this).show();
        });
    }
}
