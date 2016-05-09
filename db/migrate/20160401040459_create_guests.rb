class CreateGuests < ActiveRecord::Migration
  def change
    create_table :guests do |t|
      t.string :name
      t.integer :rsvp_id
      t.boolean :wedding
      t.boolean :welcome_drinks
      t.boolean :brunch
      t.string :meal_choice

      t.timestamps null: false
    end
  end
end
