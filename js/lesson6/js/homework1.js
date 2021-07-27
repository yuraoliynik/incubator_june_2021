// 1.
// Отримати відповідь з цього ресурсу, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(value => value.json())
    .then(value => {
        let posts = document.body.getElementsByClassName('posts')[0];

        for (const post of value) {
            let postCard = posts.appendChild(document.createElement('div'));

            let postH = postCard.appendChild(document.createElement('h2'));
            postH.innerText = `Post №${post.id} ${post.title}`;

            let postP = postCard.appendChild(document.createElement('p'));
            postP.innerText = post.body;
        }
    });