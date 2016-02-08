# app_users

Requirements: Rails, Postgres

```
# Run client
cd client
bower install
harp server --port 9000 # or another frontend development server

# Run server
cd server
bundle install
rake db:create db:migrate db:seed
rails server 
```
