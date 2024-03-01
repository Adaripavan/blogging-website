// Function to display current time
function displayTime() {
    const currentTime = new Date().toLocaleTimeString();
    document.getElementById('currentTime').innerText = `Current Time: ${currentTime}`;
}

// Update time every second
setInterval(displayTime, 1000);

// Function to handle form submission
document.getElementById('postForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const title = this.querySelector('input[name="title"]').value;
    const content = this.querySelector('textarea[name="content"]').value;

    // Create new post element
    const postElement = document.createElement('div');
    postElement.classList.add('post');
    postElement.innerHTML = `
        <h2>${title}</h2>
        <p>${content}</p>
        <span class="post-time">Posted just now</span>
        <button class="edit-btn">Edit</button>
        <button class="delete-btn">Delete</button>
    `;

    // Append post to the blog posts section
    document.querySelector('.blog-posts').appendChild(postElement);

    // Clear form fields
    this.reset();
});
