class CreateSessions < ActiveRecord::Migration
  def change
    create_table :sessions do |t|
      t.string :username
      t.string :password
      t.integer :count

      t.timestamps null: false
    end
  end
end
