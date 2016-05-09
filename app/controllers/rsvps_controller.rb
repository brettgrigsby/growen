class RsvpsController < ApplicationController
  def index
    @rsvps = Rsvp.all
  end

  def show
    @rsvp = Rsvp.find(params[:id])
  end

  def edit
    @rsvp = Rsvp.find(params[:id])
  end

  def find
    name = params[:name]
    guest = Guest.all.find_all {|guest| guest.name.downcase == name.downcase}
    if guest.first
      render json: {id: guest.first.rsvp.id}, status: :ok
    else
      render json: {message: "could not find rsvp"}, status: 404
    end
  end

  def update
    @guest = Guest.find(params[:guest])
    if params[:song_title]
      @guest.update_attributes(song_title: params[:song_title],
                               song_artist: params[:song_artist])
      return render json: {message: "success"}
    end
    if params[:allergy]
      @guest.update_attributes(allergy: params[:allergy])
      return render json: {message: 'success'}
    end
    if params[:choice] && parse_choice(params[:choice])
      if params[:choice] == "Will Attend"
        render json: {message: "showem" }
      else
        render json: {message: "success"}
      end
    else
      render json: { :message => "update failed!" }
    end
  end

  private

  def parse_choice(choice)
    case choice
    when "Will Attend" 
      @guest.update_attributes(wedding: true) and return true
    when "Regretfully Decline"
      @guest.update_attributes(wedding: false) and return true
    when "Welcome Drinks"
      @guest.toggle_wd and return true
    when "Sunday Breakfast"
      @guest.toggle_sb and return true
    end
    if (choice && @guest.meal_choices.include?(choice))
      @guest.update_attributes(meal_choice: choice)
      true
    else
      false
    end
  end
end
