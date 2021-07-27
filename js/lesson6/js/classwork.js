// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
// зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(value => value.json())
    .then(value => {
        let posts = document.body.getElementsByClassName('posts')[0];

        for (const post of value) {
            let postCard = posts.appendChild(document.createElement('div'));
            postCard.className = 'cardWrap';

            let postH = postCard.appendChild(document.createElement('h2'));
            postH.innerText = `Post №${post.id} ${post.title}`;

            let postP = postCard.appendChild(document.createElement('p'));
            postP.innerText = post.body;

            let buttonComments = postCard.appendChild(document.createElement('button'));
            buttonComments.textContent = 'Show comments';

            buttonComments.onclick = function () {
                let comments = postCard.appendChild(document.createElement('div'));

                buttonComments.style.display = 'none';

                fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
                    .then(value => value.json())
                    .then(value => {
                        for (const comment of value) {
                            let commentCard = comments.appendChild(document.createElement('div'));
                            commentCard.className = 'cardWrap';

                            let commentH = commentCard.appendChild(document.createElement('h3'));
                            commentH.innerText = `Comment №${comment.id} ${comment.name}`;

                            let commentP = commentCard.appendChild(document.createElement('p'));
                            commentP.innerText = comment.body;

                            let commentEmail = commentCard.appendChild(document.createElement('p'));
                            commentEmail.innerText = comment.email;
                        }
                    });
            }
        }
    });