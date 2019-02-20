json.content  @message.content
json.user_id  @message.user.id
json.group_id  @message.group_id
json.message_id  @message.id
json.user_name  @message.user.name
json.created_at  @message.created_at.strftime("%Y/%m/%d %H:%M")
json.image  @message.image.url
