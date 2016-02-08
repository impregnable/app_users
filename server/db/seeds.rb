# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
User.delete_all


Country.delete_all

(1..10).each do |i|
  Country.create({
    name: Faker::Address.country
  })
end


(1..100).each do |i|
  User.create({
    fullname: Faker::Name.name,
    phone: Faker::PhoneNumber.phone_number,
    country: Country.all.sample
  })
end
