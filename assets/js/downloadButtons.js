async function fetchGitHubArchive(repo) {
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
    document.getElementById("github").innerHTML = "<i class=\"fab fa-github\"></i> Direct Download (" + data.default_branch + ")";
    document.getElementById("github-link").href = "https://github.com/" + repo + "/archive/" + data.default_branch + ".zip";
    console.log("Updated button");
}
