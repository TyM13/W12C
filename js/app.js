function postsuccess(response) {                                    //if the request is successful it will inject a html tag and print success
    document.body.insertAdjacentHTML(`beforeend`, `
                <h1>success</h1>`
    )
}

function postfailure(error) {                                       //if the request fails it will inject a html tag and print sorry try again
    document.body.insertAdjacentHTML(`afterbegin`, `
                <h1>sorry try again</h1>`
    )
}


function send_post(details) {                                       //function called send_post

let post_title = document.getElementById(`post_text`)[`value`]      //gets the id post_text grabs the value (info from the tag) and sets as variable post_title
let post_body = document.getElementById(`post_body`)[`value`]       //gets the id post_body grabs the value (info from the tag) and sets as variable post_body
let user_id = document.getElementById(`user_id`)[`value`]           //gets the id user_id grabs the value (info from the tag) and sets as variable user_id


    axios.request({                                                 //requests the api (url) and would send (POST) the data to a server, then goes to postsuccess if it works or postfailure if it fails
        url: `https://jsonplaceholder.typicode.com/posts`,
        method: `POST`,
        data: {

            post: post_title,
            body: post_body,
            user_id:user_id
        }
    }).then(postsuccess).catch(postfailure)
}


let submit_button = document.getElementById(`post`);                //gets the id post and sets it as the variable submit_button
submit_button.addEventListener(`click`, send_post);                 //when submit button is clicked it will call the function send_post


//---------------------------------------------------//


function postsuccesstwo(response) {                                 //if the request is successful it will inject a html tag and print success on updating post
    document.body.insertAdjacentHTML(`afterbegin`, `
                <h1>success on updating post</h1>`
    )
}

function postfailuretwo(error) {                                    //if the request fails it will inject a html tag and print sorry try again
    document.body.insertAdjacentHTML(`afterbegin`, `
                <h1>sorry try again</h1>`
    )
}


    axios.request({                                                 //requests the api (url) and would update existing Post (PATCH), then goes to postsuccesstwo if it works or postfailuretwo if it fails
        url: `https://jsonplaceholder.typicode.com/posts/1`,
        method: `PATCH`,
        data: {

            title: `sunt aut facere repellat provident occaecati excepturi optio reprehenderit`,
            body: `quia et suscipit nsuscipit recusandae consequuntur expedita et cum nreprehenderit molestiae ut ut quas totam nnostrum rerum est autem sunt rem eveniet architecto`,

            
        }
    }).then(postsuccesstwo).catch(postfailuretwo)


//---------------------------------------------------//

function delepostsuccess (response) {                               //if the request is successful it will inject a html tag and print success on updating post success on deleting post
    document.body.insertAdjacentHTML(`afterbegin`, `
                <h1>success on deleting post</h1>`
    )
}


function deletepostfail (error) {                                   //if the request fails it will inject a html tag and print failed to delete post
    document.body.insertAdjacentHTML(`afterbegin`, `
    <h1>failed to delete post</h1>`
)

}


axios.request({                                                     //requests the api (url, gets the first post) and would delete the existing post (DELETE), then goes to delepostsuccess if it works or deletepostfail if it fails
url:`https://jsonplaceholder.typicode.com/posts/1`,
method: `DELETE`

}).then(delepostsuccess).catch(deletepostfail)


//---------------------------------------------------//


function graballsuccess (response) {                                //a for loop variable i = 0; if i is less than the length of data it will keep counting and stop when it exceeds it
    for (let i = 0; i < response[`data`].length; i++) {             // goes into the  response (obj) then goes into data (array) grabs the object the conter is on and displays the title body and userid
    document.body.insertAdjacentHTML(`afterbegin`, `
                
                <h1>${response[`data`][i][`title`]}</h1>
                <p>${response[`data`][i][`body`]}</p>
                <p>${response[`data`][i][`userId`]}</p>
                `
    )
}
}


function graballfail (error) {                                      //if the request fails it will inject a html tag and print failed to get all posts please try again
    document.body.insertAdjacentHTML(`afterbegin`, `
    <h1>failed to get all posts please try again</h1>`
)

}


axios.request({                                                     //requests the api (url) and gets the infomation, then goes to graballsuccess if it works or graballfail if it fails
url:`https://jsonplaceholder.typicode.com/posts`,


}).then(graballsuccess).catch(graballfail)