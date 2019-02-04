## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :group
- belongs_to :user
-

## usersテーブル
|Column|Type|Options|
|-----|-----|-----|
|name|string|null: false|

### Association
- has_many :messages, through: :members
- has_many :groups

## messagesテーブル
|Column|Type|Options|
|-------|-----|------|
|content|text|null: false|

### Association
- belongs_to :user
- belongs_to :group

## groupsテーブル
|Column|Type|Options|
|-------|-----|------|
|name|text|null: false|

### Association
- belongs_to :user
- has_many :messages, through: :members





















