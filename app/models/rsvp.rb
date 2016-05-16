class Rsvp < ActiveRecord::Base
  has_many :guests

  def self.submitted
    all.find_all { |rsvp| rsvp.status == "submitted" }
  end

  def self.not_submitted
    all.find_all { |rsvp| rsvp.status == "not-submitted" }
  end

  def submitted_class
    submitted ? "submitted" : "not-submitted"
  end

  def status
    results = guests.map(&:wedding).uniq
    if results == [nil]
      "not-submitted"
    else
      "submitted"
    end
  end

end
