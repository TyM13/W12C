// function postsuccess(response) {
//     document.body.insertAdjacentHTML(`afterbegin`, `
//                 <h1>success</h1>`
//     )
// }

// function postfailure(error) {
//     document.body.insertAdjacentHTML(`afterbegin`, `
//                 <h1>sorry try again</h1>`
//     )
// }


// function send_post(details) {

// let post_title = document.getElementById(`post_text`)[`value`]
// let post_body = document.getElementById(`post_body`)[`value`]
// let user_id = document.getElementById(`user_id`)[`value`]


//     axios.request({
//         url: `https://jsonplaceholder.typicode.com/posts`,
//         method: `POST`,
//         data: {

//             post: post_title,
//             body: post_body,
//             user_id:user_id
//         }
//     }).then(postsuccess).catch(postfailure)
// }


// let submit_button = document.getElementById(`post`);
// submit_button.addEventListener(`click`, send_post);


//---------------------------------------------------//


// function postsuccesstwo(response) {
    // document.body.insertAdjacentHTML(`afterbegin`, `
    //             <h1>success on updating post</h1>`
//     )
// }

// function postfailuretwo(error) {
//     document.body.insertAdjacentHTML(`afterbegin`, `
//                 <h1>sorry try again</h1>`
//     )
// }


    // axios.request({
    //     url: `https://jsonplaceholder.typicode.com/posts/1`,
    //     method: `PATCH`,
    //     data: {

    //         title: `tillds`,
    //         body: `asa`,

            
    //     }
    // }).then(postsuccesstwo).catch(postfailuretwo)


//---------------------------------------------------//

// function delepostsuccess (response) {
//     document.body.insertAdjacentHTML(`afterbegin`, `
//                 <h1>success on deleting post</h1>`
//     )
// }


// function deletepostfail (error) {
//     document.body.insertAdjacentHTML(`afterbegin`, `
//     <h1>failed to delete post</h1>`
// )

// }


// axios.request({
// url:`https://jsonplaceholder.typicode.com/posts/1`,
// method: `DELETE`

// }).then(delepostsuccess).catch(deletepostfail)


//---------------------------------------------------//


function graballsuccess (response) {
    for (let i = 0; i < response[`data`].length; i++) {
    document.body.insertAdjacentHTML(`afterbegin`, `
                
                <h1>${response[`data`][i][`title`]}</h1>
                <p>${response[`data`][i][`body`]}</p>
                <p>${response[`data`][i][`userId`]}</p>
                `
    )
}
}


function graballfail (error) {
    document.body.insertAdjacentHTML(`afterbegin`, `
    <h1>failed to get all posts please try again</h1>`
)

}


axios.request({
url:`https://jsonplaceholder.typicode.com/posts`,


}).then(graballsuccess).catch(graballfail)