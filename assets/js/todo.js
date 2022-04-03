function items(item) {
    // console.log(item);
    if (item.completed) {
        return (
            ` <div class="todo-item complete">
            <div class="checker"><span class=""></span></div> 
            <span>${item.title} </span> 
            </div>`
        );
    }
    else {
        return (
            ` <div class="todo-item active">
            <div class="checker"><span class=""></span></div>
            <span>${item.title}</span>
        </div>`
        );
    }


}

$(document).ready(function () {

    $.getJSON('https://jsonplaceholder.typicode.com/todos', function (data) {

        text = (data).map(items).join(' ');

        $(".todo-list").html(text);
    });



    "use strict";

    var todo = function () {
        $('.todo-list .todo-item input').click(function () {
            if ($(this).is(':checked')) {
                $(this).parent().parent().parent().toggleClass('complete');
            } else {
                $(this).parent().parent().parent().toggleClass('complete');
            }
        });

        $('.todo-nav .all-task').click(function () {
            $('.todo-list').removeClass('only-active');
            $('.todo-list').removeClass('only-complete');
            $('.todo-nav li.active').removeClass('active');
            $(this).addClass('active');
        });

        $('.todo-nav .active-task').click(function () {
            $('.todo-list').removeClass('only-complete');
            $('.todo-list').addClass('only-active');
            $('.todo-nav li.active').removeClass('active');
            $(this).addClass('active');
        });

        $('.todo-nav .completed-task').click(function () {
            $('.todo-list').removeClass('only-active');
            $('.todo-list').addClass('only-complete');
            $('.todo-nav li.active').removeClass('active');
            $(this).addClass('active');
        });

    };

    todo();

});