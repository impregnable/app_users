class UsersController < ActionController::Base
  def index
     render json: User.joins(:country).select('users.*', 'countries.name AS country_name')
  end

  def show
      render json: User.joins(:country).select('users.*', 'countries.name AS country_name').find(params[:id])
  end

  def create
    User.create(user_params)
    render :nothing => true
  end

  def update
    user = User.find(params[:id])
    user.update(user_params)
    render :nothing => true
  end

  def destroy
    user = User.find(params[:id])
    user.destroy()
    render :nothing => true
  end

  private

    def user_params
      params.require(:user).permit(:fullname, :phone, :country_id)
    end

end
