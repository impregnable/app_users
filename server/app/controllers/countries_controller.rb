class CountriesController < ActionController::Base
  def index
     render json: Country.all
  end

end
