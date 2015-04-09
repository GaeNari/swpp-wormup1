class LoginController < ApplicationController
  def index
  end

  def in
    render json: {"error_code": "2", "username": params[:username], "password": params[:password]}
  end
end
