function posts(post) {
    return (`
    <div class="blog_left_sidebar">
        <article class="blog_item">
            <div class="blog_details">
                <a class="d-inline-block" href="blog.html?id=${post.id}">
                    <h2 class="blog-head" style="color: #2d2d2d;">
                    ${post.title}
                    </h2>
                </a>
                <p>
                    ${post.body}
                </p>
            </div>
        </article>
    </div>
    `);
}
$.getJSON("https://jsonplaceholder.typicode.com/posts", function (data) {
    $('#posts').html((data).map(posts).join(' '));
});