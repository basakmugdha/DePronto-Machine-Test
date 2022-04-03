function comment(comment) {
    return (`
        <div class="comment-list">
            <div class="single-comment justify-content-between d-flex">
                <div class="user justify-content-between d-flex">
                    <div class="desc">
                        <p class="comment">
                            ${comment.body}
                        </p>
                        <div class="d-flex justify-content-between">
                            <div class="d-flex align-items-center">
                                <h5 class ="me-3" >
                                    <p class="mb-0"> ${comment.name}</p>
                                </h5>
                                <p class="mb-0">${comment.email}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `);
}

let searchParams = new URLSearchParams(window.location.search);
if (searchParams.has('id')) {
    let id = searchParams.get('id');
    $.getJSON("https://jsonplaceholder.typicode.com/posts/" + id, function (data) {
        $('#blog-title').html(data.title);
        $('#blog-body').html(data.body);
        
        let count=0;
        $.getJSON("https://jsonplaceholder.typicode.com/comments", function (data) {
            $.each(data , function(index, item) { 
                if(item.postId==id){
                    $('#blog-comments').append(comment(item));
                    count++;
                }
            });
            $('.blog-comments-number').html(count+" Comments");
        });
    });
}
