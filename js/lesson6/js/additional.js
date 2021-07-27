// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
// кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
// Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста
fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(value => {
        for (const user of value) {
            let usersPage = document.getElementsByClassName('usersPage')[0];

            let userCard = usersPage.appendChild(document.createElement('div'));
            userCard.className = 'cardWrap';

            let userName = userCard.appendChild(document.createElement('h2'));
            userName.innerText = `${user.id}. ${user.name}`;

            let userInfo = userCard.appendChild(document.createElement('p'));
            userInfo.innerText = `phone: ${user.phone}\nemail: ${user.email}`;


            let userPostsButton = userCard.appendChild(document.createElement('button'));
            userPostsButton.innerText = 'Show posts';

            userPostsButton.onclick = function () {
                let userPosts = userCard.appendChild(document.createElement('div'));

                userPostsButton.style.display = 'none';

                fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
                    .then(value => value.json())
                    .then(value => {
                        for (const post of value) {
                            let postCard = userPosts.appendChild(document.createElement('div'));
                            postCard.className = 'cardWrap';

                            let postTitle = postCard.appendChild(document.createElement('h3'));
                            postTitle.innerText = `Post №${post.id} ${post.title}`;

                            let postBody = postCard.appendChild(document.createElement('p'));
                            postBody.innerText = post.body;

                            let postCommentsButton = postCard.appendChild(document.createElement('button'));
                            postCommentsButton.innerText = 'Show comments';

                            postCommentsButton.onclick = function () {
                                let postComments = postCard.appendChild(document.createElement('div'));

                                postCommentsButton.style.display = 'none';

                                fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
                                    .then(value => value.json())
                                    .then(value => {
                                        for (const comment of value) {
                                            let commentCard = postComments.appendChild(document.createElement('div'));
                                            commentCard.className = 'cardWrap';

                                            let commentTitle = commentCard.appendChild(document.createElement('h4'));
                                            commentTitle.innerText = `Comment №${comment.id} ${comment.name}`;

                                            let commentBody = commentCard.appendChild(document.createElement('p'));
                                            commentBody.innerText = comment.body;

                                            let commentEmail = commentCard.appendChild(document.createElement('p'));
                                            commentEmail.innerText = comment.email;
                                        }

                                    });

                            }
                        }
                    });

            }
        }
    });