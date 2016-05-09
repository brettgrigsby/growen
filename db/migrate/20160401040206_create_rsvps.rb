class CreateRsvps < ActiveRecord::Migration
  def change
    create_table :rsvps do |t|
      t.boolean :submitted

      t.timestamps null: false
    end
  end
end
