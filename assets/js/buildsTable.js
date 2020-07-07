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
            let title;
            let id;
            let date;
            let content_link;
            switch (type) {
                case 'releases':
                    date = item.published_at;
                    split_body = item.body.split('\n');

                    content_link = `
                        <td>
                            <a href='https://github.com/${repo}/archive/${item.tag_name}.zip' style='border-bottom: none;'>
                                <i class='fas fa-download'></i>
                                &nbsp;
                                ${item.name}
                            </a>
                        </td>
                        <td>${split_body[split_body.length - 1]}</td>
                    `

                    break;
                case 'commits':
                    date = item.commit.committer.date;

                    content_link = `
                        <td>
                            <a href='https://github.com/${repo}/archive/${item.sha}.zip' style='border-bottom: none;'>
                                <i class='fas fa-download'></i>
                                &nbsp;
                                <code>[${item.sha.substring(0, 7)}]</code>
                            </a>
                        </td>
                        <td>${item.commit.message.split('\n')[0]}</td>   
                    `

                    break;
            }

            let content_date = '';
            if (repo_extra != 'classic') content_date = new Date(date).toISOString().split('T')[0];

            let content = `
            <tr>
                ${content_link}
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
