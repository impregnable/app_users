class Users < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :fullname, null:false
      t.string :phone
    end
  end
end
