class AddAllergyToGuests < ActiveRecord::Migration
  def change
    add_column :guests, :allergy, :string
  end
end
