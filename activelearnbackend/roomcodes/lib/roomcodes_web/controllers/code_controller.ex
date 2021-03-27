defmodule RoomcodesWeb.CodeController do
  use RoomcodesWeb, :controller

  def index(conn, _params) do
    json conn, %{msg: "You are at ActiveLearn's code controller index"}
  end

  def create_code(conn, _params) do
    json conn, %{code: Roomcodes.CodeWorker.create_room}
  end

  def reserved_rooms(conn, _params) do
    json conn, %{codes: Roomcodes.CodeWorker.get_all}
  end

end
