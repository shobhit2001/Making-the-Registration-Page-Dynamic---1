const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two' }
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const error = false; // Set this to true to simulate an error.

            if (!error) {
                resolve();
            } else {
                reject('Error: Something went wrong');
            }
        }, 2000);
    });
}

function updateLastUserActivityTime() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const lastActivityTime = new Date().toLocaleTimeString();
            resolve(lastActivityTime);
        }, 1000);
    });
}

function deleteLastPost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (posts.length > 0) {
                posts.pop();
                resolve();
            } else {
                reject('Error: No posts to delete');
            }
        }, 1000);
    });
}

// Example usage:
createPost({ title: 'Post Three', body: 'This is post three' })
    .then(() => {
        // Call the function to update the user's last activity time.
        return updateLastUserActivityTime();
    })
    .then((lastActivityTime) => {
        // Log all the posts and the last activity time of the user.
        getPosts();
        console.log('Last Activity Time: ', lastActivityTime);

        // Delete the last post and log the remaining posts after both promises are resolved.
        return Promise.all([deleteLastPost(), Promise.resolve()]);
    })
    .then(() => {
        getPosts(); // Log the remaining posts.
    })
    .catch((err) => console.log(err));


// Promise.all
const promise1 = Promise.resolve('Hello World');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => 
    setTimeout(resolve, 2000, 'Goodbye')
);

Promise.all([promise1, promise2, promise3]).then(values => console.log(values));