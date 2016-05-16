class Guest < ActiveRecord::Base
  belongs_to :rsvp

  def welcome_class
    welcome_drinks ? "btn-success" : "btn-danger"
  end

  def wedding_class
    wedding ? "btn-success" : "btn-danger"
  end

  def brunch_class
    brunch ? "btn-success" : "btn-danger"
  end

  def ceremony_choices
    ["Will Attend", "Regretfully Decline"]
  end

  def event_choices
    ["Welcome Drinks", "Sunday Breakfast"]
  end

  def meal_choices
    ["Chicken w/ Sun Dried Tomatoes", "Beef Tenderloin", "Vegan - Stuffed Pepper", "Kid's - Chicken Tenders w/ Mac & Cheese"]
  end

  def toggle_wd
    update_attributes(welcome_drinks: !welcome_drinks)
  end

  def toggle_sb
    update_attributes(brunch: !brunch)
  end

  def allergies
    allergy || "none"
  end
end
