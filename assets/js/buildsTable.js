async function outputData(repo_user, repo_id, type, max_to_display, minified, show_date) {
    var repo = `${repo_user}/${repo_id}`;

    console.log(`Fetching API data for repo ${repo}`);
    fetch(`https://api.github.com/repos/${repo}/${type}`)
        .then(async (response) => {
            var data = await response.json();
            var output = '';

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
                            download_link = `https://github.com/${repo}/archive/refs/tags/${item.tag_name}.zip`;
                            name_link = `${window.location.origin}/article/release-${item.tag_name}`;

                            break;
                        case 'commits':
                            date = item.commit.committer.date;

                            extra_content = `
                    <td>
                        <div class='tooltip'>
                            ${item.commit.message.split('\n')[0]}${item.commit.message.split('\n')[2] ? ' <i class="fas fa-plus"></i>' : ''}
                            <span class='tooltip-text no-highlight-anti'>
                                ${item.commit.message.split('\n').join('<br>').split(' ').join('&nbsp;')}
                            </span>
                        </div>
                    </td>`

                            name = `<code>[${item.sha.substring(0, 7)}]</code>`;
                            download_link = `https://github.com/${repo}/archive/${item.sha}.zip`;
                            name_link = `https://github.com/tempestsbox/ttb/commit/${item.sha}`;

                            break;
                    }

                    let content_date = '';
                    if (show_date != false) {
                        content_date = new Date(date).toISOString().split('T')[0];
                    } else {
                        name_link = download_link;
                    }

                    let tr = 'tr';
                    if (minified) tr += " class='minified'";

                    let content = `
                    <${tr}>
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
        })
        .catch(error => {
            var output = `
                <tr class='fetch-error'>
                    <td>Error: ${error.message}</td>
                </tr>
            `;
            console.log(error);
    
            $(`.output.${repo_id}.${type}`).html(output);
        });
}
