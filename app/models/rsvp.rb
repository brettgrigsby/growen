class Rsvp < ActiveRecord::Base
  has_many :guests

  def submitted_class
    submitted ? "submitted" : "not-submitted"
  end

end
