async function fetchGitHubArchive(repo, element, alwaysDefaultBranch) {
    console.log("Fetching API data for repo " + repo);
    let response = await fetch("https://api.github.com/repos/" + repo + "/releases");
    let data = await response.json();
    if (alwaysDefaultBranch != true && data[0]) {
        updateButton(repo, data[0].tag_name, element);
        return;
    }
    response = await fetch("https://api.github.com/repos/" + repo);
    data = await response.json();

    console.log("Updating button");
    updateButton(repo, data.default_branch, element);
}
function updateButton(repo, archive, element) {
    switch (element) {
        case "github":
            textElement = document.getElementById(element);

            textElement.innerHTML = "<i class=\"fab fa-github\"></i> Direct Download (" + archive + ")";
            document.getElementById(element + "-link").href = "https://github.com/" + repo + "/archive/" + archive + ".zip";

            console.log("Updated button" + textElement);
            break;
        case "github-extras":
            textElement = document.getElementById(element);

            textElement.innerHTML = "<i class=\"fas fa-plus\"></i> Download TTB Extras (" + archive + ")";
            document.getElementById(element + "-link").href = "https://github.com/" + repo + "/archive/" + archive + ".zip";

            console.log("Updated button" + textElement);
            break;
    }
}
