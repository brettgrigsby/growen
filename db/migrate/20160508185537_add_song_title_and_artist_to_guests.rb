class AddSongTitleAndArtistToGuests < ActiveRecord::Migration
  def change
    add_column :guests, :song_title, :string
    add_column :guests, :song_artist, :string
  end
end
