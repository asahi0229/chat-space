$(function(){
  function buildHTML(message){
    var haml = `.message
                  .upper-message
                    .upper-message__user-name
                      = message.user.name
                    .upper-message__date
                      = message.created_at.strftime("%Y/%m/%d %H:%M")
                  .lower-meesage
                    - if message.content.present?
                      %p.lower-message__content
                        = message.content
                    = image_tag message.image.url, class: 'lower-message__image' if message.image.present?`
    return haml;
  }
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
   .done(function(data){
      var haml = buildHTML(data);
      $('.messages').append(html)
      $('.textbox').val('')
    })
   .fail(function(){
      alert('error');
    })
  })
