async function fetchGitHubArchive(repo, element) {
    console.log("Fetching API data for repo " + repo);
    let response = await fetch("https://api.github.com/repos/" + repo + "/releases");
    let data = await response.json();
    if (data[0]) {
        updateButton(data[0].tag_name);
        return;
    }
    response = await fetch("https://api.github.com/repos/" + repo);
    data = await response.json();

    console.log("Updating button");

    switch (element) {
        case "github":
            textElement = document.getElementById(element);

            textElement.innerHTML = "<i class=\"fab fa-github\"></i> Download TTB (Direct, " + data.default_branch + ")";
            document.getElementById(element + "-link").href = "https://github.com/" + repo + "/archive/" + data.default_branch + ".zip";

            console.log("Updated button" + textElement);
            break;
        case "github-extras":
            textElement = document.getElementById(element);

            textElement.innerHTML = "<i class=\"fab fa-github\"></i> Direct Download (" + data.default_branch + ")";
            document.getElementById(element + "-link").href = "https://github.com/" + repo + "/archive/" + data.default_branch + ".zip";

            console.log("Updated button" + textElement);
            break;
    }
}
