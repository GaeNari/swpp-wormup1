class LoginController < ApplicationController
  def index
  end

  def login
    username = params[:username]
    password = params[:password]
    puts params
    @user = Session.find_by(username: username)
    if @user and (@user.password == password)
      @user.count += 1
      @user.save
      session[:user] = @user.id
      render json: { user_name: @user.username, login_count: @user.count }
      #session issue & redirect
    else
      render json: { error_code: -4 }
      
    end
  end

  def up
    username = params[:username]
    password = params[:password]
    puts params
    if username.length < 5 or username.length > 20
      render json: { error_code: -1 }
    elsif password.length < 8 or username.length > 20
      render json: { error_code: -2 }
    elsif Session.find_by username: username
      render json: { error_code: -3 }
    else
      @user = Session.new(:username => username, :password => password, :count => 1)
      @user.save
      render json: { user_name: @user.username, login_count: @user.count }
    end
  end
end
