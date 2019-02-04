## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :group
- belongs_to :user

## usersテーブル
|Column|Type|Options|
|-----|-----|-----|
|name|string|null: false|
|image_id|integer|null: false, foreign_key:true|

### Association
- has_many :messages
- has_many :groups, through: :members
- has_many :members

## messagesテーブル
|Column|Type|Options|
|-------|-----|------|
|content|text||
|image|string||

### Association
- belongs_to :user
- belongs_to :group

## groupsテーブル
|Column|Type|Options|
|-------|-----|------|
|name|text|null: false|
|image_id|integer|null: false, foreign_key:true|

### Association
- belongs_to :user
- has_many :messages, through: :members























