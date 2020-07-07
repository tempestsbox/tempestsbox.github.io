var repo = "tempestsbox/ttb";
const max_to_display = 5;

async function outputData(type) {
    console.log(`Fetching API data for repo ${repo}`);
    var response = await fetch(`https://api.github.com/repos/${repo}/${type}`);
    var data = await response.json();

    let output = '';
    data.slice(0, max_to_display)
        .map((item, index) => {
            let title;
            let id;
            let date;
            let link_content;
            switch (type) {
                case 'releases':
                    title = item.name;
                    id = item.tag_name;
                    date = item.published_at;

                    link_content = `
                        <td>
                            <a href='https://github.com/${repo}/archive/${id}.zip' style='border-bottom: none;'>&nbsp;
                            <i class='fas fa-download'></i> ${title}
                            </a>
                        </td>  
                    `

                    break;
                case 'commits':
                    title = item.commit.message;
                    id = item.sha;
                    date = item.commit.committer.date;

                    title = title.split('\n');
                    title = title[0];

                    let build_number = data.length - index;

                    link_content = `
                        <td>
                            <a href='https://github.com/${repo}/archive/${id}.zip' style='border-bottom: none;'>&nbsp;
                            <i class='fas fa-download'></i> #${build_number}
                            </a>
                        </td>
                        <td data-build-id='${build_number}'>${title}</td>   
                    `

                    break;
            }

            let content = `
            <tr>
                ${link_content}
                <td style='float: right;'>${new Date(date).toISOString().split('T')[0]}</td>
            </tr>
            `

            if (index != data.length - 1) content += '<br>';
            output += (content);
    });

    $(`.output.${type}`).html(output);
}

['releases', 'commits'].forEach((item) => outputData(item));
