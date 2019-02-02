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
｜user-id|integer|null: false, foreign_key: true|
|name|string|null: false|
|e-mail|text|null: false|
|password|integer|null: false|

### Association
- has_many :messages
- has_many :groups

## messagesテーブル
|Column|Type|Options|
|-------|-----|------|
|group_id|integer|null: false,foreign_key: true|
|user_id|integer|null: false,foreign_key: true|
|message_id|integer|null: false,foreign_key: true|
|message_text|text|null: false|

### Association
- belongs_to :user
- belongs_to :group

## groupsテーブル
|Column|Type|Options|
|-------|-----|------|
|user_id|integer|null: false,foreign_key: true|
|message_id|integer|null: false,foreign_key: true|
|group_id|integer|null: false,foreign_key: true|
|group_name|string|null: false|

### Association
- belongs_to :user
- has_many :messages




















