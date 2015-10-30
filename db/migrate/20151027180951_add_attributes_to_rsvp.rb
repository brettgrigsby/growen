class AddAttributesToRsvp < ActiveRecord::Migration
  def change
    add_column :rsvps, :guest_name, :string
    add_column :rsvps, :attending?, :boolean
  end
end
