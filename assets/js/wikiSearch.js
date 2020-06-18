const searchParamName = 'search';
var urlParams = new URLSearchParams(window.location.search);

function search() {
    const searchTerm = document.getElementById("wiki-search").value;

    if (searchTerm != '') {
        $(".grid.item").each(function () {
            if ($(this).find(".two-grid#title")[0].innerHTML.toLowerCase().indexOf(searchTerm.toLowerCase()) == -1) {
                $(this).hide();
            } else {
                $(this).show();
            }
        });

        if (urlParams.get(searchParamName) == undefined) {
            urlParams.append(searchParamName, searchTerm);
        } else {
            urlParams.set(searchParamName, searchTerm);
        }
        window.history.replaceState(null, null, '?' + urlParams.toString());
    } else {
        $(".grid.item").each(function () {
            $(this).show();
        });

        window.history.replaceState(null, null, '');
    }
}
