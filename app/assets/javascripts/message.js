$(document).on('turbolinks:load', function() {
$(function(){
  function buildHTML(message){
    var message = `<div class="message">
                    <div class="upper-message">
                      <div class="upper-message__user-name">
                      ${message.user_name}
                      </div>
                      <div class="upper-message__date">
                      ${message.created_at}
                      </div>
                    </div>
                    <div class="lower-meesage">
                    <p class="lower-message__content">
                    ${message.content}
                    </p>`
    if (message.image){
      var html =`${message}
      <img src="${message.image}" class='lower-message__image'>
                  </div>
                </div>`
    }else{
      var html = `${message}
                </div>
                </div>`
    }
    return html;
  }
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
      $.ajax({
      url: url,
      type: 'POST',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
      })
   .done(function(data){
    console.log(data)
      var html = buildHTML(data);
      $('.messages').append(html);
      $('.form__message').val('');
      // $('.form__message').remove();
    })
   .fail(function(){
      alert('error');
    })
  })
})
});
