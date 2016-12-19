# ajax_exercise

Objectives:
- 'Hide Books' button should empty the `ul` inside of the `div` with the class of `bookshelf`
- Each book `li` should have a delete button that deletes the book and removes it from the `ul`

The only thing i added to the code was to clear out the input fields after the submit event
``` js
$.ajax({
      url: url,
      type: "POST",
      data: {title: title, author: author, page_count: pageCount}
    }).then(function(resp){
      
      // this is nice to do :)
      $('#title').val("");
      $('#author').val("");
      $('#page_count').val("");
      
    })

```
