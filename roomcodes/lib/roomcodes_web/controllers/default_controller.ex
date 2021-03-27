defmodule RoomcodesWeb.DefaultController do
  use RoomcodesWeb, :controller

  def index(conn, _params) do
    text conn, "You are at ActiveLearn's default controller index"
  end
end
