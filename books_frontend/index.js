let url = "http://localhost:3000/books"

$(function(){
  $('#create-book').on('submit', function(ev){
    // debugger;
    ev.preventDefault();
    console.log("submitted")
    let title = $('#title').val()
    let author = $('#author').val()
    let pageCount = $('#page_count').val()

    $.ajax({
      url: url,
      type: "POST",
      data: {title: title, author: author, page_count: pageCount}
    }).then(function(resp){
      console.log(resp)
      $('#title').val("");
      $('#author').val("");
      $('#page_count').val("")
    })
  })

  $('#show-books').on('click', function(){
    $.ajax({
      url: url,
      type: "GET"
    }).then(function(resp){
      console.log(resp)
      let list = resp.books.map( (book) => (
        `<li id="${book.id}"><h2>${book.title}</h2><h3>${book.author}</h3><p>${book.page_count}</p></li>`
      ))
      $('.bookshelf ul').append(list)
    })
  })
})
