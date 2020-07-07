const max_to_display = 5;

async function outputData(type, repo_extra) {
    var repo_user = "tempestsbox";
    var repo_id = "ttb";

    if (repo_extra != undefined) repo_id += `-${repo_extra}`;
    var repo = `${repo_user}/${repo_id}`;

    console.log(`Fetching API data for repo ${repo}`);
    var response = await fetch(`https://api.github.com/repos/${repo}/${type}`);
    var data = await response.json();

    let output = '';
    data.slice(0, max_to_display)
        .map((item, index) => {
            let name;
            let date;
            let extra_content;

            let name_link;
            let download_link;

            switch (type) {
                case 'releases':
                    date = item.published_at;
                    split_body = item.body.split('\n');

                    extra_content = `
                <td>${split_body[split_body.length - 1]}</td>
                    `

                    name = item.name;
                    download_link = `https://github.com/${repo}/archive/${item.tag_name}.zip`;
                    name_link = `https://tempestsbox.github.io/article/release-${item.tag_name}`;

                    break;
                case 'commits':
                    date = item.commit.committer.date;

                    extra_content = `<td>${item.commit.message.split('\n')[0]}</td>`

                    name = `<code>[${item.sha.substring(0, 7)}]</code>`;
                    download_link = `https://github.com/${repo}/archive/${item.sha}.zip`;
                    name_link = `https://github.com/tempestsbox/ttb/commit/${item.sha}`;

                    break;
            }

            let content_date = '';
            if (repo_extra != 'classic') {
                content_date = new Date(date).toISOString().split('T')[0];
            } else {
                name_link = download_link;
            }

            let content = `
            <tr>
                <td>
                    <a href='${download_link}' style='border-bottom: none;'>
                        <i class='fas fa-download'></i>
                    </a>
                    &nbsp;
                    <a href='${name_link}' target='_blank' style='border-bottom: none;'>
                        ${name}
                    </a>
                </td>
                ${extra_content}
                <td style='float: right;'>&nbsp;${content_date}</td>
            </tr>
            `

            if (index != data.length - 1) content += '<br>';
            output += (content);
    });

    $(`.output.${repo_id}.${type}`).html(output);
}

['releases', 'commits'].forEach((item) => outputData(item));
outputData('releases', 'classic');
