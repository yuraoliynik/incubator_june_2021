// 2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/comments
fetch('https://jsonplaceholder.typicode.com/comments')
    .then(value => value.json())
    .then(value => {
        let comments = document.body.getElementsByClassName('comments')[0];

        for (const comment of value) {
            let commentCard = comments.appendChild(document.createElement('div'));

            let commentH = commentCard.appendChild(document.createElement('h2'));
            commentH.innerText = `Post №${comment.postId} comment №${comment.id} ${comment.name}`;

            let commentP = commentCard.appendChild(document.createElement('p'));
            commentP.innerText = comment.body;
        }
    });